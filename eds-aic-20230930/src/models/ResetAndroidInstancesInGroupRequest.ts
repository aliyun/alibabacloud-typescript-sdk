// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAndroidInstancesInGroupRequest extends $dara.Model {
  /**
   * @remarks
   * A list of instance IDs.
   */
  androidInstanceIds?: string[];
  ignoreParamValidation?: boolean;
  /**
   * @remarks
   * The sale mode. This parameter is deprecated.
   * 
   * @example
   * Instance
   */
  saleMode?: string;
  /**
   * @remarks
   * <props="china">Specifies whether to retain the property settings when you reset the instances. By default, the property settings are not retained. This parameter applies only to cloud phone matrix instances. Run the wya dump config command to view the details of the retained properties.<props="intl">This parameter is not supported on the international site (alibabacloud.com).
   * 
   * @example
   * 1
   */
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

