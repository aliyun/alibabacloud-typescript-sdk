// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppSupabaseSecretsRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @remarks
   * JSON list of keys to be deleted
   * 
   * @example
   * {"key":"key"}
   */
  keysJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      keysJson: 'KeysJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      keysJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

