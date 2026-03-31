// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQuotaPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * @example
   * { "name": "planA", // The quota is a level-1 quota. You can select only the fields that are related to the quota plan. "quota": { "name": "a", "nickName": "aaa_nick", "tenantId": "10001", "regionId": "cn-hangzhou", "parentId": "0", "cluster": "AT-ODPS-TEST3", "parameter": { "minCU": 40, "maxCU": 40, "adhocCU": 0, "elasticMinCU": 40, "elasticMaxCU": 40, "enablePreemptiveScheduling": false, "forceReservedMin":true, "enablePriority":false, "singleJobCULimit":100, "adhocQuotaBeginTimeInSec": 1345, "adhocQuotaEndTimeInSec": 1234, "ignoreAdhocQuota":false }, "subQuotaInfoList": [ { "nickName": "WlmFuxiSecondaryOnlineQuotaTest", "name": "WlmFuxiSecondaryOnlineQuotaTest", "type": "FUXI_ONLINE", "tenantId": "10001", "regionId": "cn-hangzhou", "cluster": "AT-ODPS-TEST3", "parameter": { "minCU": 40, "maxCU": 40, "adhocCU": 0, "elasticMinCU": 40, "elasticMaxCU": 40, "enablePreemptiveScheduling": false, "forceReservedMin":true, "enablePriority":false, "singleJobCULimit":100, "adhocQuotaBeginTimeInSec": 1345, "adhocQuotaEndTimeInSec": 1234, "ignoreAdhocQuota":false } } ] } }
   */
  body?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 228451885265153
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

