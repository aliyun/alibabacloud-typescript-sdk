// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetKeylessServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * Keyless server ID。
   * 
   * @example
   * babaabcd****
   */
  id?: string;
  /**
   * @example
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
   */
  requestId?: string;
  /**
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
      siteId: 'SiteId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
      siteId: 'number',
      siteName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

