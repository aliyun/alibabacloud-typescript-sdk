// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SdkGenerateByAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 110797019
   */
  appId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * java
   */
  language?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      language: 'Language',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
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

