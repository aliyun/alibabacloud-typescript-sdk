// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSiteNameRequest extends $dara.Model {
  /**
   * @remarks
   * The website name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

