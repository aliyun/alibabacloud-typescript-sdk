// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopReferVisitResponseBodyTopReferListReferList extends $dara.Model {
  /**
   * @remarks
   * The amount of network traffic. Unit: bytes.
   * 
   * @example
   * 200
   */
  flow?: string;
  /**
   * @remarks
   * The proportion of network traffic consumed to access the URL.
   * 
   * @example
   * 0.5
   */
  flowProportion?: number;
  /**
   * @remarks
   * The URLs to the most frequently requested web pages.
   * 
   * @example
   * learn.aliyundoc.com
   */
  referDetail?: string;
  /**
   * @remarks
   * The number of visits to the URL.
   * 
   * @example
   * 3
   */
  visitData?: string;
  /**
   * @remarks
   * The proportion of visits to the URL.
   * 
   * @example
   * 0.5
   */
  visitProportion?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      flowProportion: 'FlowProportion',
      referDetail: 'ReferDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      flowProportion: 'number',
      referDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopReferVisitResponseBodyTopReferList extends $dara.Model {
  referList?: DescribeDomainTopReferVisitResponseBodyTopReferListReferList[];
  static names(): { [key: string]: string } {
    return {
      referList: 'ReferList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referList: { 'type': 'array', 'itemType': DescribeDomainTopReferVisitResponseBodyTopReferListReferList },
    };
  }

  validate() {
    if(Array.isArray(this.referList)) {
      $dara.Model.validateArray(this.referList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopReferVisitResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 95994621-8382-464B-8762-C708E73568D1
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range that was queried.
   * 
   * @example
   * 2019-12-21T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The most frequently requested web pages.
   */
  topReferList?: DescribeDomainTopReferVisitResponseBodyTopReferList;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      requestId: 'RequestId',
      startTime: 'StartTime',
      topReferList: 'TopReferList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      requestId: 'string',
      startTime: 'string',
      topReferList: DescribeDomainTopReferVisitResponseBodyTopReferList,
    };
  }

  validate() {
    if(this.topReferList && typeof (this.topReferList as any).validate === 'function') {
      (this.topReferList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

