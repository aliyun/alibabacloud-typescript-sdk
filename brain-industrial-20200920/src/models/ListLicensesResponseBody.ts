// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLicensesResponseBodyLicenseList extends $dara.Model {
  /**
   * @example
   * 2024-10-14 14:15:45
   */
  activateTime?: string;
  adaptiveMachine?: number;
  allDuration?: string;
  /**
   * @example
   * 2024-10-14 13:17:20
   */
  buyTime?: string;
  /**
   * @example
   * 72
   */
  cpuLimit?: number;
  /**
   * @example
   * ""
   */
  description?: string;
  duration?: string;
  /**
   * @example
   * 2024-10-14 14:15:45
   */
  effectTime?: string;
  /**
   * @example
   * 2025-10-14 14:15:45
   */
  expireTime?: string;
  /**
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * 451f14ee73604aesdfe4da606764ce09
   */
  instanceId?: string;
  /**
   * @example
   * aics_1000
   */
  licenseSpecCode?: string;
  licenseSpecName?: string;
  /**
   * @example
   * brainindustrial_aicsruntime_public_cn
   */
  licenseSpecType?: string;
  /**
   * @example
   * 256
   */
  memoryLimit?: number;
  /**
   * @example
   * activated
   */
  status?: string;
  unActivateAllDuration?: string;
  static names(): { [key: string]: string } {
    return {
      activateTime: 'ActivateTime',
      adaptiveMachine: 'AdaptiveMachine',
      allDuration: 'AllDuration',
      buyTime: 'BuyTime',
      cpuLimit: 'CpuLimit',
      description: 'Description',
      duration: 'Duration',
      effectTime: 'EffectTime',
      expireTime: 'ExpireTime',
      id: 'Id',
      instanceId: 'InstanceId',
      licenseSpecCode: 'LicenseSpecCode',
      licenseSpecName: 'LicenseSpecName',
      licenseSpecType: 'LicenseSpecType',
      memoryLimit: 'MemoryLimit',
      status: 'Status',
      unActivateAllDuration: 'UnActivateAllDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateTime: 'string',
      adaptiveMachine: 'number',
      allDuration: 'string',
      buyTime: 'string',
      cpuLimit: 'number',
      description: 'string',
      duration: 'string',
      effectTime: 'string',
      expireTime: 'string',
      id: 'string',
      instanceId: 'string',
      licenseSpecCode: 'string',
      licenseSpecName: 'string',
      licenseSpecType: 'string',
      memoryLimit: 'number',
      status: 'string',
      unActivateAllDuration: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLicensesResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  licenseList?: ListLicensesResponseBodyLicenseList[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @example
   * FAC892CE-5A94-5616-91DC-629B09CC6792
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 42
   */
  totalCount?: number;
  /**
   * @example
   * 4
   */
  totalPage?: string;
  /**
   * @example
   * 4
   */
  totalPageCount?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      currentPage: 'CurrentPage',
      httpStatusCode: 'HttpStatusCode',
      licenseList: 'LicenseList',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      totalPageCount: 'TotalPageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      currentPage: 'number',
      httpStatusCode: 'number',
      licenseList: { 'type': 'array', 'itemType': ListLicensesResponseBodyLicenseList },
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'string',
      totalPageCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.licenseList)) {
      $dara.Model.validateArray(this.licenseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

