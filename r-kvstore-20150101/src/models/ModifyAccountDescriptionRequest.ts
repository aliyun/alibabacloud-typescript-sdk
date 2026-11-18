// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * * It must start with a Chinese character or a letter, and cannot start with `http://` or `https://`.
   * * It can contain Chinese characters, letters, digits, underscores (_), and hyphens (-).
   * * It must be 2 to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testescription
   */
  accountDescription?: string;
  /**
   * @remarks
   * The account name. You can call the [DescribeAccounts](https://help.aliyun.com/document_detail/473816.html) operation to query the account name.
   * 
   * This parameter is required.
   * 
   * @example
   * demoaccount
   */
  accountName?: string;
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
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is used only for internal maintenance and does not need to be specified.
   * 
   * @example
   * SDK
   */
  sourceBiz?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      sourceBiz: 'SourceBiz',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      sourceBiz: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

