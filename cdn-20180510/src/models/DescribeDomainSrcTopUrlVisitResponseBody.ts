// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSrcTopUrlVisitResponseBodyAllUrlListUrlList extends $dara.Model {
  /**
   * @remarks
   * The amount of network traffic. Unit: bytes.
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
   * The number of visits to the URL.
   * 
   * @example
   * 161673
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

export class DescribeDomainSrcTopUrlVisitResponseBodyAllUrlList extends $dara.Model {
  urlList?: DescribeDomainSrcTopUrlVisitResponseBodyAllUrlListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyAllUrlListUrlList },
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

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl200ListUrlList extends $dara.Model {
  /**
   * @remarks
   * The amount of network traffic. Unit: bytes.
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
   * The number of visits to the URL.
   * 
   * @example
   * 161673
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

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl200List extends $dara.Model {
  urlList?: DescribeDomainSrcTopUrlVisitResponseBodyUrl200ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl200ListUrlList },
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

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl300ListUrlList extends $dara.Model {
  /**
   * @remarks
   * The amount of network traffic. Unit: bytes.
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
   * The number of visits to the URL.
   * 
   * @example
   * 161673
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

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl300List extends $dara.Model {
  urlList?: DescribeDomainSrcTopUrlVisitResponseBodyUrl300ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl300ListUrlList },
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

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl400ListUrlList extends $dara.Model {
  /**
   * @remarks
   * The amount of network traffic. Unit: bytes.
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
   * The number of visits to the URL.
   * 
   * @example
   * 161673
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

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl400List extends $dara.Model {
  urlList?: DescribeDomainSrcTopUrlVisitResponseBodyUrl400ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl400ListUrlList },
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

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl500ListUrlList extends $dara.Model {
  /**
   * @remarks
   * The amount of network traffic. Unit: bytes.
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
   * The number of visits to the URL.
   * 
   * @example
   * 161673
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

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl500List extends $dara.Model {
  urlList?: DescribeDomainSrcTopUrlVisitResponseBodyUrl500ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl500ListUrlList },
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

export class DescribeDomainSrcTopUrlVisitResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of frequently requested URLs.
   */
  allUrlList?: DescribeDomainSrcTopUrlVisitResponseBodyAllUrlList;
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
   * 64D28B53-5902-409B-94F6-FD46680144FE
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range that was queried.
   * 
   * @example
   * 2018-10-03T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * A list of URLs for which 2xx status codes were returned.
   */
  url200List?: DescribeDomainSrcTopUrlVisitResponseBodyUrl200List;
  /**
   * @remarks
   * A list of URLs for which 3xx status codes were returned.
   */
  url300List?: DescribeDomainSrcTopUrlVisitResponseBodyUrl300List;
  /**
   * @remarks
   * A list of URLs for which 4xx status codes were returned.
   */
  url400List?: DescribeDomainSrcTopUrlVisitResponseBodyUrl400List;
  /**
   * @remarks
   * A list of URLs for which 5xx status codes were returned.
   */
  url500List?: DescribeDomainSrcTopUrlVisitResponseBodyUrl500List;
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
      allUrlList: DescribeDomainSrcTopUrlVisitResponseBodyAllUrlList,
      domainName: 'string',
      requestId: 'string',
      startTime: 'string',
      url200List: DescribeDomainSrcTopUrlVisitResponseBodyUrl200List,
      url300List: DescribeDomainSrcTopUrlVisitResponseBodyUrl300List,
      url400List: DescribeDomainSrcTopUrlVisitResponseBodyUrl400List,
      url500List: DescribeDomainSrcTopUrlVisitResponseBodyUrl500List,
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

