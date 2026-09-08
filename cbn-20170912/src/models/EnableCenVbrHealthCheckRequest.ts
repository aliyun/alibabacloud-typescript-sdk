// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableCenVbrHealthCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance ID.
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
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * testdesc
   */
  description?: string;
  /**
   * @remarks
   * The interval at which health check probe packets are sent. Unit: seconds. Default value: **2**. Valid values: **2** to **3**.
   * 
   * @example
   * 2
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * Specifies whether to enable only the health check detection feature. Valid values:
   * 
   * - **true**: Only the detection feature is enabled.
   * 
   *         If only the health check detection feature is enabled, route switchover is not triggered when the health check detects that the link is down.
   * 
   *         > Make sure that you have other methods to ensure link redundancy. Otherwise, enabling this feature may cause link interruptions.
   * 
   * - **false** (default): The detection-only feature is not enabled.
   *         
   *         This feature is disabled by default. When the health check detects that the link is down, if redundant routes exist in the CEN instance, the health check immediately triggers a route switchover to use an available link.
   * 
   * @example
   * false
   */
  healthCheckOnly?: boolean;
  /**
   * @remarks
   * The source IP address for health checks. The following configuration methods are supported:
   * 
   * - **Automatically generated source IP** (recommended): The system automatically allocates an IP address from the 100.96.0.0/16 CIDR block.
   * 
   * - **Custom source IP**: The source IP address can be any unused IP address within the 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12 CIDR block. The IP address cannot cause an IP address conflict with addresses that need to communicate with each other in the CEN instance, or with the Alibaba Cloud-side or customer-side IP address of the VBR instance.
   * 
   * @example
   * 192.XX.XX.1
   */
  healthCheckSourceIp?: string;
  /**
   * @remarks
   * The destination IP address for health checks.
   * 
   * The destination IP address is the customer-side IP address of the VBR instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.XX.XX.1
   */
  healthCheckTargetIp?: string;
  /**
   * @remarks
   * The number of probe packets sent during a health check. Unit: packets. Valid values: **3** to **8**. Default value: **8**.
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
   * The VBR instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-wz95o9aylj181n5mzk****
   */
  vbrInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the VBR instance.
   * 
   * > This parameter is required if the VBR instance and the CEN instance belong to different accounts.
   * 
   * @example
   * 1250123456123456
   */
  vbrInstanceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the VBR instance.
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

