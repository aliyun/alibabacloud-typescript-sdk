// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBlackholeStatusResponseBodyBlackholeStatus } from "./DescribeBlackholeStatusResponseBodyBlackholeStatus";


export class DescribeBlackholeStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the blackhole filtering status of the instance.
   */
  blackholeStatus?: DescribeBlackholeStatusResponseBodyBlackholeStatus[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      blackholeStatus: 'BlackholeStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeStatus: { 'type': 'array', 'itemType': DescribeBlackholeStatusResponseBodyBlackholeStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.blackholeStatus)) {
      $dara.Model.validateArray(this.blackholeStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

