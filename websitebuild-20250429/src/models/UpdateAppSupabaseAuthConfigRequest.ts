// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppSupabaseAuthConfigRequest extends $dara.Model {
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
   * Configuration JSON
   * 
   * @example
   * {"key":"value"}
   */
  configsJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      configsJson: 'ConfigsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      configsJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

