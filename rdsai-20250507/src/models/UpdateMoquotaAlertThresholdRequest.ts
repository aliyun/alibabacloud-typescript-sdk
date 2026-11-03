// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMOQuotaAlertThresholdRequestApikey extends $dara.Model {
  /**
   * @remarks
   * ApiKey
   * 
   * @example
   * sk-rds-*****
   */
  apikey?: string;
  /**
   * @remarks
   * The alert threshold percentage. For example, 80 indicates that an alert is triggered when the usage reaches 80%. The alert is reset when the usage drops below this percentage.
   * 
   * @example
   * [0, 100]. 0 clears the alert settings
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
   * The list of API keys.
   * 
   * This parameter is required.
   */
  apikey?: UpdateMOQuotaAlertThresholdRequestApikey[];
  /**
   * @remarks
   * The instance name.
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

