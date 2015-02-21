package org.branscha;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.Date;

public class RestService {
    @GET
    @Path("/hello")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public Message hello(@QueryParam("name") @DefaultValue("World") String name) {
        return new Message(String.format("REST Service - %s - Hello %s!", new Date(), name));
    }
}
