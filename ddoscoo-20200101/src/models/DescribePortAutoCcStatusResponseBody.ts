// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePortAutoCcStatusResponseBodyPortAutoCcStatus } from "./DescribePortAutoCcStatusResponseBodyPortAutoCcStatus";


export class DescribePortAutoCcStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the configurations of the Intelligent Protection policy.
   */
  portAutoCcStatus?: DescribePortAutoCcStatusResponseBodyPortAutoCcStatus[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BC3C6403-F248-4125-B2C9-8733ED94EA85
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      portAutoCcStatus: 'PortAutoCcStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portAutoCcStatus: { 'type': 'array', 'itemType': DescribePortAutoCcStatusResponseBodyPortAutoCcStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portAutoCcStatus)) {
      $dara.Model.validateArray(this.portAutoCcStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

