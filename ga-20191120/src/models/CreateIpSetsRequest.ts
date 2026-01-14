// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpSetsRequestAccelerateRegion extends $dara.Model {
  /**
   * @remarks
   * The ID of the acceleration region.
   * 
   * The number of regions that you can add varies based on the specification of the GA instance. For more information, see [Overview](https://help.aliyun.com/document_detail/153127.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  accelerateRegionId?: string;
  /**
   * @remarks
   * The bandwidth that you want to allocate to the acceleration region. Unit: **Mbit/s**.
   * 
   * >*  This parameter is required.
   * >*   You must allocate at least 2 Mbit/s of bandwidth to each acceleration region.
   * >*   The total bandwidth of all acceleration regions cannot exceed the bandwidth limit of your basic bandwidth plan.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The IP version used to connect to the GA instance. Valid values:
   * 
   * *   **IPv4** (default)
   * *   **IPv6**
   * *   **DUAL_STACK**: IPv4 and IPv6
   * 
   * > Only pay-as-you-go standard GA instances support DUAL_STACK.
   * 
   * @example
   * IPv6
   */
  ipVersion?: string;
  /**
   * @remarks
   * The line type of the elastic IP address (EIP) in the acceleration region. Valid values:
   * 
   * *   **BGP**: BGP (Multi-ISP) lines.
   * *   **BGP_PRO**: BGP (Multi-ISP) Pro lines
   * 
   * > *   This parameter is required only if the bandwidth metering method of the GA instance is **pay-by-data transfer**.
   * >*   Different acceleration regions support different line types of EIPs.
   * 
   * @example
   * BGP
   */
  ispType?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      bandwidth: 'Bandwidth',
      ipVersion: 'IpVersion',
      ispType: 'IspType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      bandwidth: 'number',
      ipVersion: 'string',
      ispType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the acceleration regions.
   * 
   * This parameter is required.
   */
  accelerateRegion?: CreateIpSetsRequestAccelerateRegion[];
  /**
   * @remarks
   * The GA instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1yeeq8yfoyszmqy****
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
   * 1F4B6A4A-C89E-489E-BAF1-52777EE148EF
   */
  clientToken?: string;
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
      accelerateRegion: 'AccelerateRegion',
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegion: { 'type': 'array', 'itemType': CreateIpSetsRequestAccelerateRegion },
      acceleratorId: 'string',
      clientToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accelerateRegion)) {
      $dara.Model.validateArray(this.accelerateRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

