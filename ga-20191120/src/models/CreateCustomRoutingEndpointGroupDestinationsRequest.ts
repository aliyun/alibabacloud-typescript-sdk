// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomRoutingEndpointGroupDestinationsRequestDestinationConfigurations extends $dara.Model {
  /**
   * @remarks
   * The last port of the backend service port range.
   * 
   * Valid values: **1** to **65499**. The value of **FromPort** must be equal to or smaller than the value of **ToPort**.
   * 
   * You can specify up to 20 last ports in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The backend service protocol of the endpoint group. Valid values:
   * 
   * *   **TCP**
   * *   **UDP**
   * *   **TCP+UDP: the TCP and UDP protocols.**
   * 
   * You can specify up to four backend service protocols for each endpoint group mapping.
   * 
   * This parameter is required.
   */
  protocols?: string[];
  /**
   * @remarks
   * The response parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      protocols: 'Protocols',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'number',
      protocols: { 'type': 'array', 'itemType': 'string' },
      toPort: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointGroupDestinationsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The mapping configuration of the endpoint group.
   * 
   * You need to specify the backend service ports and protocols for the endpoint group. The ports are mapped to listener ports.
   * 
   * You can specify up to 20 mappings in each call.
   * 
   * This parameter is required.
   */
  destinationConfigurations?: CreateCustomRoutingEndpointGroupDestinationsRequestDestinationConfigurations[];
  /**
   * @remarks
   * The endpoint group ID.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The mappings of the endpoint group.
   * 
   * You need to specify the backend service ports and protocols for the endpoint group. The ports are mapped to listener ports.
   * 
   * You can specify up to 20 mappings in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * epg-bp14sz7ftcwwjgrdm****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among all requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
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
      destinationConfigurations: 'DestinationConfigurations',
      dryRun: 'DryRun',
      endpointGroupId: 'EndpointGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      destinationConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointGroupDestinationsRequestDestinationConfigurations },
      dryRun: 'boolean',
      endpointGroupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destinationConfigurations)) {
      $dara.Model.validateArray(this.destinationConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

