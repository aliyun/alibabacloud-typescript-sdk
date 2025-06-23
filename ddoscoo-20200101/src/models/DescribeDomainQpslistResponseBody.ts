// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainQPSListResponseBodyDomainQPSList } from "./DescribeDomainQpslistResponseBodyDomainQpslist";


export class DescribeDomainQPSListResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the statistics on the QPS of the website.
   */
  domainQPSList?: DescribeDomainQPSListResponseBodyDomainQPSList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 327F2ABB-104D-437A-AAB5-D633E29A8C51
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainQPSList: 'DomainQPSList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainQPSList: { 'type': 'array', 'itemType': DescribeDomainQPSListResponseBodyDomainQPSList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainQPSList)) {
      $dara.Model.validateArray(this.domainQPSList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

