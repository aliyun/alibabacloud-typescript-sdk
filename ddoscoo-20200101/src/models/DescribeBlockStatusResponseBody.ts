// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBlockStatusResponseBodyStatusListBlockStatusList extends $dara.Model {
  blockStatus?: string;
  endTime?: number;
  line?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      blockStatus: 'BlockStatus',
      endTime: 'EndTime',
      line: 'Line',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockStatus: 'string',
      endTime: 'number',
      line: 'string',
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

export class DescribeBlockStatusResponseBodyStatusList extends $dara.Model {
  blockStatusList?: DescribeBlockStatusResponseBodyStatusListBlockStatusList[];
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      blockStatusList: 'BlockStatusList',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockStatusList: { 'type': 'array', 'itemType': DescribeBlockStatusResponseBodyStatusListBlockStatusList },
      ip: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.blockStatusList)) {
      $dara.Model.validateArray(this.blockStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockStatusResponseBody extends $dara.Model {
  requestId?: string;
  statusList?: DescribeBlockStatusResponseBodyStatusList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusList: { 'type': 'array', 'itemType': DescribeBlockStatusResponseBodyStatusList },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

