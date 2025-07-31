// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAutoRenewalAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  If this parameter is set to **true**, you must set the **Duration** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp15da1923e3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The auto-renewal period. Valid values: **1** to **12**. Unit: month.
   * 
   * >  This parameter is valid only when **AutoRenew** is set to **true**.
   * 
   * @example
   * 1
   */
  duration?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the region ID of the instance.
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
      autoRenew: 'AutoRenew',
      DBInstanceId: 'DBInstanceId',
      duration: 'Duration',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      DBInstanceId: 'string',
      duration: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

