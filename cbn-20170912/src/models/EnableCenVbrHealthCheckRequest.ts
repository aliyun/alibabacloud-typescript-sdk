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
   * The description of the health check.
   * 
   * The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * testdesc
   */
  description?: string;
  /**
   * @remarks
   * The time interval at which probe packets are sent during a health check. Unit: seconds. Default value: **2**. Valid values: **2 to 3**.
   * 
   * @example
   * 2
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * Specifies whether to enable probing during the health check. Valid values:
   * 
   * *   **true**: yes
   * 
   *         If you enable probing, the system does not switch to another route if the detected route is not reachable. 
   * 
   *           Make sure that a redundant route is available. Otherwise, network disconnections may occur. 
   * 
   * *   **false** (default): no
   * 
   *         Probing is disabled by default. If a redundant route is specified, the system switches to the redundant route if the detected route is not reachable.
   * 
   * @example
   * false
   */
  healthCheckOnly?: boolean;
  /**
   * @remarks
   * The source IP address for the health check. You can set the source IP address in the following ways:
   * 
   * *   **Automatic IP Address** (recommended): The system automatically assigns an IP address from the 100.96.0.0/16 CIDR block.
   * *   **Custom IP Address**: You must specify an idle IP address from the 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12 CIDR block. The specified IP address cannot be the IP address of the VBR on the Alibaba Cloud side, the IP address of the VBR on the customer side, or other IP addresses with which the VBR communicates through the CEN instance.
   * 
   * @example
   * 192.XX.XX.1
   */
  healthCheckSourceIp?: string;
  /**
   * @remarks
   * The destination IP address for the health check.
   * 
   * Set the destination IP address to the IP address of the VBR on the customer side.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.XX.XX.1
   */
  healthCheckTargetIp?: string;
  /**
   * @remarks
   * The number of probe packets that are sent during a health check. Unit: packets. Valid values: **3 to 8**. Default value: **8**.
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
   * The ID of the VBR.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-wz95o9aylj181n5mzk****
   */
  vbrInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VBR belongs.
   * 
   * > This parameter is required if the VBR and the CEN instance belong to different Alibaba Cloud accounts.
   * 
   * @example
   * 1250123456123456
   */
  vbrInstanceOwnerId?: number;
  /**
   * @remarks
   * The ID of the region where the VBR is deployed.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the most recent region list.
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

