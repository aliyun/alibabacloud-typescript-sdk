// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The application AppCode.
   * 
   * This parameter is required.
   * 
   * @example
   * 0d13f021c5cd4997831a9717e75b0663
   */
  appCode?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 111265074
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

