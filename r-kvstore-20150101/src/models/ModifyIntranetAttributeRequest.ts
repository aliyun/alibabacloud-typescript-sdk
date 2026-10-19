// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIntranetAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth to add, in MB/s. The value must be an integer greater than or equal to 0. Typically, the maximum value is twice the default maximum bandwidth of the current instance type. For bandwidth information about each instance type, see [Instance type navigation](https://help.aliyun.com/document_detail/26350.html). However, the following limits also apply:
   * * The bandwidth of a single instance cannot exceed 75% of the bandwidth of the host on which the instance resides. For information about host specifications and bandwidth, see [Host specification details](https://help.aliyun.com/document_detail/206343.html).
   * * The total bandwidth of all instances on a host cannot exceed 150% of the bandwidth of the host. You can configure overcommitment to meet bandwidth requirements for staggered-peak deployment. For more information, see [Configure cluster overcommitment to reduce costs](https://help.aliyun.com/document_detail/183798.html).
   * 
   * > For instances that use the standard architecture, if you do not specify this parameter, the bandwidth of the instance is doubled based on the current bandwidth.
   * 
   * @example
   * 10
   */
  bandWidth?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the data node. You can call [DescribeClusterMemberInfo](https://help.aliyun.com/document_detail/473783.html) to query the ID. Separate multiple IDs with commas (,).
   * > This parameter is available and required only when the instance uses the [Cluster Edition](https://help.aliyun.com/document_detail/52228.html).
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidth: 'BandWidth',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidth: 'number',
      instanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

