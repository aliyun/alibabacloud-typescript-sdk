// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDestinationPortEventResponseBodyPortList } from "./DescribeDestinationPortEventResponseBodyPortList";


export class DescribeDestinationPortEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ports.
   */
  portList?: DescribeDestinationPortEventResponseBodyPortList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E7F6B2C-03F2-462F-9076-B782CF0DD502
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      portList: 'PortList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portList: { 'type': 'array', 'itemType': DescribeDestinationPortEventResponseBodyPortList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portList)) {
      $dara.Model.validateArray(this.portList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

