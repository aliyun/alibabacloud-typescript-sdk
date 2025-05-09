// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOutgoingDomainResponseBodyDomainList } from "./DescribeOutgoingDomainResponseBodyDomainList";


export class DescribeOutgoingDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names in outbound connections.
   */
  domainList?: DescribeOutgoingDomainResponseBodyDomainList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the domain names in outbound connections.
   * 
   * @example
   * 132
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainList: 'DomainList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainList: { 'type': 'array', 'itemType': DescribeOutgoingDomainResponseBodyDomainList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domainList)) {
      $dara.Model.validateArray(this.domainList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

