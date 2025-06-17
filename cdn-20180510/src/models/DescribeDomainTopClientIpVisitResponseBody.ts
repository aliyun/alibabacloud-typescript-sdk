// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainTopClientIpVisitResponseBodyClientIpList } from "./DescribeDomainTopClientIpVisitResponseBodyClientIpList";


export class DescribeDomainTopClientIpVisitResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of client IP addresses.
   */
  clientIpList?: DescribeDomainTopClientIpVisitResponseBodyClientIpList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 64D28B53-5902-409B-94F6-FD46680144FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIpList: 'ClientIpList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIpList: { 'type': 'array', 'itemType': DescribeDomainTopClientIpVisitResponseBodyClientIpList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clientIpList)) {
      $dara.Model.validateArray(this.clientIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

