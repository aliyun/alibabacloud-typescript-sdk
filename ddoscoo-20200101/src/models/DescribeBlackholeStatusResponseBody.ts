// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBlackholeStatusResponseBodyBlackholeStatus extends $dara.Model {
  blackStatus?: string;
  endTime?: number;
  ip?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      blackStatus: 'BlackStatus',
      endTime: 'EndTime',
      ip: 'Ip',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackStatus: 'string',
      endTime: 'number',
      ip: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackholeStatusResponseBody extends $dara.Model {
  blackholeStatus?: DescribeBlackholeStatusResponseBodyBlackholeStatus[];
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

