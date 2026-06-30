// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBasicIpSetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region to be accelerated.
   * 
   * You can invoke the [ListAvailableBusiRegions](https://help.aliyun.com/document_detail/261190.html) operation to query the active acceleration regions for the specified Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  accelerateRegionId?: string;
  /**
   * @remarks
   * The instance ID of the basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp17frjjh0udz4qz****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The bandwidth of the acceleration area. Unit: **Mbps**.
   * 
   * The minimum bandwidth that can be allocated to an acceleration area is 2 Mbps.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of a request.
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
   * The ISP type of the public network in the acceleration region. Valid values:
   * - **BGP** (default): BGP (Multi-ISP)
   * - **BGP_PRO**: BGP (Multi-ISP) Pro
   * 
   * If you are a whitelist user of single-ISP bandwidth, you can also select the following types:
   * - **ChinaTelecom**: China Telecom (single ISP)
   * - **ChinaUnicom**: China Unicom (single ISP)
   * - **ChinaMobile**: China Shift (single ISP)
   * - **ChinaTelecom_L2**: China Telecom (single ISP)_L2
   * - **ChinaUnicom_L2**: China Unicom (single ISP)_L2
   * - **ChinaMobile_L2**: China Shift (single ISP)_L2
   * > - This parameter is required for basic Alibaba Cloud Global Accelerator (GA) instances that use the **pay-by-traffic** billing method.
   * > - If the acceleration region of the basic Alibaba Cloud Global Accelerator (GA) instance is Hong Kong (China) and the instance is attached with a basic bandwidth plan of the BGP (Multi-ISP) Pro type, the default value is BGP (Multi-ISP) Pro.
   * > - The supported single-ISP line types vary by acceleration region.
   * 
   * @example
   * BGP
   */
  ispType?: string;
  /**
   * @remarks
   * The region ID of the basic Alibaba Cloud Global Accelerator (GA) instance. Set the value to **ap-southeast-1**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      acceleratorId: 'AcceleratorId',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      ispType: 'IspType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      acceleratorId: 'string',
      bandwidth: 'number',
      clientToken: 'string',
      ispType: 'string',
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

