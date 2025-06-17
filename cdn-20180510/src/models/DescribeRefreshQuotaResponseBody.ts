// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRefreshQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of URLs that can be refreshed on the current day.
   * 
   * @example
   * 300
   */
  blockQuota?: string;
  /**
   * @remarks
   * The remaining number of times that you can prefetch content to L2 points of presence (POPs) on the current day.
   * 
   * @example
   * 100
   */
  blockRemain?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 100
   */
  dirQuota?: string;
  /**
   * @remarks
   * The remaining number of URLs that can be refreshed on the current day.
   * 
   * @example
   * 99
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
   * The maximum number of directories that can be refreshed on the current day.
   * 
   * @example
   * 20
   */
  preloadEdgeQuota?: string;
  /**
   * @remarks
   * The maximum number of times that you can prefetch content to L1 POPs on the current day.
   * 
   * @example
   * 20
   */
  preloadEdgeRemain?: string;
  /**
   * @remarks
   * The remaining number of times that you can prefetch content to L1 POPs on the current day.
   * 
   * @example
   * 500
   */
  preloadQuota?: string;
  /**
   * @remarks
   * The maximum number of times that you can prefetch content to L1 nodes on the current day.
   * 
   * @example
   * 400
   */
  preloadRemain?: string;
  /**
   * @remarks
   * The maximum number of times that you can prefetch content to L2 POPs on the current day.
   * 
   * @example
   * 20
   */
  regexQuota?: string;
  /**
   * @remarks
   * The remaining number of URLs that can be blocked on the current day.
   * 
   * @example
   * 10
   */
  regexRemain?: string;
  /**
   * @remarks
   * The maximum number of URLs and directories that can be blocked on the current day.
   * 
   * @example
   * 42E0554B-80F4-4921-AED6-ACFB22CAAAD0
   */
  requestId?: string;
  /**
   * @remarks
   * The remaining number of directories that can be refreshed on the current day.
   * 
   * @example
   * 2000
   */
  urlQuota?: string;
  /**
   * @remarks
   * The remaining number of URLs or directories that can be refreshed by using regular expressions on the current day.
   * 
   * @example
   * 1996
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
      preloadEdgeQuota: 'PreloadEdgeQuota',
      preloadEdgeRemain: 'PreloadEdgeRemain',
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
      preloadEdgeQuota: 'string',
      preloadEdgeRemain: 'string',
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

