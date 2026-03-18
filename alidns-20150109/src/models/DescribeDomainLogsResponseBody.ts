// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainLogsResponseBodyDomainLogsDomainLog extends $dara.Model {
  action?: string;
  actionTime?: string;
  actionTimestamp?: number;
  clientIp?: string;
  domainName?: string;
  message?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionTime: 'ActionTime',
      actionTimestamp: 'ActionTimestamp',
      clientIp: 'ClientIp',
      domainName: 'DomainName',
      message: 'Message',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionTime: 'string',
      actionTimestamp: 'number',
      clientIp: 'string',
      domainName: 'string',
      message: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainLogsResponseBodyDomainLogs extends $dara.Model {
  domainLog?: DescribeDomainLogsResponseBodyDomainLogsDomainLog[];
  static names(): { [key: string]: string } {
    return {
      domainLog: 'DomainLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLog: { 'type': 'array', 'itemType': DescribeDomainLogsResponseBodyDomainLogsDomainLog },
    };
  }

  validate() {
    if(Array.isArray(this.domainLog)) {
      $dara.Model.validateArray(this.domainLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainLogsResponseBody extends $dara.Model {
  domainLogs?: DescribeDomainLogsResponseBodyDomainLogs;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainLogs: 'DomainLogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogs: DescribeDomainLogsResponseBodyDomainLogs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.domainLogs && typeof (this.domainLogs as any).validate === 'function') {
      (this.domainLogs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

