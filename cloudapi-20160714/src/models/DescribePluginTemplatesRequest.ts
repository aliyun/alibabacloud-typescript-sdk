// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The language that is used to return the description of the system policy. Valid values:
   * 
   * *   en: English
   * *   zh-CN: Chinese.
   * *   ja: Japanese
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * jwtAuth
   */
  pluginName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      pluginName: 'PluginName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      pluginName: 'string',
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

