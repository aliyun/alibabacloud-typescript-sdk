// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteLogsResponseBodySiteLogDetailsLogInfos extends $dara.Model {
  /**
   * @example
   * 2022-11-06T17:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * example.com_2022_11_07_000000_020000.gz.xxxxxx
   */
  logName?: string;
  /**
   * @example
   * example.aliyundoc.com /v1.l1cache/105252530/example.com/2022_11_07/example.com_2022_11_07_000000_020000.gz.xxxxxx?Expires=1636963354&OSSAccessKeyId=LTAIviCc6zy8****&Signature=u0V6foRfZniHE8i%2BHUdxGOhZsK****
   */
  logPath?: string;
  /**
   * @example
   * 438304768
   */
  logSize?: number;
  /**
   * @example
   * 2022-11-06T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      logName: 'LogName',
      logPath: 'LogPath',
      logSize: 'LogSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      logName: 'string',
      logPath: 'string',
      logSize: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteLogsResponseBodySiteLogDetailsPageInfos extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 47
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteLogsResponseBodySiteLogDetails extends $dara.Model {
  /**
   * @example
   * 300
   */
  logCount?: number;
  logInfos?: DescribeSiteLogsResponseBodySiteLogDetailsLogInfos[];
  pageInfos?: DescribeSiteLogsResponseBodySiteLogDetailsPageInfos;
  /**
   * @example
   * 123456***
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      logCount: 'LogCount',
      logInfos: 'LogInfos',
      pageInfos: 'PageInfos',
      siteId: 'SiteId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logCount: 'number',
      logInfos: { 'type': 'array', 'itemType': DescribeSiteLogsResponseBodySiteLogDetailsLogInfos },
      pageInfos: DescribeSiteLogsResponseBodySiteLogDetailsPageInfos,
      siteId: 'number',
      siteName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logInfos)) {
      $dara.Model.validateArray(this.logInfos);
    }
    if(this.pageInfos && typeof (this.pageInfos as any).validate === 'function') {
      (this.pageInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  siteLogDetails?: DescribeSiteLogsResponseBodySiteLogDetails[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      siteLogDetails: 'SiteLogDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      siteLogDetails: { 'type': 'array', 'itemType': DescribeSiteLogsResponseBodySiteLogDetails },
    };
  }

  validate() {
    if(Array.isArray(this.siteLogDetails)) {
      $dara.Model.validateArray(this.siteLogDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

