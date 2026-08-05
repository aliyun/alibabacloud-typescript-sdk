// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TraceSiteShrinkRequest extends $dara.Model {
  /**
   * @example
   * {"PlainText":"bc58c54211db"}
   */
  bodyShrink?: string;
  contextShrink?: string;
  /**
   * @example
   * []
   */
  cookiesShrink?: string;
  /**
   * @example
   * []
   */
  headersShrink?: string;
  /**
   * @example
   * GET
   */
  method?: string;
  /**
   * @example
   * HTTP/1.1
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://example.com/test
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'Body',
      contextShrink: 'Context',
      cookiesShrink: 'Cookies',
      headersShrink: 'Headers',
      method: 'Method',
      protocol: 'Protocol',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      contextShrink: 'string',
      cookiesShrink: 'string',
      headersShrink: 'string',
      method: 'string',
      protocol: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

