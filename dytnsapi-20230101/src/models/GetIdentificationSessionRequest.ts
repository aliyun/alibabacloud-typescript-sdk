// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentificationSessionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  authCode?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

