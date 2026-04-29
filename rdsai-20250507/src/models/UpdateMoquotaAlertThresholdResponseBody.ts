// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMOQuotaAlertThresholdResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * API Key
   * 
   * @example
   * sk-rds-*****
   */
  apikey?: string;
  /**
   * @example
   * rds_copilot***_public_cn-o*****1
   */
  instanceId?: string;
  /**
   * @example
   * api-*****
   */
  keyName?: string;
  /**
   * @example
   * system / custom
   */
  keyType?: string;
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
   * Id of the request
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  results?: UpdateMOQuotaAlertThresholdResponseBodyResults[];
  /**
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

