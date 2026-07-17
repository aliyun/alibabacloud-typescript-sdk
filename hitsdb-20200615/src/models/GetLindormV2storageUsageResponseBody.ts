// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormV2StorageUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why the access was denied.
   * 
   * @example
   * {"AuthAction":"xxx","AuthPrincipalDisplayName":"222","AuthPrincipalOwnerId":"111","AuthPrincipalType":"SubUser",,"NoPermissionType":"ImplicitDeny","PolicyType":"AccountLevelIdentityBasedPolicy","EncodedDiagnosticMessage":"xxxxxx"}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The capacity information for each storage medium.
   */
  capacityByDiskCategory?: { [key: string]: any }[];
  /**
   * @remarks
   * The capacity information for the multi-zone instance.
   * 
   * {"ZoneId":{"CapacityByDiskCategory":{...},"UsageByDiskCategory":{...}}}
   * 
   * @example
   * {
   *     "cn-hangzhou-i": {
   *       "diskTypeCapacity": [
   *         {
   *           "mode": "CLOUD_STORAGE",
   *           "perfLevel": "PL1",
   *           "usedCapacity": 0,
   *           "category": "PERF_CLOUD_ESSD_PL1",
   *           "capacity": 4000
   *         }
   *       ],
   *       "diskTypeUsage": [
   *         {
   *           "usedLindormColumn3": 688935,
   *           "usedLindormTable": 1086288931872,
   *           "usedLindormTsdb": 0,
   *           "usedOther": 0,
   *           "usedLindormMessage3": 0,
   *           "diskType": "PerformanceCloudStorage",
   *           "used": 1719816329046,
   *           "usedLindormSearch3": 36339905446,
   *           "usedLindormSpark": 2131936938,
   *           "capacity": 4294967296000,
   *           "usedLindormSearch": 0,
   *           "usedLindormVector3": 595054865855
   *         }
   *       ]
   *     }
   *   }
   */
  instanceStorageZoneMap?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates this unique ID for each request. Use this ID to troubleshoot issues.
   * 
   * @example
   * BDDB1954-002B-4249-B2DF-2CDDA0259668
   */
  requestId?: string;
  /**
   * @remarks
   * The usage information for each storage medium.
   */
  usageByDiskCategory?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      capacityByDiskCategory: 'CapacityByDiskCategory',
      instanceStorageZoneMap: 'InstanceStorageZoneMap',
      requestId: 'RequestId',
      usageByDiskCategory: 'UsageByDiskCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      capacityByDiskCategory: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      instanceStorageZoneMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      usageByDiskCategory: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.capacityByDiskCategory)) {
      $dara.Model.validateArray(this.capacityByDiskCategory);
    }
    if(this.instanceStorageZoneMap) {
      $dara.Model.validateMap(this.instanceStorageZoneMap);
    }
    if(Array.isArray(this.usageByDiskCategory)) {
      $dara.Model.validateArray(this.usageByDiskCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

