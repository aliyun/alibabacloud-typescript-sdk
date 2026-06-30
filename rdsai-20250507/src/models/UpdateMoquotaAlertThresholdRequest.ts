// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMOQuotaAlertThresholdRequestApikey extends $dara.Model {
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
   * The alert threshold percentage. For example, a value of 80 triggers an alert when usage reaches 80% of the usage quota. The alert is reset after the usage falls below this percentage.
   * 
   * @example
   * [0, 100]，0 会清理告警设置
   */
  thresholdPercent?: number;
  static names(): { [key: string]: string } {
    return {
      apikey: 'Apikey',
      thresholdPercent: 'ThresholdPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apikey: 'string',
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

export class UpdateMOQuotaAlertThresholdRequest extends $dara.Model {
  /**
   * @remarks
   * A list of API keys.
   * 
   * This parameter is required.
   */
  apikey?: UpdateMOQuotaAlertThresholdRequestApikey[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apikey: 'Apikey',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apikey: { 'type': 'array', 'itemType': UpdateMOQuotaAlertThresholdRequestApikey },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apikey)) {
      $dara.Model.validateArray(this.apikey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

