// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the common configuration item. Valid values:
   * 
   * *   **access_failed_cnt**: the maximum number of access attempts allowed when Data Security Center (DSC) fails to access an unauthorized resource.
   * *   **access_permission_exprie_max_days**: the maximum idle period allowed for access permissions before an alert is triggered.
   * *   **log_datasize_avg_days**: the minimum percentage of the volume of logs of a specific type generated on the current day to the average volume of logs generated in the previous 10 days before an alert is triggered.
   * 
   * @example
   * access_failed_cnt
   */
  code?: string;
  /**
   * @remarks
   * The description of the common configuration item.
   * 
   * @example
   * Maximum number of access attempts allowed when DSC fails to access an unauthorized resource: 10
   */
  description?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 39.170.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The value of the common configuration item. The meaning of this parameter varies with the value of the Code parameter.
   * 
   * *   If you set the Code parameter to **access_failed_cnt**, the Value parameter specifies the maximum number of access attempts allowed when DSC fails to access an unauthorized resource.
   * *   If you set the Code parameter to **access_permission_exprie_max_days**, the Value parameter specifies the maximum idle period allowed for access permissions before an alert is triggered.
   * *   If you set the Code parameter to **log_datasize_avg_days**, the Value parameter specifies the minimum percentage of the volume of logs of a specific type generated on the current day to the average amount of logs generated in the previous 10 days before an alert is triggered.
   * 
   * @example
   * 30
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      featureType: 'FeatureType',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      featureType: 'number',
      lang: 'string',
      sourceIp: 'string',
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

