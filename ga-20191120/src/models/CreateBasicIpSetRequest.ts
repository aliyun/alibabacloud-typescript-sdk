// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBasicIpSetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the acceleration region.
   * 
   * You can call the [ListAvailableBusiRegions](https://help.aliyun.com/document_detail/261190.html) operation to query the most recent acceleration region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  accelerateRegionId?: string;
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
   * The bandwidth that you want to allocate to the acceleration region. Unit: **Mbit/s**.
   * 
   * You must allocate at least 2 Mbit/s of bandwidth to the acceleration region.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
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
   * The line type of the elastic IP address (EIP) in the acceleration region. Valid values:
   * 
   * *   **BGP** (default): BGP (Multi-ISP) lines.
   * *   **BGP_PRO**: BGP (Multi-ISP) Pro lines.
   * 
   * Valid values if you are allowed to use single-ISP bandwidth:
   * 
   * *   **ChinaTelecom**
   * *   **ChinaUnicom**
   * *   **ChinaMobile**
   * *   **ChinaTelecom_L2**
   * *   **ChinaUnicom_L2**
   * *   **ChinaMobile_L2**
   * 
   * > 
   * 
   * *   If the bandwidth metering method of the GA instance is **pay-by-data-transfer**, this parameter is required.
   * 
   * *   If the acceleration region is China (Hong Kong) and a basic bandwidth plan whose bandwidth type is Premium is associated with the GA instance, the default value of IspType is BGP_PRO.
   * 
   * *   The supported single-ISP type varies based on the acceleration region.
   * 
   * @example
   * BGP
   */
  ispType?: string;
  /**
   * @remarks
   * The region ID of the basic GA instance. Set the value to **cn-hangzhou**.
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

