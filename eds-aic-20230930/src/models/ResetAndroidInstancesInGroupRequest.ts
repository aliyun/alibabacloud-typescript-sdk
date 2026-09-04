// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAndroidInstancesInGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: false.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  ignoreParamValidation?: boolean;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 50003308011****
   */
  promotionId?: string;
  /**
   * @remarks
   * **[Deprecated]** The sales mode. This parameter is deprecated.
   * 
   * @example
   * Instance
   */
  saleMode?: string;
  /**
   * @remarks
   * <props="china">Specifies whether to retain attribute settings during the reset. If this parameter is not specified, attribute configurations are not retained by default. This parameter takes effect only for cloud phone matrix instances. Run the wya dump config command to view the details of retained attributes.
   * <props="intl">This parameter is not supported on the international site.
   * 
   * @example
   * 1
   */
  settingResetType?: number;
  /**
   * @remarks
   * Specify this parameter when you need to reduce storage while resetting instances in a cloud phone matrix. This feature is currently available through a whitelist. This parameter applies only to instances in a cloud phone matrix.
   * 
   * @example
   * 10
   */
  targetDataDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      autoPay: 'AutoPay',
      ignoreParamValidation: 'IgnoreParamValidation',
      promotionId: 'PromotionId',
      saleMode: 'SaleMode',
      settingResetType: 'SettingResetType',
      targetDataDiskSize: 'TargetDataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      autoPay: 'boolean',
      ignoreParamValidation: 'boolean',
      promotionId: 'string',
      saleMode: 'string',
      settingResetType: 'number',
      targetDataDiskSize: 'number',
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

