// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshPluginOAuthCodeRequest extends $dara.Model {
  /**
   * @example
   * 4/0AX4xxxx
   */
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

