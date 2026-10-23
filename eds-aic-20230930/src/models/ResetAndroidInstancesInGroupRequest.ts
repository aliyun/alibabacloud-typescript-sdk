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
  /**
   * @remarks
   * Specifies whether to skip parameter validation. A value of true indicates that parameter validation is skipped. A value of false or no value indicates that parameter validation is performed.
   */
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
   * **[Deprecated]** The sale mode.
   * 
   * @example
   * Instance
   */
  saleMode?: string;
  /**
   * @remarks
   * <props="china">Specifies whether to retain property settings during the reset. If this parameter is not specified, property configurations are not retained by default. This parameter takes effect only for cloud phone matrix instances. You can run the wya dump config command to view the details of the retained properties.
   * <props="intl">This parameter is not supported on the international site.
   * 
   * @example
   * 1
   */
  settingResetType?: number;
  /**
   * @remarks
   * For instances in a cloud phone matrix, specify this parameter if you need to reduce the storage capacity during the reset. This feature is currently available only to whitelisted users.
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

