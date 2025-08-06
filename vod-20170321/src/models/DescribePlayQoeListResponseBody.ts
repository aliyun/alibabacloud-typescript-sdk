// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayQoeListResponseBodyQoeInfoList extends $dara.Model {
  qoeFinishedVV?: number;
  qoeFinishedVVRate?: number;
  qoeJumpRate5s?: number;
  qoeUFinishedVVTime?: number;
  qoeUV?: number;
  qoeUVVDuration?: number;
  qoeUVVTime?: number;
  qoeVDuration?: number;
  qoeVVDuration?: number;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      qoeFinishedVV: 'QoeFinishedVV',
      qoeFinishedVVRate: 'QoeFinishedVVRate',
      qoeJumpRate5s: 'QoeJumpRate5s',
      qoeUFinishedVVTime: 'QoeUFinishedVVTime',
      qoeUV: 'QoeUV',
      qoeUVVDuration: 'QoeUVVDuration',
      qoeUVVTime: 'QoeUVVTime',
      qoeVDuration: 'QoeVDuration',
      qoeVVDuration: 'QoeVVDuration',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qoeFinishedVV: 'number',
      qoeFinishedVVRate: 'number',
      qoeJumpRate5s: 'number',
      qoeUFinishedVVTime: 'number',
      qoeUV: 'number',
      qoeUVVDuration: 'number',
      qoeUVVTime: 'number',
      qoeVDuration: 'number',
      qoeVVDuration: 'number',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayQoeListResponseBody extends $dara.Model {
  pageNo?: number;
  pageSize?: number;
  qoeInfoList?: DescribePlayQoeListResponseBodyQoeInfoList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qoeInfoList: 'QoeInfoList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qoeInfoList: { 'type': 'array', 'itemType': DescribePlayQoeListResponseBodyQoeInfoList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qoeInfoList)) {
      $dara.Model.validateArray(this.qoeInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

