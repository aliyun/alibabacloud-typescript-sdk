// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiKeyRequest extends $dara.Model {
  /**
   * @example
   * 1000000000
   */
  dailyTokenQuota?: number;
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
   * The API key name.
   * 
   * @example
   * api-*****
   */
  keyName?: string;
  /**
   * @remarks
   * The proportion of the total quota to allocate. This parameter applies only when `LimitType` is set to `ratio`.
   * 
   * @example
   * 0.2
   */
  limitRate?: number;
  /**
   * @remarks
   * The limit type. Valid values:
   * 
   * - `ratio`: Sets the limit as a ratio of the total available quota.
   * 
   * - `fixed`: Sets the limit to a fixed number of tokens.
   * 
   * - `auto`: Automatically allocates the quota.
   * 
   * @example
   * fixed
   */
  limitType?: string;
  /**
   * @remarks
   * The number of API keys to create. Default value: **1**.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The fixed token quota for the API key. This parameter applies only when `LimitType` is set to `fixed`.
   * 
   * @example
   * 100000
   */
  tokenQuota?: number;
  static names(): { [key: string]: string } {
    return {
      dailyTokenQuota: 'DailyTokenQuota',
      instanceId: 'InstanceId',
      keyName: 'KeyName',
      limitRate: 'LimitRate',
      limitType: 'LimitType',
      quantity: 'Quantity',
      tokenQuota: 'TokenQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyTokenQuota: 'number',
      instanceId: 'string',
      keyName: 'string',
      limitRate: 'number',
      limitType: 'string',
      quantity: 'number',
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

