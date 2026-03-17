// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQosPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the 5-tuple.
   * 
   * The description must be 1 to 512 characters in length, and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * docdesc
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: **10**. A maximum of **50** entries can be returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The priority of the traffic throttling rule that is applied to the 5-tuple.
   * 
   * Valid values: **1 to 3**. A smaller value indicates a higher priority.
   * 
   * >  If you have submitted a ticket and created a QoS policy with the priority value 4 by calling the [CreateQosPolicy](https://help.aliyun.com/document_detail/131575.html) operation, you can set the value to 4.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-xitd8690ucu8ro****
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the 5-tuple.
   * 
   * @example
   * qospy-427m9fo6wkh****
   */
  qosPolicyId?: string;
  /**
   * @remarks
   * The ID of the region to which the QoS policy belongs.
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

