// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnUserQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of URLs and directories that can be blocked.
   * 
   * @example
   * 100
   */
  blockQuota?: number;
  /**
   * @remarks
   * The remaining number of URLs and directories that can be blocked.
   * 
   * @example
   * 100
   */
  blockRemain?: number;
  /**
   * @remarks
   * The maximum number of accelerated domain names.
   * 
   * @example
   * 50
   */
  domainQuota?: number;
  /**
   * @remarks
   * The maximum number of ignore params that can be refreshed.
   * 
   * @example
   * 100
   */
  ignoreParamsQuota?: number;
  /**
   * @remarks
   * The remaining number of ignore params that can be refreshed.
   * 
   * @example
   * 10
   */
  ignoreParamsRemain?: number;
  /**
   * @remarks
   * The maximum number of URLs that can be prefetched.
   * 
   * @example
   * 500
   */
  preloadQuota?: number;
  /**
   * @remarks
   * The remaining number of URLs that can be prefetched.
   * 
   * @example
   * 100
   */
  preloadRemain?: number;
  /**
   * @remarks
   * The maximum number of directories that can be refreshed.
   * 
   * @example
   * 100
   */
  refreshDirQuota?: number;
  /**
   * @remarks
   * The remaining number of directories that can be refreshed.
   * 
   * @example
   * 500
   */
  refreshDirRemain?: number;
  /**
   * @remarks
   * The maximum number of URLs that can be refreshed.
   * 
   * @example
   * 2000
   */
  refreshUrlQuota?: number;
  /**
   * @remarks
   * The remaining number of URLs that can be refreshed.
   * 
   * @example
   * 2000
   */
  refreshUrlRemain?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EF4F084A-2F49-4E1C-9CA0-DC85BCE7F391
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      blockQuota: 'BlockQuota',
      blockRemain: 'BlockRemain',
      domainQuota: 'DomainQuota',
      ignoreParamsQuota: 'IgnoreParamsQuota',
      ignoreParamsRemain: 'IgnoreParamsRemain',
      preloadQuota: 'PreloadQuota',
      preloadRemain: 'PreloadRemain',
      refreshDirQuota: 'RefreshDirQuota',
      refreshDirRemain: 'RefreshDirRemain',
      refreshUrlQuota: 'RefreshUrlQuota',
      refreshUrlRemain: 'RefreshUrlRemain',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockQuota: 'number',
      blockRemain: 'number',
      domainQuota: 'number',
      ignoreParamsQuota: 'number',
      ignoreParamsRemain: 'number',
      preloadQuota: 'number',
      preloadRemain: 'number',
      refreshDirQuota: 'number',
      refreshDirRemain: 'number',
      refreshUrlQuota: 'number',
      refreshUrlRemain: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

