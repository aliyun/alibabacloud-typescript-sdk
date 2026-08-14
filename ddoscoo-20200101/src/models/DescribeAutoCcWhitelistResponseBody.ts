// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoCcWhitelistResponseBodyAutoCcWhitelist extends $dara.Model {
  destIp?: string;
  endTime?: number;
  sourceIp?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      destIp: 'DestIp',
      endTime: 'EndTime',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destIp: 'string',
      endTime: 'number',
      sourceIp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcWhitelistResponseBody extends $dara.Model {
  autoCcWhitelist?: DescribeAutoCcWhitelistResponseBodyAutoCcWhitelist[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoCcWhitelist: 'AutoCcWhitelist',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCcWhitelist: { 'type': 'array', 'itemType': DescribeAutoCcWhitelistResponseBodyAutoCcWhitelist },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.autoCcWhitelist)) {
      $dara.Model.validateArray(this.autoCcWhitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

