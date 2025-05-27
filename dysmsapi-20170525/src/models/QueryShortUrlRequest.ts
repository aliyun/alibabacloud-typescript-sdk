// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryShortUrlRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The short URL. You can query the short URL by calling the [AddShortUrl](https://help.aliyun.com/document_detail/186774.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * http://****.cn/6y8uy7
   */
  shortUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      shortUrl: 'ShortUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
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

