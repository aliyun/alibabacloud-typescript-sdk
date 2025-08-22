// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainTopReferVisitResponseBodyTopReferListReferList extends $dara.Model {
  /**
   * @remarks
   * The amount of network traffic. (Unit: bytes)
   * 
   * @example
   * 460486880
   */
  flow?: string;
  /**
   * @remarks
   * The proportion of network traffic consumed to access the URL.
   * 
   * @example
   * 0.35
   */
  flowProportion?: number;
  /**
   * @remarks
   * The complete referenced URL.
   * 
   * @example
   * 192.168.0.1
   */
  referDetail?: string;
  /**
   * @remarks
   * The number of visits.
   * 
   * @example
   * 229567
   */
  visitData?: string;
  /**
   * @remarks
   * The proportion of visits to the URL.
   * 
   * @example
   * 0.35
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

export class DescribeDcdnDomainTopReferVisitResponseBodyTopReferList extends $dara.Model {
  referList?: DescribeDcdnDomainTopReferVisitResponseBodyTopReferListReferList[];
  static names(): { [key: string]: string } {
    return {
      referList: 'ReferList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopReferVisitResponseBodyTopReferListReferList },
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

export class DescribeDcdnDomainTopReferVisitResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * 95994621-8382-464B-8762-C708E73568D1
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2018-10-03T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The list of frequently referenced URLs returned.
   */
  topReferList?: DescribeDcdnDomainTopReferVisitResponseBodyTopReferList;
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
      topReferList: DescribeDcdnDomainTopReferVisitResponseBodyTopReferList,
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

