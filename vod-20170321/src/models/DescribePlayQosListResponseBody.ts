// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayQosListResponseBodyQosInfoList extends $dara.Model {
  qosFirstFrame?: number;
  qosKbps?: number;
  qosPlay?: number;
  qosPlayFail?: number;
  qosRealPlay?: number;
  qosSecondPlayRate?: number;
  qosSeedFailRate?: number;
  qosSeekDuration?: number;
  qosSlowPlayRate?: number;
  qosStuckDuration100s?: number;
  qosStuckRate?: number;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      qosFirstFrame: 'QosFirstFrame',
      qosKbps: 'QosKbps',
      qosPlay: 'QosPlay',
      qosPlayFail: 'QosPlayFail',
      qosRealPlay: 'QosRealPlay',
      qosSecondPlayRate: 'QosSecondPlayRate',
      qosSeedFailRate: 'QosSeedFailRate',
      qosSeekDuration: 'QosSeekDuration',
      qosSlowPlayRate: 'QosSlowPlayRate',
      qosStuckDuration100s: 'QosStuckDuration100s',
      qosStuckRate: 'QosStuckRate',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosFirstFrame: 'number',
      qosKbps: 'number',
      qosPlay: 'number',
      qosPlayFail: 'number',
      qosRealPlay: 'number',
      qosSecondPlayRate: 'number',
      qosSeedFailRate: 'number',
      qosSeekDuration: 'number',
      qosSlowPlayRate: 'number',
      qosStuckDuration100s: 'number',
      qosStuckRate: 'number',
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

export class DescribePlayQosListResponseBody extends $dara.Model {
  pageNo?: number;
  pageSize?: number;
  qosInfoList?: DescribePlayQosListResponseBodyQosInfoList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qosInfoList: 'QosInfoList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qosInfoList: { 'type': 'array', 'itemType': DescribePlayQosListResponseBodyQosInfoList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qosInfoList)) {
      $dara.Model.validateArray(this.qosInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

