// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to use to return the description of the system policy. Valid values:
   * 
   * *   en: English
   * *   zh-CN: Chinese
   * *   ja: Japanese
   * 
   * @example
   * zh
   */
  language?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

