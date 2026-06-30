// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBasicAccelerateIpEndpointRelationsRequestAccelerateIpEndpointRelations extends $dara.Model {
  /**
   * @remarks
   * The ID of the accelerated IP address of the basic Global Accelerator instance.
   * 
   * You can call [ListBasicAccelerateIps](https://help.aliyun.com/document_detail/2253393.html) to query accelerated IP address IDs.
   * 
   * You can specify up to 20 accelerated IP address IDs.
   * 
   * @example
   * gaip-bp1****
   */
  accelerateIpId?: string;
  /**
   * @remarks
   * The endpoint ID of the basic Global Accelerator instance.
   * 
   * You can call [ListBasicEndpoints](https://help.aliyun.com/document_detail/2253406.html) to query endpoint IDs.
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
   * The list of attachments between accelerated IP addresses and endpoints for the basic Global Accelerator instance.
   * 
   * This parameter is required.
   */
  accelerateIpEndpointRelations?: CreateBasicAccelerateIpEndpointRelationsRequestAccelerateIpEndpointRelations[];
  /**
   * @remarks
   * The ID of the basic Global Accelerator instance.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** value as the **ClientToken** value. The **RequestId** value is different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the Global Accelerator instance. Set the value to **cn-hangzhou**.
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

