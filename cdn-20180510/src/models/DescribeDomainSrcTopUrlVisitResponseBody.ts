// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainSrcTopUrlVisitResponseBodyAllUrlList } from "./DescribeDomainSrcTopUrlVisitResponseBodyAllUrlList";
import { DescribeDomainSrcTopUrlVisitResponseBodyUrl200List } from "./DescribeDomainSrcTopUrlVisitResponseBodyUrl200list";
import { DescribeDomainSrcTopUrlVisitResponseBodyUrl300List } from "./DescribeDomainSrcTopUrlVisitResponseBodyUrl300list";
import { DescribeDomainSrcTopUrlVisitResponseBodyUrl400List } from "./DescribeDomainSrcTopUrlVisitResponseBodyUrl400list";
import { DescribeDomainSrcTopUrlVisitResponseBodyUrl500List } from "./DescribeDomainSrcTopUrlVisitResponseBodyUrl500list";


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

