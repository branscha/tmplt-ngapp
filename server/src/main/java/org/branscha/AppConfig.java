package org.branscha;

import com.fasterxml.jackson.jaxrs.json.JacksonJaxbJsonProvider;

import org.apache.cxf.Bus;
import org.apache.cxf.bus.spring.SpringBus;
import org.apache.cxf.endpoint.Server;
import org.apache.cxf.jaxrs.JAXRSServerFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.List;

// This class replaces a typical Spring configuration file.
// The @Bean methods each produce a <bean> instance, the name and type are derived from the method declaration.

@Configuration
public class AppConfig {

    // You must add this definition or otherwise the CXFServlet will complain.

    @Bean
    public Bus cxf() {
        return new SpringBus();
    }

    // Create the CXF REST server. The server will detect if it is running standalone
    // or in a servlet context. If running standalone it will start a Jetty instance, if
    // in servlet context it will service the servlet.

    @Bean
    public Server cxfRestServer() {
        JAXRSServerFactoryBean cxfServer = new JAXRSServerFactoryBean();
        cxfServer.setServiceBeanObjects(restService());
        cxfServer.setAddress(restAddress());
        cxfServer.setProviders(providers());
        return cxfServer.create();
    }

    protected String restAddress() {
        return "/";
    }

    // All JAXB classes that can be returned from a REST method should be
    // listed here.

    @Bean
    @SuppressWarnings("unchecked")
    public List<?> providers() {
        return Arrays.asList(
        new JacksonJaxbJsonProvider()
        );
    }


    // We create a separate method so that its dependencies will be injected
    // by the Spring configuration system. If we would create it directly using new
    // the Spring system would not have the change to inject the dependencies.

    @Bean
    public RestService restService() {
        return new RestService();
    }

}
