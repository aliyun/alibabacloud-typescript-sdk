// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReceiverDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Recipient address, length 0-50
   * 
   * @example
   * b***@example.net
   */
  keyWord?: string;
  /**
   * @remarks
   * Starting position for the next item, default: 0
   * 
   * @example
   * 0
   */
  nextStart?: string;
  ownerId?: number;
  /**
   * @remarks
   * Number of items per page, default: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Recipient list ID (returned when creating a recipient list using the CreateReceiver API).
   * 
   * This parameter is required.
   * 
   * @example
   * 1235
   */
  receiverId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      nextStart: 'NextStart',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      receiverId: 'ReceiverId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      nextStart: 'string',
      ownerId: 'number',
      pageSize: 'number',
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

