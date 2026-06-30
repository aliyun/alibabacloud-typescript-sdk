// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomRoutingEndpointGroupDestinationsRequestDestinationConfigurations extends $dara.Model {
  /**
   * @remarks
   * The start port of the backend service port range for the endpoint group.
   * 
   * Valid values: **1** to **65499**. The value of **FromPort** must be less than or equal to the value of **ToPort**.
   * 
   * You can specify up to 20 start ports in a single request.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The protocol types of the backend services for the endpoint group. Valid values:
   * 
   * - **TCP**: TCP protocol.
   * 
   * - **UDP**: UDP protocol.
   * 
   * - **TCP,UDP**: TCP and UDP protocols.
   * 
   * The Terms of Service apply to the selected protocols.
   * 
   * This parameter is required.
   */
  protocols?: string[];
  /**
   * @remarks
   * The end port of the backend service port range for the endpoint group.
   * 
   * Valid values: **1** to **65499**. The value of **FromPort** must be less than or equal to the value of **ToPort**.
   * 
   * You can specify up to 20 end ports in a single request.
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
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The mapping configurations of the endpoint group.
   * 
   * Specify the service port ranges and protocol types of the backend services for the endpoint group. The specified information is mapped to the associated listener port ranges.
   * 
   * You can specify up to 20 port ranges and protocol types in a single invoke of this operation.
   * 
   * This parameter is required.
   */
  destinationConfigurations?: CreateCustomRoutingEndpointGroupDestinationsRequestDestinationConfigurations[];
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and business limitations without actually creating the mapping configurations create an endpoint group. If the request fails the dry run, the corresponding error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, an HTTP 2xx status code is returned and the mapping configurations create an endpoint group are created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The endpoint group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epg-bp14sz7ftcwwjgrdm****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The region ID of the Alibaba Cloud Global Accelerator (GA) instance. Set the value to **ap-southeast-1**.
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

