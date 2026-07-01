// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddShortUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the short URL, in days. The maximum value is 90.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  effectiveDays?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the short URL. Maximum length: 13 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里短链测试
   */
  shortUrlName?: string;
  /**
   * @remarks
   * The URL that you want to shorten. Maximum length: 1,000 characters.
   * 
   * >Notice: 
   * 
   * Short Message Service does not currently support this API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.****.com/product/sms
   */
  sourceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveDays: 'EffectiveDays',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      shortUrlName: 'ShortUrlName',
      sourceUrl: 'SourceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveDays: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      shortUrlName: 'string',
      sourceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

