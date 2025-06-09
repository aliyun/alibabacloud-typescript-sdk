// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSpecReviewTaskResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * 339
   */
  id?: string;
  /**
   * @example
   * test
   */
  appName?: string;
  /**
   * @example
   * {
   *                "limiters": [
   *                     {
   *                          "type": "INDEX_QUOTA",
   *                          "maxValue": 500,
   *                          "immutable": false
   *                     }
   *                ]
   *           }
   */
  applyLimiter?: { [key: string]: any };
  /**
   * @example
   * {
   *                "appType": "TRIAL",
   *                "cu": 4,
   *                "storage": 100
   *           }
   */
  applyQuota?: { [key: string]: any };
  applyReason?: string;
  /**
   * @example
   * {
   *                "limiters": [
   *                     {
   *                          "type": "INDEX_QUOTA",
   *                          "maxValue": 500,
   *                          "immutable": false
   *                     }
   *                ]
   *           }
   */
  effectiveLimiter?: { [key: string]: any };
  /**
   * @example
   * {
   *                "appType": "TRIAL",
   *                "cu": 4,
   *                "storage": 100
   *           }
   */
  effectiveQuota?: { [key: string]: any };
  /**
   * @example
   * 2024-05-30T06:28:07.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-05-30T06:28:07.000Z
   */
  gmtModified?: string;
  /**
   * @example
   * {
   *                "limiters": [
   *                     {
   *                          "type": "INDEX_QUOTA",
   *                          "maxValue": 500,
   *                          "immutable": false
   *                     }
   *                ]
   *           }
   */
  oldLimiter?: { [key: string]: any };
  /**
   * @example
   * {
   *                "appType": "TRIAL",
   *                "cu": 2,
   *                "storage": 1
   *           }
   */
  oldQuota?: { [key: string]: any };
  /**
   * @example
   * USER
   */
  source?: string;
  /**
   * @example
   * Pending
   */
  status?: string;
  /**
   * @example
   * QUOTA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      appName: 'appName',
      applyLimiter: 'applyLimiter',
      applyQuota: 'applyQuota',
      applyReason: 'applyReason',
      effectiveLimiter: 'effectiveLimiter',
      effectiveQuota: 'effectiveQuota',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      oldLimiter: 'oldLimiter',
      oldQuota: 'oldQuota',
      source: 'source',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      appName: 'string',
      applyLimiter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      applyQuota: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      applyReason: 'string',
      effectiveLimiter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      effectiveQuota: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      gmtModified: 'string',
      oldLimiter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      oldQuota: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      source: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.applyLimiter) {
      $dara.Model.validateMap(this.applyLimiter);
    }
    if(this.applyQuota) {
      $dara.Model.validateMap(this.applyQuota);
    }
    if(this.effectiveLimiter) {
      $dara.Model.validateMap(this.effectiveLimiter);
    }
    if(this.effectiveQuota) {
      $dara.Model.validateMap(this.effectiveQuota);
    }
    if(this.oldLimiter) {
      $dara.Model.validateMap(this.oldLimiter);
    }
    if(this.oldQuota) {
      $dara.Model.validateMap(this.oldQuota);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

