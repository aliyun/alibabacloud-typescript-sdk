// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodRefreshQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of Object Storage Service (OSS) buckets that can be refreshed each day.
   * 
   * @example
   * 500
   */
  blockQuota?: string;
  /**
   * @remarks
   * The maximum number of directories of files that can be refreshed each day.
   * 
   * @example
   * 100
   */
  dirQuota?: string;
  /**
   * @remarks
   * The remaining number of directories of files that can be refreshed on the current day.
   * 
   * @example
   * 99
   */
  dirRemain?: string;
  /**
   * @remarks
   * The maximum number of URLs of files that can be prefetched each day.
   * 
   * @example
   * 500
   */
  preloadQuota?: string;
  /**
   * @remarks
   * The remaining number of URLs of files that can be prefetched on the current day.
   * 
   * @example
   * 500
   */
  preloadRemain?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 42E0554B-80F4-4921-****-ACFB22CAAAD0
   */
  requestId?: string;
  /**
   * @remarks
   * The maximum number of URLs of files that can be refreshed each day.
   * 
   * @example
   * 2000
   */
  urlQuota?: string;
  /**
   * @remarks
   * The remaining number of URLs of files that can be refreshed on the current day.
   * 
   * @example
   * 1996
   */
  urlRemain?: string;
  /**
   * @remarks
   * The remaining number of OSS buckets that can be refreshed on the current day.
   * 
   * @example
   * 500
   */
  blockRemain?: string;
  static names(): { [key: string]: string } {
    return {
      blockQuota: 'BlockQuota',
      dirQuota: 'DirQuota',
      dirRemain: 'DirRemain',
      preloadQuota: 'PreloadQuota',
      preloadRemain: 'PreloadRemain',
      requestId: 'RequestId',
      urlQuota: 'UrlQuota',
      urlRemain: 'UrlRemain',
      blockRemain: 'blockRemain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockQuota: 'string',
      dirQuota: 'string',
      dirRemain: 'string',
      preloadQuota: 'string',
      preloadRemain: 'string',
      requestId: 'string',
      urlQuota: 'string',
      urlRemain: 'string',
      blockRemain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

