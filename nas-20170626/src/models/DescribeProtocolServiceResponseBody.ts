// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProtocolServiceResponseBodyProtocolServices } from "./DescribeProtocolServiceResponseBodyProtocolServices";


export class DescribeProtocolServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * aBcdeg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about protocol services.
   */
  protocolServices?: DescribeProtocolServiceResponseBodyProtocolServices[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      protocolServices: 'ProtocolServices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      protocolServices: { 'type': 'array', 'itemType': DescribeProtocolServiceResponseBodyProtocolServices },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.protocolServices)) {
      $dara.Model.validateArray(this.protocolServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

