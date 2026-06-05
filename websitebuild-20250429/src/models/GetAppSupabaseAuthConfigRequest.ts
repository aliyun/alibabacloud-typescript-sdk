// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppSupabaseAuthConfigRequest extends $dara.Model {
  /**
   * @example
   * ALL_AUTH_FLAG
   */
  authType?: string;
  /**
   * @example
   * WS20250801152639000005
   */
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      bizId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

