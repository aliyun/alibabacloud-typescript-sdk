// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnRefreshQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of URLs that can be blocked.
   * 
   * @example
   * 100
   */
  blockQuota?: string;
  /**
   * @remarks
   * The remaining number of URLs that can be blocked on the current day.
   * 
   * @example
   * 100
   */
  blockRemain?: string;
  /**
   * @remarks
   * The maximum number of directories that can be refreshed on the current day.
   * 
   * @example
   * 100
   */
  dirQuota?: string;
  /**
   * @remarks
   * The remaining number of directories that can be refreshed on the current day.
   * 
   * @example
   * 100
   */
  dirRemain?: string;
  /**
   * @remarks
   * The maximum number of URLs or directories with parameters ignored that can be refreshed on the current day.
   * 
   * @example
   * 100
   */
  ignoreParamsQuota?: string;
  /**
   * @remarks
   * The number of remaining URLs or directories that can be refreshed with parameters ignored on the current day.
   * 
   * @example
   * 10
   */
  ignoreParamsRemain?: string;
  /**
   * @remarks
   * The maximum number of URLs that can be prefetched on the current day.
   * 
   * @example
   * 500
   */
  preloadQuota?: string;
  /**
   * @remarks
   * The remaining number of URLs that can be prefetched on the current day.
   * 
   * @example
   * 500
   */
  preloadRemain?: string;
  /**
   * @remarks
   * The maximum number of URLs or directories that can be refreshed by using regular expressions on the current day.
   * 
   * @example
   * 100
   */
  regexQuota?: string;
  /**
   * @remarks
   * The remaining number of URLs or directories that can be refreshed by using regular expressions on the current day.
   * 
   * @example
   * 100
   */
  regexRemain?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 42E0554B-80F4-4921-AED6-ACFB22CAAAD0
   */
  requestId?: string;
  /**
   * @remarks
   * The maximum number of URLs that can be refreshed on the current day.
   * 
   * @example
   * 2000
   */
  urlQuota?: string;
  /**
   * @remarks
   * The remaining number of URLs that can be refreshed on the current day.
   * 
   * @example
   * 2000
   */
  urlRemain?: string;
  static names(): { [key: string]: string } {
    return {
      blockQuota: 'BlockQuota',
      blockRemain: 'BlockRemain',
      dirQuota: 'DirQuota',
      dirRemain: 'DirRemain',
      ignoreParamsQuota: 'IgnoreParamsQuota',
      ignoreParamsRemain: 'IgnoreParamsRemain',
      preloadQuota: 'PreloadQuota',
      preloadRemain: 'PreloadRemain',
      regexQuota: 'RegexQuota',
      regexRemain: 'RegexRemain',
      requestId: 'RequestId',
      urlQuota: 'UrlQuota',
      urlRemain: 'UrlRemain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockQuota: 'string',
      blockRemain: 'string',
      dirQuota: 'string',
      dirRemain: 'string',
      ignoreParamsQuota: 'string',
      ignoreParamsRemain: 'string',
      preloadQuota: 'string',
      preloadRemain: 'string',
      regexQuota: 'string',
      regexRemain: 'string',
      requestId: 'string',
      urlQuota: 'string',
      urlRemain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

