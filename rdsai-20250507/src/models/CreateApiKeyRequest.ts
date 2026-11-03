// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The daily token quota for the API key.
   * 
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
   * The name of the API key.
   * 
   * @example
   * api-*****
   */
  keyName?: string;
  /**
   * @remarks
   * The quota limit percentage.
   * 
   * @example
   * 0.2
   */
  limitRate?: number;
  /**
   * @remarks
   * The quota limit type. Valid values:
   * - ratio: Percentage-based.
   * - fixed: Fixed value.
   * - auto: Automatic allocation.
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
  roleArn?: string;
  roleName?: string;
  /**
   * @remarks
   * The token quota for the current key.
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
      roleArn: 'RoleArn',
      roleName: 'RoleName',
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
      roleArn: 'string',
      roleName: 'string',
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

