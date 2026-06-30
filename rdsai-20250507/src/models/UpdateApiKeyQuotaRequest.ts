// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiKeyQuotaRequestKeys extends $dara.Model {
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * sk-rds-xxx
   */
  apiKey?: string;
  /**
   * @example
   * 100000000
   */
  dailyTokenQuota?: number;
  /**
   * @remarks
   * The limit rate. This parameter is required when `LimitType` is set to `ratio`.
   * 
   * @example
   * 0.2
   */
  limitRate?: number;
  /**
   * @remarks
   * The limit type. Valid values:
   * 
   * - `ratio`: Allocates the quota proportionally.
   * 
   * - `fixed`: Allocates a fixed quota.
   * 
   * - `auto`: Allocates the quota automatically.
   * 
   * @example
   * fixed
   */
  limitType?: string;
  /**
   * @remarks
   * The token quota. This parameter is required when `LimitType` is set to `fixed`.
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
   * The instance ID.
   * 
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @remarks
   * A list of API keys.
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

