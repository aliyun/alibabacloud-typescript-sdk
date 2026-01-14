// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBasicAccelerateIpEndpointRelationsRequestAccelerateIpEndpointRelations extends $dara.Model {
  /**
   * @remarks
   * The IDs of the accelerated IP addresses.
   * 
   * You can call the [ListBasicAccelerateIps](https://help.aliyun.com/document_detail/2253393.html) operation to query the IDs of the accelerated IP addresses.
   * 
   * You can specify up to 20 IP address IDs.
   * 
   * @example
   * gaip-bp1****
   */
  accelerateIpId?: string;
  /**
   * @remarks
   * The IDs of the endpoints.
   * 
   * You can call the [ListBasicEndpoints](https://help.aliyun.com/document_detail/2253406.html) to query the IDs of the endpoints.
   * 
   * You can specify up to 20 endpoint IDs.
   * 
   * @example
   * ep-bp14sz7ftcwwjgrdm****
   */
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpId: 'AccelerateIpId',
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      endpointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicAccelerateIpEndpointRelationsRequest extends $dara.Model {
  /**
   * @remarks
   * A list of accelerated IP addresses and the endpoints with which the accelerated IP addresses are associated.
   * 
   * This parameter is required.
   */
  accelerateIpEndpointRelations?: CreateBasicAccelerateIpEndpointRelationsRequestAccelerateIpEndpointRelations[];
  /**
   * @remarks
   * The ID of the basic GA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp17frjjh0udz4qz****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
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
      accelerateIpEndpointRelations: 'AccelerateIpEndpointRelations',
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpEndpointRelations: { 'type': 'array', 'itemType': CreateBasicAccelerateIpEndpointRelationsRequestAccelerateIpEndpointRelations },
      acceleratorId: 'string',
      clientToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accelerateIpEndpointRelations)) {
      $dara.Model.validateArray(this.accelerateIpEndpointRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

