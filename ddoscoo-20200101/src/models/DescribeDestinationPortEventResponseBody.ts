// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDestinationPortEventResponseBodyPortList extends $dara.Model {
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 80
   */
  dstPort?: string;
  /**
   * @remarks
   * The number of request packets received by the destination port.
   * 
   * @example
   * 8760950
   */
  inPkts?: number;
  static names(): { [key: string]: string } {
    return {
      dstPort: 'DstPort',
      inPkts: 'InPkts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPort: 'string',
      inPkts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

