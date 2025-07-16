// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail extends $dara.Model {
  /**
   * @example
   * 2023-09-23T14:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * demo.aliyundoc.com_2015_05_23_2100_2200.gz
   */
  logName?: string;
  /**
   * @example
   * guide.aliyundoc.com-hangzhou.xxx
   */
  logPath?: string;
  /**
   * @example
   * 258
   */
  logSize?: number;
  /**
   * @example
   * 2023-09-23T13:00:00Z
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

export class DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfos extends $dara.Model {
  logInfoDetail?: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail[];
  static names(): { [key: string]: string } {
    return {
      logInfoDetail: 'LogInfoDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfoDetail: { 'type': 'array', 'itemType': DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail },
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

export class DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailPageInfos extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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

export class DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetail extends $dara.Model {
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 10
   */
  logCount?: number;
  logInfos?: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfos;
  pageInfos?: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailPageInfos;
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
      logInfos: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfos,
      pageInfos: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailPageInfos,
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

export class DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetails extends $dara.Model {
  domainLogDetail?: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetail[];
  static names(): { [key: string]: string } {
    return {
      domainLogDetail: 'DomainLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetail: { 'type': 'array', 'itemType': DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetail },
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

export class DescribeCdnDomainLogsExTtlResponseBody extends $dara.Model {
  domainLogDetails?: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetails;
  /**
   * @example
   * 64D28B53-5902-409B-94F6-FD46680144FE
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
      domainLogDetails: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetails,
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

