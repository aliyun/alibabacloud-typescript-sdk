// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopUrlVisitResponseBodyAllUrlListUrlList extends $dara.Model {
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

export class DescribeDomainTopUrlVisitResponseBodyAllUrlList extends $dara.Model {
  urlList?: DescribeDomainTopUrlVisitResponseBodyAllUrlListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyAllUrlListUrlList },
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

export class DescribeDomainTopUrlVisitResponseBodyUrl200ListUrlList extends $dara.Model {
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
   * http://example.com/nn_live/nn_x64/aWQ9SE5KU0bGxfcGNfbGl2ZQ,,/HNJSMPP360.m3u8
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

export class DescribeDomainTopUrlVisitResponseBodyUrl200List extends $dara.Model {
  urlList?: DescribeDomainTopUrlVisitResponseBodyUrl200ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyUrl200ListUrlList },
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

export class DescribeDomainTopUrlVisitResponseBodyUrl300ListUrlList extends $dara.Model {
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

export class DescribeDomainTopUrlVisitResponseBodyUrl300List extends $dara.Model {
  urlList?: DescribeDomainTopUrlVisitResponseBodyUrl300ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyUrl300ListUrlList },
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

export class DescribeDomainTopUrlVisitResponseBodyUrl400ListUrlList extends $dara.Model {
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
   * http://example.com/nn_live/nn_x64/aWQ9SE5KU01QUhbGxfcGNfbGl2ZQ,,/HNJSMPP360.m3u8
   */
  urlDetail?: string;
  /**
   * @remarks
   * The number of visits to the URL.
   * 
   * @example
   * 1884
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

export class DescribeDomainTopUrlVisitResponseBodyUrl400List extends $dara.Model {
  urlList?: DescribeDomainTopUrlVisitResponseBodyUrl400ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyUrl400ListUrlList },
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

export class DescribeDomainTopUrlVisitResponseBodyUrl500ListUrlList extends $dara.Model {
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
   * http://example.com/nn_live/nn_x64/aWQ9SE5KU0GNfbGl2ZQ,,/HNJSMPP360.m3u8
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

export class DescribeDomainTopUrlVisitResponseBodyUrl500List extends $dara.Model {
  urlList?: DescribeDomainTopUrlVisitResponseBodyUrl500ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyUrl500ListUrlList },
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

export class DescribeDomainTopUrlVisitResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of frequently requested URLs.
   */
  allUrlList?: DescribeDomainTopUrlVisitResponseBodyAllUrlList;
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
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2019-10-03T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * A list of URLs for which 2xx status codes were returned.
   */
  url200List?: DescribeDomainTopUrlVisitResponseBodyUrl200List;
  /**
   * @remarks
   * A list of URLs for which 3xx status codes were returned.
   */
  url300List?: DescribeDomainTopUrlVisitResponseBodyUrl300List;
  /**
   * @remarks
   * A list of URLs for which 4xx status codes were returned.
   */
  url400List?: DescribeDomainTopUrlVisitResponseBodyUrl400List;
  /**
   * @remarks
   * A list of URLs for which 5xx status codes were returned.
   */
  url500List?: DescribeDomainTopUrlVisitResponseBodyUrl500List;
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
      allUrlList: DescribeDomainTopUrlVisitResponseBodyAllUrlList,
      domainName: 'string',
      requestId: 'string',
      startTime: 'string',
      url200List: DescribeDomainTopUrlVisitResponseBodyUrl200List,
      url300List: DescribeDomainTopUrlVisitResponseBodyUrl300List,
      url400List: DescribeDomainTopUrlVisitResponseBodyUrl400List,
      url500List: DescribeDomainTopUrlVisitResponseBodyUrl500List,
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

