// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSafConsoleRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Query content.
   * 
   * @example
   * ei_riskLpInfo
   */
  content?: string;
  /**
   * @remarks
   * Service to be called.
   * 
   * This parameter is required.
   * 
   * @example
   * ei_riskLpInfo
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      content: 'content',
      service: 'service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      content: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

