// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlListUrlList extends $dara.Model {
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
   * The complete URL.
   * 
   * @example
   * http://example.com/nn_live/nn_x64/a0.m3u8
   */
  urlDetail?: string;
  /**
   * @remarks
   * The number of visits.
   * 
   * @example
   * 161673
   */
  visitData?: string;
  /**
   * @remarks
   * The proportion of visits.
   * 
   * @example
   * 0.35
   */
  visitProportion?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      flowProportion: 'FlowProportion',
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      flowProportion: 'number',
      urlDetail: 'string',
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

export class DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlList extends $dara.Model {
  urlList?: DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlListUrlList },
    };
  }

  validate() {
    if(Array.isArray(this.urlList)) {
      $dara.Model.validateArray(this.urlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl200ListUrlList extends $dara.Model {
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
   * The complete URL.
   * 
   * @example
   * http://example.com/nn_live/nn_x64/a0.m3u8
   */
  urlDetail?: string;
  /**
   * @remarks
   * The number of visits.
   * 
   * @example
   * 161673
   */
  visitData?: string;
  /**
   * @remarks
   * The proportion of visits.
   * 
   * @example
   * 0.35
   */
  visitProportion?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      flowProportion: 'FlowProportion',
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      flowProportion: 'number',
      urlDetail: 'string',
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

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl200List extends $dara.Model {
  urlList?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl200ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopUrlVisitResponseBodyUrl200ListUrlList },
    };
  }

  validate() {
    if(Array.isArray(this.urlList)) {
      $dara.Model.validateArray(this.urlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl300ListUrlList extends $dara.Model {
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
   * The complete URL.
   * 
   * @example
   * http://example.com/nn_live/nn_x64/a0.m3u8
   */
  urlDetail?: string;
  /**
   * @remarks
   * The number of visits.
   * 
   * @example
   * 161673
   */
  visitData?: string;
  /**
   * @remarks
   * The proportion of visits.
   * 
   * @example
   * 0.35
   */
  visitProportion?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      flowProportion: 'FlowProportion',
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      flowProportion: 'number',
      urlDetail: 'string',
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

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl300List extends $dara.Model {
  urlList?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl300ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopUrlVisitResponseBodyUrl300ListUrlList },
    };
  }

  validate() {
    if(Array.isArray(this.urlList)) {
      $dara.Model.validateArray(this.urlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl400ListUrlList extends $dara.Model {
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
   * The complete URL.
   * 
   * @example
   * http://example.com/nn_live/nn_x64/a0.m3u8
   */
  urlDetail?: string;
  /**
   * @remarks
   * The number of visits.
   * 
   * @example
   * 161673
   */
  visitData?: string;
  /**
   * @remarks
   * The proportion of visits.
   * 
   * @example
   * 0.35
   */
  visitProportion?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      flowProportion: 'FlowProportion',
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      flowProportion: 'number',
      urlDetail: 'string',
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

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl400List extends $dara.Model {
  urlList?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl400ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopUrlVisitResponseBodyUrl400ListUrlList },
    };
  }

  validate() {
    if(Array.isArray(this.urlList)) {
      $dara.Model.validateArray(this.urlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl500ListUrlList extends $dara.Model {
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
   * The complete URL.
   * 
   * @example
   * http://example.com/nn_live/nn_x64/a0.m3u8
   */
  urlDetail?: string;
  /**
   * @remarks
   * The number of visits.
   * 
   * @example
   * 161673
   */
  visitData?: string;
  /**
   * @remarks
   * The proportion of visits.
   * 
   * @example
   * 0.35
   */
  visitProportion?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      flowProportion: 'FlowProportion',
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      flowProportion: 'number',
      urlDetail: 'string',
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

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl500List extends $dara.Model {
  urlList?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl500ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopUrlVisitResponseBodyUrl500ListUrlList },
    };
  }

  validate() {
    if(Array.isArray(this.urlList)) {
      $dara.Model.validateArray(this.urlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of frequently requested URLs.
   */
  allUrlList?: DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlList;
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
   * 64D28B53-5902-409B-94F6-FD46680144FE
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
   * A list of URLs for which 2xx status codes were returned.
   */
  url200List?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl200List;
  /**
   * @remarks
   * A list of URLs for which 3xx status codes were returned.
   */
  url300List?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl300List;
  /**
   * @remarks
   * A list of URLs for which 4xx status codes were returned.
   */
  url400List?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl400List;
  /**
   * @remarks
   * A list of URLs for which 5xx status codes were returned.
   */
  url500List?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl500List;
  static names(): { [key: string]: string } {
    return {
      allUrlList: 'AllUrlList',
      domainName: 'DomainName',
      requestId: 'RequestId',
      startTime: 'StartTime',
      url200List: 'Url200List',
      url300List: 'Url300List',
      url400List: 'Url400List',
      url500List: 'Url500List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allUrlList: DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlList,
      domainName: 'string',
      requestId: 'string',
      startTime: 'string',
      url200List: DescribeDcdnDomainTopUrlVisitResponseBodyUrl200List,
      url300List: DescribeDcdnDomainTopUrlVisitResponseBodyUrl300List,
      url400List: DescribeDcdnDomainTopUrlVisitResponseBodyUrl400List,
      url500List: DescribeDcdnDomainTopUrlVisitResponseBodyUrl500List,
    };
  }

  validate() {
    if(this.allUrlList && typeof (this.allUrlList as any).validate === 'function') {
      (this.allUrlList as any).validate();
    }
    if(this.url200List && typeof (this.url200List as any).validate === 'function') {
      (this.url200List as any).validate();
    }
    if(this.url300List && typeof (this.url300List as any).validate === 'function') {
      (this.url300List as any).validate();
    }
    if(this.url400List && typeof (this.url400List as any).validate === 'function') {
      (this.url400List as any).validate();
    }
    if(this.url500List && typeof (this.url500List as any).validate === 'function') {
      (this.url500List as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

