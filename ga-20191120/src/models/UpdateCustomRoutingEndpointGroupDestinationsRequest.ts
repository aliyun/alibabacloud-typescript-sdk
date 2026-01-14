// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomRoutingEndpointGroupDestinationsRequestDestinationConfigurations extends $dara.Model {
  /**
   * @remarks
   * The ID of the mapping configuration of the endpoint group.
   * 
   * This parameter is required.
   * 
   * @example
   * dst-abc123****
   */
  destinationId?: string;
  /**
   * @remarks
   * The start port of the backend service port range of the endpoint group.
   * 
   * Valid values: **1** to **65499**. The **FromPort** value must be smaller than or equal to the **ToPort** value.
   * 
   * You can specify up to 20 start ports in each request.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The backend service protocol of the endpoint group. Valid values:
   * 
   * *   **tcp**: TCP
   * *   **udp**: UDP
   * *   **tcp,udp**: TCP and UDP
   * 
   * You can specify up to four backend service protocols in each configuration.
   */
  protocols?: string[];
  /**
   * @remarks
   * The end port of the backend service port range of the endpoint group.
   * 
   * Valid values: **1** to **65499**. The **FromPort** value must be smaller than or equal to the **ToPort** value.
   * 
   * You can specify up to 20 end ports in each request.
   * 
   * @example
   * 80
   */
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      destinationId: 'DestinationId',
      fromPort: 'FromPort',
      protocols: 'Protocols',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationId: 'string',
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

export class UpdateCustomRoutingEndpointGroupDestinationsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among all requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the value of **RequestId** as the value of **ClientToken**. The value of **RequestId** for each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The mapping configurations of endpoint group.
   * 
   * You must specify the backend service port range and protocol of the endpoint group. The specified information is used to map the port range of the associated listener.
   * 
   * You can specify at most 20 mapping configurations, which include port ranges and protocol types.
   * 
   * This parameter is required.
   */
  destinationConfigurations?: UpdateCustomRoutingEndpointGroupDestinationsRequestDestinationConfigurations[];
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**: performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the endpoint group.
   * 
   * This parameter is required.
   * 
   * @example
   * epg-bp1dmlohjjz4kqaun****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The ID of the region where the GA instance is deployed. Set the value to **cn-hangzhou**.
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
      destinationConfigurations: { 'type': 'array', 'itemType': UpdateCustomRoutingEndpointGroupDestinationsRequestDestinationConfigurations },
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

