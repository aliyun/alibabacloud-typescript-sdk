// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateQuotaAlarmRequestQuotaDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the quota dimension.
   * 
   * > You must specify both Dimensions.N.Key and Dimensions.N.Value. The value range of N depends on the number of dimensions supported by the cloud service. You can call the [ListProductQuotaDimensions](https://help.aliyun.com/document_detail/440553.html) operation to query the supported quota dimensions. The length of the returned array is the maximum value of N.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the quota dimension.
   * 
   *  > You must specify both Dimensions.N.Key and Dimensions.N.Value. The value range of N depends on the number of dimensions supported by the cloud service. You can call the [ListProductQuotaDimensions](https://help.aliyun.com/document_detail/440553.html) operation to query the supported quota dimensions. The length of the returned array is the maximum value of N.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the quota alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * q_hvnoqv alarm
   */
  alarmName?: string;
  /**
   * @remarks
   * The original context information.
   * 
   * @example
   * {}
   */
  originalContext?: string;
  /**
   * @remarks
   * The abbreviation of the cloud service.
   * 
   * > For more information about how to obtain the abbreviation of a cloud service, see ProductCode in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
   * 
   * This parameter is required.
   * 
   * @example
   * config
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * > For more information about how to obtain the quota ID of a cloud service, see QuotaActionCode in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
   * 
   * This parameter is required.
   * 
   * @example
   * q_hvnoqv
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota dimensions.
   * The dimensions are properties of a quota item. A quota item is uniquely identified by Dimensions and QuotaActionCode.
   * > Some dimensions are required for specific cloud services. You can call the [ListProductQuotaDimensions](https://help.aliyun.com/document_detail/440553.html) operation to query the supported quota dimensions of a cloud service. The Requisite response parameter indicates whether a dimension is required.
   */
  quotaDimensions?: CreateQuotaAlarmRequestQuotaDimensions[];
  /**
   * @remarks
   * The numeric value of the quota alert threshold. Valid values:
   * 
   * - If ThresholdType is set to used, you receive an alert notification when the used quota is greater than or equal to the specified value. The quota alert threshold must be greater than the used quota.
   * 
   * - If ThresholdType is set to usable, you receive an alert notification when the available quota is less than or equal to the specified value. The quota alert threshold must be less than the available quota.
   * 
   * > You must specify either this parameter or ThresholdPercent.
   * 
   * @example
   * 150
   */
  threshold?: number;
  /**
   * @remarks
   * The percentage of the quota alert threshold. Valid values:
   * 
   * - If ThresholdType is set to used, you receive an alert notification when the used quota is greater than or equal to the specified percentage. Valid values: (50%, 100%].
   * 
   * - If ThresholdType is set to usable, you receive an alert notification when the available quota is less than or equal to the specified percentage. Valid values: (0%, 50%].
   * 
   * > You must specify either this parameter or Threshold.
   * 
   * @example
   * 50
   */
  thresholdPercent?: number;
  /**
   * @remarks
   * The quota alert type. Valid values:
   * 
   * - used: alerts on the used quota. This is the default value.
   * - usable: alerts on the remaining available quota.
   * 
   * @example
   * used
   */
  thresholdType?: string;
  /**
   * @remarks
   * The public URL to which Quota Center sends alert notifications by using HTTP POST requests.
   * 
   * @example
   * https://alert.aliyun.com/callback
   */
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      alarmName: 'AlarmName',
      originalContext: 'OriginalContext',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaDimensions: 'QuotaDimensions',
      threshold: 'Threshold',
      thresholdPercent: 'ThresholdPercent',
      thresholdType: 'ThresholdType',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmName: 'string',
      originalContext: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaDimensions: { 'type': 'array', 'itemType': CreateQuotaAlarmRequestQuotaDimensions },
      threshold: 'number',
      thresholdPercent: 'number',
      thresholdType: 'string',
      webHook: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.quotaDimensions)) {
      $dara.Model.validateArray(this.quotaDimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

