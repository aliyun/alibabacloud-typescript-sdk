// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIntranetAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The amount of bandwidth that you want to add. Unit: Mbit/s. The value must be an integer greater than or equal to 0. In most cases, the maximum bandwidth that can be added can be two times the default maximum bandwidth of the current instance type. For more information about the bandwidth specifications supported by different instance types, see [Overview](https://help.aliyun.com/document_detail/26350.html). The bandwidth is also subject to the following limits:
   * 
   * *   The bandwidth of an individual instance cannot exceed 75% of the bandwidth of the host. For more information about the host specifications and bandwidth, see [Instance types of hosts](https://help.aliyun.com/document_detail/206343.html).
   * *   The total bandwidth of all of the instances on the host cannot exceed 150% of the bandwidth of the host. You can configure resource overcommitment to handle traffic spikes. For more information, see [Configure resource overcommitment to reduce costs](https://help.aliyun.com/document_detail/183798.html).
   * 
   * > If you do not specify this parameter for a standard instance, the bandwidth of the instance is set to two times that of the current bandwidth.
   * 
   * @example
   * 10
   */
  bandWidth?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the data node. You can call the [DescribeClusterMemberInfo](https://help.aliyun.com/document_detail/473783.html) operation to query the node ID. Separate multiple IDs with commas (,).
   * 
   * >  This parameter is required if the instance is a [cluster](https://help.aliyun.com/document_detail/52228.html) instance.
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

