// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2015-05-23T14:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the log file.
   * 
   * @example
   * demo.aliyundoc.com_2015_05_23_2100_2200.gz
   */
  logName?: string;
  /**
   * @remarks
   * The path of the log file.
   * 
   * @example
   * guide.aliyundoc.com-hangzhou.xxx
   */
  logPath?: string;
  /**
   * @remarks
   * The size of the log file.
   * 
   * @example
   * 258
   */
  logSize?: number;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2015-05-23T13:00:00Z
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

export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos extends $dara.Model {
  logInfoDetail?: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail[];
  static names(): { [key: string]: string } {
    return {
      logInfoDetail: 'LogInfoDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfoDetail: { 'type': 'array', 'itemType': DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail },
    };
  }

  validate() {
    if(Array.isArray(this.logInfoDetail)) {
      $dara.Model.validateArray(this.logInfoDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The total number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  logCount?: number;
  /**
   * @remarks
   * A set of LogInfoDetail data.
   */
  logInfos?: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos;
  /**
   * @remarks
   * A set of PageInfoDetail data.
   */
  pageInfos?: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      logCount: 'LogCount',
      logInfos: 'LogInfos',
      pageInfos: 'PageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      logCount: 'number',
      logInfos: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos,
      pageInfos: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos,
    };
  }

  validate() {
    if(this.logInfos && typeof (this.logInfos as any).validate === 'function') {
      (this.logInfos as any).validate();
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

export class DescribeCdnDomainLogsResponseBodyDomainLogDetails extends $dara.Model {
  domainLogDetail?: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail[];
  static names(): { [key: string]: string } {
    return {
      domainLogDetail: 'DomainLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetail: { 'type': 'array', 'itemType': DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail },
    };
  }

  validate() {
    if(Array.isArray(this.domainLogDetail)) {
      $dara.Model.validateArray(this.domainLogDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A set of DomainLogDetail data.
   */
  domainLogDetails?: DescribeCdnDomainLogsResponseBodyDomainLogDetails;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainLogDetails: 'DomainLogDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetails: DescribeCdnDomainLogsResponseBodyDomainLogDetails,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainLogDetails && typeof (this.domainLogDetails as any).validate === 'function') {
      (this.domainLogDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

