// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableCenVbrHealthCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-hahhfskfkseig****
   */
  cenId?: string;
  /**
   * @remarks
   * The description.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http:// `or `https://`.
   * 
   * @example
   * testdesc
   */
  description?: string;
  /**
   * @remarks
   * The time interval at which probe packets are sent during a health check. Unit: seconds. Default value: 2. Valid values: **2** to **3**.
   * 
   * @example
   * 2
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * Specifies whether to enable only the detection feature. Valid values:
   * 
   * - **true**: Yes.
   * 
   *   ```
   *     If you enable only the detection feature, the system performs a health check but does not switch routes when the Express Connect circuit is down.
   * 
   *     > Make sure that you have another way to ensure link redundancy. Otherwise, network interruptions may occur.
   *   ```
   * 
   * - **false** (default): No.
   * 
   *   ```
   *     This feature is disabled by default. If the health check detects a link failure and a redundant route is available in the CEN instance, the system immediately switches to the available route.
   *   ```
   * 
   * @example
   * false
   */
  healthCheckOnly?: boolean;
  /**
   * @remarks
   * The source IP address for the health check. You can configure the source IP address in one of the following ways:
   * 
   * - **Automatic IP address** (recommended): The system automatically assigns an IP address from the 100.96.0.0/16 CIDR block.
   * 
   * - **Custom IP address**: You can specify an unused IP address from the 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12 CIDR block. The specified IP address cannot conflict with an IP address that is used for communication in the CEN instance. The specified IP address also cannot conflict with the Alibaba Cloud-side or client-side IP address of the VBR instance.
   * 
   * @example
   * 192.XX.XX.1
   */
  healthCheckSourceIp?: string;
  /**
   * @remarks
   * The destination IP address for the health check.
   * 
   * The destination IP address is the client-side IP address of the VBR instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.XX.XX.1
   */
  healthCheckTargetIp?: string;
  /**
   * @remarks
   * The number of probe packets that are sent during a health check. Unit: packets. Valid values: 3 to **8**. Default value: **8**.
   * 
   * @example
   * 8
   */
  healthyThreshold?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VBR instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-wz95o9aylj181n5mzk****
   */
  vbrInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VBR instance belongs.
   * 
   * > This parameter is required if the VBR instance and the CEN instance belong to different Alibaba Cloud accounts.
   * 
   * @example
   * 1250123456123456
   */
  vbrInstanceOwnerId?: number;
  /**
   * @remarks
   * The ID of the region where the VBR instance is deployed.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  vbrInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      description: 'Description',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckOnly: 'HealthCheckOnly',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      healthyThreshold: 'HealthyThreshold',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vbrInstanceId: 'VbrInstanceId',
      vbrInstanceOwnerId: 'VbrInstanceOwnerId',
      vbrInstanceRegionId: 'VbrInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      description: 'string',
      healthCheckInterval: 'number',
      healthCheckOnly: 'boolean',
      healthCheckSourceIp: 'string',
      healthCheckTargetIp: 'string',
      healthyThreshold: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vbrInstanceId: 'string',
      vbrInstanceOwnerId: 'number',
      vbrInstanceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

