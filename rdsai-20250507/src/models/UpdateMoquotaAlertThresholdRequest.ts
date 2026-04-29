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
   * This parameter is required.
   */
  apikey?: UpdateMOQuotaAlertThresholdRequestApikey[];
  /**
   * @remarks
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

