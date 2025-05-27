// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddShortUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the short URL. Unit: days. The maximum validity period is 90 days.
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
   * The service name of the short URL. The name cannot exceed 13 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * The Alibaba Cloud Short Link service.
   */
  shortUrlName?: string;
  /**
   * @remarks
   * The source URL. The URL cannot exceed 1,000 characters in length.
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

