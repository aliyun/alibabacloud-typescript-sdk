// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnWafDomainResponseBodyOutPutDomains } from "./DescribeCdnWafDomainResponseBodyOutPutDomains";


export class DescribeCdnWafDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the accelerated domain name.
   */
  outPutDomains?: DescribeCdnWafDomainResponseBodyOutPutDomains[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CB1A380B-09F0-41BB-802B-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The number of accelerated domain names.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      outPutDomains: 'OutPutDomains',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outPutDomains: { 'type': 'array', 'itemType': DescribeCdnWafDomainResponseBodyOutPutDomains },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.outPutDomains)) {
      $dara.Model.validateArray(this.outPutDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

