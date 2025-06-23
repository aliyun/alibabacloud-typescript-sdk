// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHeadersResponseBodyCustomHeader extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The header of the response.
   * 
   * @example
   * {"X-Forwarded-ClientSrcPort":"","header1":"hLeLele"}
   */
  headers?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      headers: 'Headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      headers: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

