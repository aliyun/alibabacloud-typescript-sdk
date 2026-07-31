// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can specify up to 100 subscription instance IDs at a time. Separate multiple instance IDs with commas (,).
   * 
   * > You must specify at least one of the InstanceId and RenewalStatus parameters.
   * 
   * @example
   * i-bp18x3z4hc7bixhx****,i-bp1g6zv0ce8oghu7****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Unit: entries.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The auto-renewal status of ECS instance. Valid values:
   * 
   * - AutoRenewal: Auto-renewal is enabled.
   * 
   * - Normal: Auto-renewal is disabled.
   * 
   * - NotRenewal: ECS instance will not be renewed. The system no longer sends expiration reminders but sends only a non-renewal reminder three days before ECS instance expires. You can call [ModifyInstanceAutoRenewAttribute](https://help.aliyun.com/document_detail/52843.html) to change the renewal status of an instance from NotRenewal to `Normal`, and then manually renew ECS instance or enable auto-renewal for ECS instance.
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

