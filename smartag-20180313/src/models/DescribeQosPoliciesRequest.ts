// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQosPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the quintuple rule instance in the QoS policy.
   * 
   * The description must be 1 to 512 characters in length, start with a letter or a Chinese character, and can contain digits, underscores (_), and hyphens (-).
   * 
   * @example
   * docdesc
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of quintuple rules to return on each page.
   * 
   * The default value is **10**. The maximum value is **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The priority of the throttling rule to which the quintuple rule in the QoS policy belongs.
   * 
   * The priority range is 1 to **3**. A smaller value indicates a higher priority.
   * 
   * > If you have submitted a ticket and created a priority-4 QoS policy by calling the [CreateQosPolicy](https://help.aliyun.com/document_detail/131575.html) operation, you can use this operation to query the configurations of quintuple rules for the priority-4 QoS policy.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the QoS policy instance.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-xitd8690ucu8ro****
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the quintuple rule instance in the QoS policy.
   * 
   * @example
   * qospy-427m9fo6wkh****
   */
  qosPolicyId?: string;
  /**
   * @remarks
   * The ID of the region where the QoS policy instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      priority: 'Priority',
      qosId: 'QosId',
      qosPolicyId: 'QosPolicyId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      priority: 'number',
      qosId: 'string',
      qosPolicyId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

