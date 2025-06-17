// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainTopUrlVisitResponseBodyAllUrlList } from "./DescribeDomainTopUrlVisitResponseBodyAllUrlList";
import { DescribeDomainTopUrlVisitResponseBodyUrl200List } from "./DescribeDomainTopUrlVisitResponseBodyUrl200list";
import { DescribeDomainTopUrlVisitResponseBodyUrl300List } from "./DescribeDomainTopUrlVisitResponseBodyUrl300list";
import { DescribeDomainTopUrlVisitResponseBodyUrl400List } from "./DescribeDomainTopUrlVisitResponseBodyUrl400list";
import { DescribeDomainTopUrlVisitResponseBodyUrl500List } from "./DescribeDomainTopUrlVisitResponseBodyUrl500list";


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

