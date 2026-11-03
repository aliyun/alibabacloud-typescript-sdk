// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiKeyQuotaRequestKeys extends $dara.Model {
  /**
   * @remarks
   * API KEY
   * 
   * @example
   * sk-rds-xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The daily quota of the API key.
   * 
   * @example
   * 100000000
   */
  dailyTokenQuota?: number;
  /**
   * @remarks
   * The rate limit ratio. This parameter is required when the limit type is set to ratio.
   * 
   * @example
   * 0.2
   */
  limitRate?: number;
  /**
   * @remarks
   * The quota limit type. Valid values:
   * - ratio: Proportional limit.
   * - fixed: Fixed value.
   * - auto: Automatic allocation.
   * 
   * @example
   * fixed
   */
  limitType?: string;
  /**
   * @remarks
   * The fixed rate limit value. This parameter is required when the limit type is set to fixed.
   * 
   * @example
   * 100000
   */
  tokenQuota?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      dailyTokenQuota: 'DailyTokenQuota',
      limitRate: 'LimitRate',
      limitType: 'LimitType',
      tokenQuota: 'TokenQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      dailyTokenQuota: 'number',
      limitRate: 'number',
      limitType: 'string',
      tokenQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApiKeyQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of API keys.
   */
  keys?: UpdateApiKeyQuotaRequestKeys[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keys: { 'type': 'array', 'itemType': UpdateApiKeyQuotaRequestKeys },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

