// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteLogsResponseBodySiteLogDetailsLogInfos extends $dara.Model {
  endTime?: string;
  logName?: string;
  logPath?: string;
  logSize?: number;
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
  pageIndex?: number;
  pageSize?: number;
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
  logCount?: number;
  logInfos?: DescribeSiteLogsResponseBodySiteLogDetailsLogInfos[];
  pageInfos?: DescribeSiteLogsResponseBodySiteLogDetailsPageInfos;
  siteId?: number;
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

