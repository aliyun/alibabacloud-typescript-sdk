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
   * @example
   * 0.2
   */
  limitRate?: number;
  /**
   * @example
   * fixed
   */
  limitType?: string;
  /**
   * @example
   * 100000
   */
  tokenQuota?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      limitRate: 'LimitRate',
      limitType: 'LimitType',
      tokenQuota: 'TokenQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
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
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
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

