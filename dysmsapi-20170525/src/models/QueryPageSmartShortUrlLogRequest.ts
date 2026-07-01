// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPageSmartShortUrlLogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 14
   */
  createDateEnd?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 31
   */
  createDateStart?: number;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 99
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 84
   */
  pageSize?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  shortUrl?: string;
  static names(): { [key: string]: string } {
    return {
      createDateEnd: 'CreateDateEnd',
      createDateStart: 'CreateDateStart',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      shortUrl: 'ShortUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDateEnd: 'number',
      createDateStart: 'number',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      shortUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

