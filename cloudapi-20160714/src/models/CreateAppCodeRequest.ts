// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The application AppCode.
   * 
   * @example
   * 3aaf905a0a1f4f0eabc6d891dfa08afc
   */
  appCode?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 111203109
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

