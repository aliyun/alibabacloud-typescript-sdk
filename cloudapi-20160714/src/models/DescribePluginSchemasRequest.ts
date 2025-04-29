// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginSchemasRequest extends $dara.Model {
  /**
   * @example
   * en
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

