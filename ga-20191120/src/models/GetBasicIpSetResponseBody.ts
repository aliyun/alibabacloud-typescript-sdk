// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBasicIpSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the basic GA instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  accelerateRegionId?: string;
  /**
   * @remarks
   * The ID of the basic GA instance.
   * 
   * @example
   * ga-bp17frjjh0udz4qz****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The bandwidth of the acceleration region of the basic GA instance. Unit: Mbit/s.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The accelerated IP address.
   * 
   * @example
   * 118.31.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The ID of the acceleration region of the basic GA instance.
   * 
   * @example
   * ips-bp11ilwqjdkjeg9r7****
   */
  ipSetId?: string;
  /**
   * @remarks
   * The Internet protocol version. Only **IPv4** may be returned.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
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
   * @example
   * BGP
   */
  ispType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6D2BFF54-6AF2-4679-88C4-2F2E187F16CB
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the acceleration region of the basic GA instance. Valid values:
   * 
   * *   **init**: The acceleration region is being initialized.
   * *   **active**: The acceleration region is in the running state.
   * *   **updating**: The acceleration region is being configured.
   * *   **Deleting**: The acceleration region is being deleted.
   * 
   * @example
   * active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      acceleratorId: 'AcceleratorId',
      bandwidth: 'Bandwidth',
      ipAddress: 'IpAddress',
      ipSetId: 'IpSetId',
      ipVersion: 'IpVersion',
      ispType: 'IspType',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      acceleratorId: 'string',
      bandwidth: 'number',
      ipAddress: 'string',
      ipSetId: 'string',
      ipVersion: 'string',
      ispType: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

