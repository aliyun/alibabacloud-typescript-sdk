// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafLogsResponseBodyDomainLogDetailsLogInfos extends $dara.Model {
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
   * demo.aliyundoc.com_2015_05_23_2100_2200.xxxxxx.gz
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
   * The size of the log file. Unit: bytes.
   * 
   * @example
   * 258
   */
  logSize?: number;
  /**
   * @remarks
   * The beginning of the time range during which data was queried.
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

export class DescribeDcdnWafLogsResponseBodyDomainLogDetailsPageInfos extends $dara.Model {
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

export class DescribeDcdnWafLogsResponseBodyDomainLogDetails extends $dara.Model {
  /**
   * @remarks
   * The WAF domain name.
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
   * The log information.
   */
  logInfos?: DescribeDcdnWafLogsResponseBodyDomainLogDetailsLogInfos[];
  /**
   * @remarks
   * The page information.
   */
  pageInfos?: DescribeDcdnWafLogsResponseBodyDomainLogDetailsPageInfos;
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
      logInfos: { 'type': 'array', 'itemType': DescribeDcdnWafLogsResponseBodyDomainLogDetailsLogInfos },
      pageInfos: DescribeDcdnWafLogsResponseBodyDomainLogDetailsPageInfos,
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

export class DescribeDcdnWafLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about logs returned.
   */
  domainLogDetails?: DescribeDcdnWafLogsResponseBodyDomainLogDetails[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0985A362-C81E-5A56-891D-90226BEECA7C
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
      domainLogDetails: { 'type': 'array', 'itemType': DescribeDcdnWafLogsResponseBodyDomainLogDetails },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainLogDetails)) {
      $dara.Model.validateArray(this.domainLogDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

