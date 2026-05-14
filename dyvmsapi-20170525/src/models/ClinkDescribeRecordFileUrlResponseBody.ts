// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkDescribeRecordFileUrlResponseBodyDataAudioFlows extends $dara.Model {
  /**
   * @remarks
   * 节点，1：录音，2：保持，3：静音，4：咨询
   * 
   * @example
   * 1
   */
  node?: number;
  /**
   * @remarks
   * 时间戳，单位：秒
   * 
   * @example
   * 19
   */
  timestamp?: number;
  /**
   * @remarks
   * 类型，0：开始，1：结束
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
      timestamp: 'Timestamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: 'number',
      timestamp: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkDescribeRecordFileUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 录音流程列表。仅当获取 mp3 格式通话录音时返回（不传 recordSide 且 recordType 为 "record" 或未传）。
   */
  audioFlows?: ClinkDescribeRecordFileUrlResponseBodyDataAudioFlows[];
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * 示例值示例值
   */
  clinkRequestId?: string;
  /**
   * @remarks
   * 通话录音地址
   * 
   * @example
   * xxx
   */
  recordFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      audioFlows: 'AudioFlows',
      clinkRequestId: 'ClinkRequestId',
      recordFileUrl: 'RecordFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFlows: { 'type': 'array', 'itemType': ClinkDescribeRecordFileUrlResponseBodyDataAudioFlows },
      clinkRequestId: 'string',
      recordFileUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.audioFlows)) {
      $dara.Model.validateArray(this.audioFlows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkDescribeRecordFileUrlResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkDescribeRecordFileUrlResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 6086693B-2250-17CE-A41F-06259AB6DB1B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ClinkDescribeRecordFileUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

