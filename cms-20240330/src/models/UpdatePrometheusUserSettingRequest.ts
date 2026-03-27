// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusUserSettingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc
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

