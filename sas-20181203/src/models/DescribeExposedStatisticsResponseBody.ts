// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExposedStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of high-risk vulnerabilities that are exposed on the Internet and can be exploited by attackers.
   * 
   * @example
   * 1
   */
  exposedAsapVulCount?: number;
  /**
   * @remarks
   * The total number of system components that are exposed on the Internet. The components include OpenSSL and OpenSSH.
   * 
   * @example
   * 7
   */
  exposedComponentCount?: number;
  /**
   * @remarks
   * The number of ApsaraDB for MongoDB instances that are exposed on the Internet.
   * 
   * @example
   * 1
   */
  exposedDdsCount?: number;
  /**
   * @remarks
   * The number of Elastic Compute Service (ECS) instances that are exposed on the Internet.
   * 
   * @example
   * 5
   */
  exposedEcsCount?: number;
  /**
   * @remarks
   * The total number of assets that are exposed on the Internet.
   * 
   * @example
   * 100
   */
  exposedInstanceCount?: number;
  /**
   * @remarks
   * The total number of IP addresses that are exposed on the Internet.
   * 
   * @example
   * 100
   */
  exposedIpCount?: number;
  /**
   * @remarks
   * The number of ApsaraDB for Redis instances that are exposed on the Internet.
   * 
   * @example
   * 3
   */
  exposedKvstoreCount?: number;
  /**
   * @remarks
   * The total number of medium-risk vulnerabilities that are exposed on the Internet and can be exploited by attackers.
   * 
   * @example
   * 5
   */
  exposedLaterVulCount?: number;
  /**
   * @remarks
   * The total number of low-risk vulnerabilities that are exposed on the Internet and can be exploited by attackers.
   * 
   * @example
   * 0
   */
  exposedNntfVulCount?: number;
  /**
   * @remarks
   * The total number of ports that are exposed on the Internet.
   * 
   * @example
   * 6
   */
  exposedPortCount?: number;
  /**
   * @remarks
   * The number of ApsaraDB RDS instances that are exposed on the Internet.
   * 
   * @example
   * 1
   */
  exposedRdsCount?: number;
  /**
   * @remarks
   * The total number of system keys that are detected on your servers and are exposed on the Internet.
   * 
   * @example
   * 20
   */
  exposedWeekPasswordMachineCount?: number;
  /**
   * @remarks
   * The total number of gateway assets that are exposed on the Internet. The gateway assets include NAT gateways and Server Load Balancer (SLB) instances.
   * 
   * @example
   * 3
   */
  gatewayAssetCount?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4B897D10-B3CD-4A93-A5FA-591F3ED12A86
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exposedAsapVulCount: 'ExposedAsapVulCount',
      exposedComponentCount: 'ExposedComponentCount',
      exposedDdsCount: 'ExposedDdsCount',
      exposedEcsCount: 'ExposedEcsCount',
      exposedInstanceCount: 'ExposedInstanceCount',
      exposedIpCount: 'ExposedIpCount',
      exposedKvstoreCount: 'ExposedKvstoreCount',
      exposedLaterVulCount: 'ExposedLaterVulCount',
      exposedNntfVulCount: 'ExposedNntfVulCount',
      exposedPortCount: 'ExposedPortCount',
      exposedRdsCount: 'ExposedRdsCount',
      exposedWeekPasswordMachineCount: 'ExposedWeekPasswordMachineCount',
      gatewayAssetCount: 'GatewayAssetCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedAsapVulCount: 'number',
      exposedComponentCount: 'number',
      exposedDdsCount: 'number',
      exposedEcsCount: 'number',
      exposedInstanceCount: 'number',
      exposedIpCount: 'number',
      exposedKvstoreCount: 'number',
      exposedLaterVulCount: 'number',
      exposedNntfVulCount: 'number',
      exposedPortCount: 'number',
      exposedRdsCount: 'number',
      exposedWeekPasswordMachineCount: 'number',
      gatewayAssetCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

