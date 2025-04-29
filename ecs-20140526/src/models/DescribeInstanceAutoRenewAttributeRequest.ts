// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances. You can specify up to 100 subscription instance IDs in a single request. Separate multiple instance IDs with commas (,).
   * 
   * > `InstanceId` and `RenewalStatus` cannot be empty at the same time.
   * 
   * @example
   * i-bp18x3z4hc7bixhx****,i-bp1g6zv0ce8oghu7****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The auto-renewal state of the instance. Valid values:
   * 
   * *   AutoRenewal: Auto-renewal is enabled for the instance.
   * *   Normal: Auto-renewal is disabled for the instance.
   * *   NotRenewal: The instance is not to be renewed. The system sends no more expiration reminders, but sends only a non-renewal reminder three days before the expiration date. For an instance that is not to be renewed, you can call the [ModifyInstanceAutoRenewAttribute](https://help.aliyun.com/document_detail/52843.html) operation to change its auto-renewal status to `Normal`. Then, you can manually renew the instance or enable auto-renewal for the instance.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      renewalStatus: 'string',
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

