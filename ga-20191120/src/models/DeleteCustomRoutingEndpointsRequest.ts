// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomRoutingEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among all requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the endpoint group to which the endpoint that you want to delete belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * epg-bp1bpn0kn908w4nb****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The IDs of endpoints to be deleted.
   * 
   * If you do not set this parameter, all the endpoints in the specified endpoint group are deleted.
   * 
   * You can specify at most 10 endpoint IDs.
   * 
   * This parameter is required.
   */
  endpointIds?: string[];
  /**
   * @remarks
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endpointGroupId: 'EndpointGroupId',
      endpointIds: 'EndpointIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointGroupId: 'string',
      endpointIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointIds)) {
      $dara.Model.validateArray(this.endpointIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

