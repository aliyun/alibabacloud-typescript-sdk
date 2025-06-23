// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainStatusCodeListResponseBodyStatusCodeList } from "./DescribeDomainStatusCodeListResponseBodyStatusCodeList";


export class DescribeDomainStatusCodeListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3B63C0DD-8AC5-44B2-95D6-064CA9296B9C
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics on response status codes.
   */
  statusCodeList?: DescribeDomainStatusCodeListResponseBodyStatusCodeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusCodeList: 'StatusCodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusCodeList: { 'type': 'array', 'itemType': DescribeDomainStatusCodeListResponseBodyStatusCodeList },
    };
  }

  validate() {
    if(Array.isArray(this.statusCodeList)) {
      $dara.Model.validateArray(this.statusCodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

