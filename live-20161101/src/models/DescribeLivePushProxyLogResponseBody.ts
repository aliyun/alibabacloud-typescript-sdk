// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePushProxyLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * The value is a UNIX timestamp.
   * 
   * @example
   * 1695189600
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the log file.
   * 
   * @example
   * example.com
   * _2023_09_20_160000_170000.****.gz
   */
  logName?: string;
  /**
   * @remarks
   * The path of the log file.
   */
  logPath?: string;
  /**
   * @remarks
   * The size of the log file.
   * 
   * @example
   * 512
   */
  logSize?: number;
  /**
   * @remarks
   * The beginning of the time range during which data was queried.
   * 
   * The value is a UNIX timestamp.
   * 
   * @example
   * 1695193200
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

export class DescribeLivePushProxyLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos extends $dara.Model {
  logInfoDetail?: DescribeLivePushProxyLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail[];
  static names(): { [key: string]: string } {
    return {
      logInfoDetail: 'LogInfoDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfoDetail: { 'type': 'array', 'itemType': DescribeLivePushProxyLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail },
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

export class DescribeLivePushProxyLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
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

export class DescribeLivePushProxyLogResponseBodyDomainLogDetailsDomainLogDetail extends $dara.Model {
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
  logInfos?: DescribeLivePushProxyLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos;
  /**
   * @remarks
   * The page information.
   */
  pageInfos?: DescribeLivePushProxyLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos;
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
      logInfos: DescribeLivePushProxyLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos,
      pageInfos: DescribeLivePushProxyLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos,
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

export class DescribeLivePushProxyLogResponseBodyDomainLogDetails extends $dara.Model {
  domainLogDetail?: DescribeLivePushProxyLogResponseBodyDomainLogDetailsDomainLogDetail[];
  static names(): { [key: string]: string } {
    return {
      domainLogDetail: 'DomainLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetail: { 'type': 'array', 'itemType': DescribeLivePushProxyLogResponseBodyDomainLogDetailsDomainLogDetail },
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

export class DescribeLivePushProxyLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log information.
   */
  domainLogDetails?: DescribeLivePushProxyLogResponseBodyDomainLogDetails;
  /**
   * @remarks
   * Push domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * CF60DB6A-7FD6-426E-9288-122CC1A52FA7
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
      domainLogDetails: DescribeLivePushProxyLogResponseBodyDomainLogDetails,
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

