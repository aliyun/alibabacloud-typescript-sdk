// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnUserQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of URLs that can be blocked.
   * 
   * @example
   * 20
   */
  blockQuota?: number;
  /**
   * @remarks
   * The remaining number of URLs that can be blocked.
   * 
   * @example
   * 500
   */
  blockRemain?: number;
  /**
   * @remarks
   * The maximum number of accelerated domains.
   * 
   * @example
   * 50
   */
  domainQuota?: number;
  /**
   * @remarks
   * The maximum number of URLs or directories with parameters ignored that can be refreshed.
   * 
   * @example
   * 100
   */
  ignoreParamsQuota?: number;
  /**
   * @remarks
   * The number of remaining URLs or directories with parameters ignored that can be refreshed.
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
   * 300
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
   * 100
   */
  refreshDirRemain?: number;
  /**
   * @remarks
   * The maximum number of URLs that can be refreshed.
   * 
   * @example
   * 100
   */
  refreshUrlQuota?: number;
  /**
   * @remarks
   * The remaining number of URLs that can be refreshed.
   * 
   * @example
   * 100
   */
  refreshUrlRemain?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BFFCDFAD-DACC-484E-9BE6-0AF3B3A0DD23
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

