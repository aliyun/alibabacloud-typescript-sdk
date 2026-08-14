// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoCcBlacklistResponseBodyAutoCcBlacklist extends $dara.Model {
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

export class DescribeAutoCcBlacklistResponseBody extends $dara.Model {
  autoCcBlacklist?: DescribeAutoCcBlacklistResponseBodyAutoCcBlacklist[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoCcBlacklist: 'AutoCcBlacklist',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCcBlacklist: { 'type': 'array', 'itemType': DescribeAutoCcBlacklistResponseBodyAutoCcBlacklist },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.autoCcBlacklist)) {
      $dara.Model.validateArray(this.autoCcBlacklist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

