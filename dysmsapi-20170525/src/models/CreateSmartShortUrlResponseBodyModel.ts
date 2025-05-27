// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmartShortUrlResponseBodyModel extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  domain?: string;
  /**
   * @example
   * 11
   */
  expiration?: number;
  /**
   * @example
   * 示例值
   */
  phoneNumber?: string;
  /**
   * @example
   * 示例值
   */
  shortName?: string;
  /**
   * @example
   * 示例值示例值
   */
  shortUrl?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      expiration: 'Expiration',
      phoneNumber: 'PhoneNumber',
      shortName: 'ShortName',
      shortUrl: 'ShortUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      expiration: 'number',
      phoneNumber: 'string',
      shortName: 'string',
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

