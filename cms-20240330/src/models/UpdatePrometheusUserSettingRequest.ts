// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusUserSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The user configuration setting value.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-southeast-1
   */
  settingValue?: string;
  static names(): { [key: string]: string } {
    return {
      settingValue: 'settingValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settingValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

