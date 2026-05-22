// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteLogsResponseBodySiteLogDetailsLogInfos extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2022-11-06T17:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the log file.
   * 
   * @example
   * example.com_2022_11_07_000000_020000.gz.xxxxxx
   */
  logName?: string;
  /**
   * @remarks
   * The log path.
   * 
   * >  Take note of the Expires field (expiration timestamp) in this parameter. If the log download URL expires, you must reobtain the URL.
   * 
   * @example
   * example.aliyundoc.com /v1.l1cache/105252530/example.com/2022_11_07/example.com_2022_11_07_000000_020000.gz.xxxxxx?Expires=1636963354&OSSAccessKeyId=LTAIviCc6zy8****&Signature=u0V6foRfZniHE8i%2BHUdxGOhZsK****
   */
  logPath?: string;
  /**
   * @remarks
   * The size of the log file. Unit: bytes.
   * 
   * @example
   * 438304768
   */
  logSize?: number;
  /**
   * @remarks
   * The create time.
   * 
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
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **300**. Valid values: **1 to 1000**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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
   * @remarks
   * The total number of entries returned on the current page.
   * 
   * @example
   * 300
   */
  logCount?: number;
  /**
   * @remarks
   * The details of the website log files.
   */
  logInfos?: DescribeSiteLogsResponseBodySiteLogDetailsLogInfos[];
  /**
   * @remarks
   * Pagination information.
   */
  pageInfos?: DescribeSiteLogsResponseBodySiteLogDetailsPageInfos;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 123456***
   */
  siteId?: number;
  /**
   * @remarks
   * The website name.
   * 
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
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the website log files.
   */
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

