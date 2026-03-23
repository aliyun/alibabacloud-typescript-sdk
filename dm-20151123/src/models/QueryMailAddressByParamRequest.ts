// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMailAddressByParamRequest extends $dara.Model {
  /**
   * @remarks
   * The email address. The length is 1 to 60 characters. It supports digits, letters, periods (.), hyphens (-), and at signs (@).
   * 
   * @example
   * 账号+@+域名
   */
  keyWord?: string;
  ownerId?: number;
  /**
   * @remarks
   * The current page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. The default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the sender address. Valid values:
   * 
   * - batch: batch emails
   * 
   * - trigger: triggered emails
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

