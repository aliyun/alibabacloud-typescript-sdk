// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBasicAccelerateIpEndpointRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated IP address instance ID of the basic Global Accelerator (GA) instance.
   * > **EndpointId** and **AccelerateIpId** cannot both be empty.
   * 
   * @example
   * gaip-bp1****
   */
  accelerateIpId?: string;
  /**
   * @remarks
   * The instance ID of the basic Global Accelerator (GA) instance.
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
   * > If you do not specify this parameter, the system automatically uses the **RequestId** value as the **ClientToken** value. The **RequestId** value of each API request is different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The endpoint ID of the basic Global Accelerator (GA) instance.
   * 
   * > **EndpointId** and **AccelerateIpId** cannot both be empty.
   * 
   * @example
   * ep-bp14sz7ftcwwjgrdm****
   */
  endpointId?: string;
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
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      acceleratorId: 'string',
      clientToken: 'string',
      endpointId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

