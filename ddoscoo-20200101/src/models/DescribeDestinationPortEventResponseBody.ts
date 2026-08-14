// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDestinationPortEventResponseBodyPortList extends $dara.Model {
  dstPort?: string;
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
  portList?: DescribeDestinationPortEventResponseBodyPortList[];
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

