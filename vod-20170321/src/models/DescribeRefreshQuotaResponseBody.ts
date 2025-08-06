// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRefreshQuotaResponseBodyRefreshCacheQuota extends $dara.Model {
  dirQuota?: string;
  dirRemain?: string;
  urlQuota?: string;
  urlRemain?: string;
  static names(): { [key: string]: string } {
    return {
      dirQuota: 'DirQuota',
      dirRemain: 'DirRemain',
      urlQuota: 'UrlQuota',
      urlRemain: 'UrlRemain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dirQuota: 'string',
      dirRemain: 'string',
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

export class DescribeRefreshQuotaResponseBody extends $dara.Model {
  refreshCacheQuota?: DescribeRefreshQuotaResponseBodyRefreshCacheQuota;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      refreshCacheQuota: 'RefreshCacheQuota',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshCacheQuota: DescribeRefreshQuotaResponseBodyRefreshCacheQuota,
      requestId: 'string',
    };
  }

  validate() {
    if(this.refreshCacheQuota && typeof (this.refreshCacheQuota as any).validate === 'function') {
      (this.refreshCacheQuota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

