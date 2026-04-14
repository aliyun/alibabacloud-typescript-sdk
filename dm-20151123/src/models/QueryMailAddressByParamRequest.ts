// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMailAddressByParamRequest extends $dara.Model {
  /**
   * @remarks
   * Email address, length 1-60, supports numbers, letters, ., -, @.
   * 
   * @example
   * sender@example.com
   */
  keyWord?: string;
  ownerId?: number;
  /**
   * @remarks
   * Current page number, default: 1
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Page size, default: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Sending address type. Values:
   * 
   * - batch: bulk email
   * - trigger: triggered email
   * 
   * @example
   * batch
   */
  sendtype?: string;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendtype: 'Sendtype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendtype: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

