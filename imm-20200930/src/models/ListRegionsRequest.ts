// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values:
   * 
   * *   zh-CN: Chinese.
   * *   en-US: English.
   * *   ja: Japanese.
   * 
   * This parameter is required.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

