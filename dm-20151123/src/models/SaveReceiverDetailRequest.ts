// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveReceiverDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The recipient\\"s email address and template parameters, in an array format.
   * 
   * @example
   * [{ "Email": "example@alimail.com","CustomData": {"name":"Tom","age":"30"}}]
   */
  customDetail?: string;
  /**
   * @remarks
   * The recipient details. You can upload up to 500 recipients in a single request. The value is a string in a JSON array format. Each object in the array represents a recipient. For example: \\`[{ },{ },{ }...]\\`. The format for each recipient object is \\`[{"b":"birthday","e":"xxx\\@example.net","g":"gender","m":"mobile","n":"nickname","u":"name"}]\\`. If you add a duplicate recipient address, the system returns \\`"ErrorCount": 1\\`.
   * 
   * The format is \\`[{ },{ },{ }...]\\`. The format of the content within each \\`{}\\` is as follows:
   * 
   * [{"b":"birthday","e":"xxx\\@example.net","g":"gender","m":"mobile","n":"nickname","u":"name"}]. Pass the value as a string, not a list.
   * 
   * Inserting a duplicate recipient address returns "ErrorCount": 1.
   * 
   * @example
   * [{"b":"birthday","e":"xxx@alibaba-inc.com","g":"gender","m":"mobile","n":"nickname","u":"name"}]
   */
  detail?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the recipient list.
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

