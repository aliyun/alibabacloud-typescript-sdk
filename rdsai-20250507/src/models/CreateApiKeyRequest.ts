// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiKeyRequest extends $dara.Model {
  /**
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @example
   * api-*****
   */
  keyName?: string;
  limitRate?: number;
  limitType?: string;
  /**
   * @example
   * 1
   */
  quantity?: number;
  tokenQuota?: number;
  static names(): { [key: string]: string } {
    return {
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

