// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMOQuotaAlertThresholdResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * sk-rds-*****
   */
  apikey?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rds_copilot***_public_cn-o*****1
   */
  instanceId?: string;
  /**
   * @remarks
   * The API key name.
   * 
   * @example
   * api-*****
   */
  keyName?: string;
  /**
   * @remarks
   * The key type.
   * 
   * @example
   * system / custom
   */
  keyType?: string;
  /**
   * @remarks
   * The alert threshold percentage. For example, a value of 80 triggers an alert when usage reaches 80% of the usage quota. The alert is reset after the usage falls below this percentage.
   * 
   * @example
   * [0, 100]，0 会清理告警设置
   */
  thresholdPercent?: number;
  static names(): { [key: string]: string } {
    return {
      apikey: 'Apikey',
      instanceId: 'InstanceId',
      keyName: 'KeyName',
      keyType: 'KeyType',
      thresholdPercent: 'ThresholdPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apikey: 'string',
      instanceId: 'string',
      keyName: 'string',
      keyType: 'string',
      thresholdPercent: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMOQuotaAlertThresholdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * The result list.
   */
  results?: UpdateMOQuotaAlertThresholdResponseBodyResults[];
  /**
   * @remarks
   * A value of `true` indicates that the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': UpdateMOQuotaAlertThresholdResponseBodyResults },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

