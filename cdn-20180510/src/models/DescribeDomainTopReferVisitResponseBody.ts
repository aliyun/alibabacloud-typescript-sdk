// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainTopReferVisitResponseBodyTopReferList } from "./DescribeDomainTopReferVisitResponseBodyTopReferList";


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

