// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateQuotaAlarmRequestQuotaDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension.
   * 
   * >  You must configure `Dimensions.N.Key` and `Dimensions.N.Value` at the same time. The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service. You can call the [ListProductQuotaDimensions](https://help.aliyun.com/document_detail/440553.html) operation to query the dimensions that are supported by an Alibaba Cloud service. The number of items in the returned array is N.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * >  You must configure `Dimensions.N.Key` and `Dimensions.N.Value` at the same time. The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service. You can call the [ListProductQuotaDimensions](https://help.aliyun.com/document_detail/440553.html) operation to query the dimensions that are supported by an Alibaba Cloud service. The number of items in the returned array is N.
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
   * Quota alarm name
   * 
   * This parameter is required.
   * 
   * @example
   * q_344t4 alarm
   */
  alarmName?: string;
  originalContext?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, check the `ProductCode` parameter that is described in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
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
   * >  To obtain the quota ID of an Alibaba Cloud service, call the [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html) operation and check the value of `QuotaActionCode` in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * q_hvnoqv
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota dimensions. A quota item is uniquely identified by the values of `Dimensions` and `QuotaActionCode`.
   * 
   * >  This parameter is required for specific Alibaba Cloud services. You can call the [ListProductQuotaDimensions](https://help.aliyun.com/document_detail/440553.html) operation to query the quota dimensions that are supported by an Alibaba Cloud service. The value of `Requisite` in the response indicates whether a dimension is required.
   */
  quotaDimensions?: CreateQuotaAlarmRequestQuotaDimensions[];
  /**
   * @remarks
   * The numerical value of the quota alarm threshold. Value settings:
   * - When `ThresholdType` is set to `used`, an alarm notification will be sent if the used amount of the quota is greater than or equal to the preset value. The quota alarm threshold must be greater than the used amount of the quota.
   * - When `ThresholdType` is set to `usable`, an alarm notification will be sent if the remaining available amount of the quota is less than or equal to the preset value. The quota alarm threshold must be less than the remaining available amount of the quota.
   * > One of this parameter and ThresholdPercent must be set.
   * 
   * @example
   * 150
   */
  threshold?: number;
  /**
   * @remarks
   * The percentage of the quota alert threshold. Values:
   * - When `ThresholdType` is set to `used`, you will receive an alert notification if the used amount of the quota is greater than or equal to the preset percentage. The value range is (50%, 100%].
   * - When `ThresholdType` is set to `usable`, you will receive an alert notification if the remaining available amount of the quota is less than or equal to the preset percentage. The value range is (0%, 50%].
   * > One of this parameter and Threshold must be set.
   * 
   * @example
   * 50
   */
  thresholdPercent?: number;
  /**
   * @remarks
   * The type of the quota alert. Valid values:
   * 
   * *   used (default): The alert is created for the used quota.
   * *   usable: The alert is created for the available quota.
   * 
   * @example
   * used
   */
  thresholdType?: string;
  /**
   * @remarks
   * The quota center sends alert information to the specified public URL address via a POST request using the HTTP protocol.
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

