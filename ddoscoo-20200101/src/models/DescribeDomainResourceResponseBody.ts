// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainResourceResponseBodyWebRules } from "./DescribeDomainResourceResponseBodyWebRules";


export class DescribeDomainResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 39499F01-19D9-4EA4-A0E9-C6014BA5CDBE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of forwarding rules.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The configurations of the forwarding rule.
   */
  webRules?: DescribeDomainResourceResponseBodyWebRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      webRules: 'WebRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      webRules: { 'type': 'array', 'itemType': DescribeDomainResourceResponseBodyWebRules },
    };
  }

  validate() {
    if(Array.isArray(this.webRules)) {
      $dara.Model.validateArray(this.webRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

