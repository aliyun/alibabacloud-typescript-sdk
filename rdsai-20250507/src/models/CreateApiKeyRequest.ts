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
   * The instance name.
   * 
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the API key.
   * 
   * @example
   * api-*****
   */
  keyName?: string;
  /**
   * @remarks
   * The quota percentage.
   * 
   * @example
   * 0.2
   */
  limitRate?: number;
  /**
   * @remarks
   * The quota type. Valid values:
   * - ratio: by percentage.
   * - fixed: by fixed value.
   * - auto: automatic allocation.
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
   * The quota for the current key.
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

