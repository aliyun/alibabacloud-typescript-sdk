// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAndroidInstancesInGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances.
   */
  androidInstanceIds?: string[];
  ignoreParamValidation?: boolean;
  saleMode?: string;
  settingResetType?: number;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      ignoreParamValidation: 'IgnoreParamValidation',
      saleMode: 'SaleMode',
      settingResetType: 'SettingResetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      ignoreParamValidation: 'boolean',
      saleMode: 'string',
      settingResetType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

