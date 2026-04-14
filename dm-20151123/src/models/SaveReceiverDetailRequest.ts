// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveReceiverDetailRequest extends $dara.Model {
  /**
   * @example
   * [     {         "Email": "example@alimail.com",         "CustomData": {"name":"Tom","age":"30"}"     } ]
   */
  customDetail?: string;
  /**
   * @remarks
   * Content, supports uploading multiple recipients at once, with a limit of 500 records per upload. Each record is separated by {} and commas, example:
   * 
   * [{ },{ },{ }...], the format within {} is as follows:
   * 
   * [{"b":"birthday","e":"xxx@example.net","g":"gender","m":"mobile","n":"nickname","u":"name"}], when passing values, pass it as a string, not a list.
   * 
   * If a duplicate recipient address is inserted, it will return "ErrorCount": 1
   * 
   * @example
   * [{"b":"birthday","e":"xxx@alibaba-inc.com","g":"gender","m":"mobile","n":"nickname","u":"name"}]
   */
  detail?: string;
  ownerId?: number;
  /**
   * @remarks
   * Recipient list ID
   * 
   * This parameter is required.
   * 
   * @example
   * 34642
   */
  receiverId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      customDetail: 'CustomDetail',
      detail: 'Detail',
      ownerId: 'OwnerId',
      receiverId: 'ReceiverId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDetail: 'string',
      detail: 'string',
      ownerId: 'number',
      receiverId: 'string',
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

