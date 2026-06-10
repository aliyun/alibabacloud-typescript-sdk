// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAppSupabaseSecretsRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Key list JSON
   * 
   * @example
   * {"key":"abc"}
   */
  secretsJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      secretsJson: 'SecretsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      secretsJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

