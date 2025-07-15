// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail extends $dara.Model {
  /**
   * @remarks
   * The end of the time range for which the logs were queried.
   * 
   * @example
   * 2016-10-20T05:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the log file.
   * 
   * @example
   * developer.aliyundoc.com_2016_10_20_040000_050000.gz
   */
  logName?: string;
  /**
   * @remarks
   * The path of the log file.
   * 
   * @example
   * learn.aliyundoc.com/developer.aliyundoc.com/2016_10_20/example.aliyundoc.com_2016_10_20_040000_050000.gz?Expires=1522659931&amp;OSSAccessKeyId=LTAI******eo4ZEuA&amp;Signature=C01p%2BtA%******KP9Sru2Oxwy7Do0%3D
   */
  logPath?: string;
  /**
   * @remarks
   * The size of the log file.
   * 
   * @example
   * 10
   */
  logSize?: number;
  /**
   * @remarks
   * The beginning of the time range for which the logs were queried.
   * 
   * @example
   * 2016-10-20T04:00:00Z
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

export class DescribeLiveDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos extends $dara.Model {
  logInfoDetail?: DescribeLiveDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail[];
  static names(): { [key: string]: string } {
    return {
      logInfoDetail: 'LogInfoDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfoDetail: { 'type': 'array', 'itemType': DescribeLiveDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail },
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

export class DescribeLiveDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos extends $dara.Model {
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

export class DescribeLiveDomainLogResponseBodyDomainLogDetailsDomainLogDetail extends $dara.Model {
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
   * Details about the logs.
   */
  logInfos?: DescribeLiveDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos;
  /**
   * @remarks
   * The page information.
   */
  pageInfos?: DescribeLiveDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos;
  static names(): { [key: string]: string } {
    return {
      logCount: 'LogCount',
      logInfos: 'LogInfos',
      pageInfos: 'PageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logCount: 'number',
      logInfos: DescribeLiveDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos,
      pageInfos: DescribeLiveDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos,
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

export class DescribeLiveDomainLogResponseBodyDomainLogDetails extends $dara.Model {
  domainLogDetail?: DescribeLiveDomainLogResponseBodyDomainLogDetailsDomainLogDetail[];
  static names(): { [key: string]: string } {
    return {
      domainLogDetail: 'DomainLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetail: { 'type': 'array', 'itemType': DescribeLiveDomainLogResponseBodyDomainLogDetailsDomainLogDetail },
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

export class DescribeLiveDomainLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log information.
   */
  domainLogDetails?: DescribeLiveDomainLogResponseBodyDomainLogDetails;
  /**
   * @remarks
   * The streaming domain or ingest domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
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
      domainName: 'DomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetails: DescribeLiveDomainLogResponseBodyDomainLogDetails,
      domainName: 'string',
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

