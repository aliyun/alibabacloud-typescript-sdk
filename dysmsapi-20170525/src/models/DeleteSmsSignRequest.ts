// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSmsSignRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The SMS signature. You can delete signatures that are in the Withdrawn, Failed, or Approved state. You cannot delete signatures that are in the Pending Approval state.
   * 
   * You can call the [QuerySmsSignList](https://help.aliyun.com/document_detail/419282.html) operation to query the signatures that have been applied for under the current account, or view the signature list on the [Signature Management](https://dysms.console.aliyun.com/domestic/text/sign) page in the SMS console.
   * >Notice: Deleted SMS signatures cannot be recovered, and the signature can no longer be used to send SMS messages. Proceed with caution.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

