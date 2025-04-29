// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAppCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The AppCode of the app.
   * 
   * This parameter is required.
   * 
   * @example
   * 3aaf905a0a1f4f0eabc6d891dfa08afc
   */
  appCode?: string;
  /**
   * @remarks
   * The new AppCode of the app.
   * 
   * @example
   * 6f0e7ab2aa5f4b8fb18421e6edf4fb6c2
   */
  newAppCode?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      newAppCode: 'NewAppCode',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      newAppCode: 'string',
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

