// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudGetAsrResponseBodyDataRecordFileText1InResult extends $dara.Model {
  /**
   * @remarks
   * 开始时间
   * 
   * @example
   * 30140
   */
  beginTime?: number;
  /**
   * @remarks
   * 通道id
   * 
   * @example
   * 0
   */
  channelId?: number;
  /**
   * @remarks
   * 情感值
   * 
   * @example
   * 6.0
   */
  emotionValue?: number;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 31805
   */
  endTime?: number;
  /**
   * @remarks
   * 沉默时间
   * 
   * @example
   * 1
   */
  silenceDuration?: number;
  /**
   * @remarks
   * 语速
   * 
   * @example
   * 108
   */
  speechRate?: number;
  /**
   * @remarks
   * 转写文本
   * 
   * @example
   * 示例值示例值
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      channelId: 'ChannelId',
      emotionValue: 'EmotionValue',
      endTime: 'EndTime',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      channelId: 'number',
      emotionValue: 'number',
      endTime: 'number',
      silenceDuration: 'number',
      speechRate: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetAsrResponseBodyDataRecordFileText1In extends $dara.Model {
  /**
   * @example
   * 33340
   */
  bizDuration?: number;
  /**
   * @remarks
   * 错误信息
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 8f2ff56a7cfe458c942595b2f271d715
   */
  id?: string;
  /**
   * @remarks
   * 转写结果
   */
  result?: CloudGetAsrResponseBodyDataRecordFileText1InResult[];
  /**
   * @remarks
   * 状态
   * 
   * @example
   * 示例值示例值
   */
  status?: string;
  /**
   * @remarks
   * 状态码
   * 
   * @example
   * SUCCEED
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      bizDuration: 'BizDuration',
      errorMessage: 'ErrorMessage',
      id: 'Id',
      result: 'Result',
      status: 'Status',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDuration: 'number',
      errorMessage: 'string',
      id: 'string',
      result: { 'type': 'array', 'itemType': CloudGetAsrResponseBodyDataRecordFileText1InResult },
      status: 'string',
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetAsrResponseBodyDataRecordFileText1OutResult extends $dara.Model {
  /**
   * @remarks
   * 开始时间
   * 
   * @example
   * 30550
   */
  beginTime?: number;
  /**
   * @remarks
   * 通道id
   * 
   * @example
   * 0
   */
  channelId?: number;
  /**
   * @remarks
   * 情感值
   * 
   * @example
   * 6.0
   */
  emotionValue?: number;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 31515
   */
  endTime?: number;
  /**
   * @remarks
   * 沉默时间
   * 
   * @example
   * 0
   */
  silenceDuration?: number;
  /**
   * @remarks
   * 语速
   * 
   * @example
   * 186
   */
  speechRate?: number;
  /**
   * @remarks
   * 转写文本
   * 
   * @example
   * 示例值示例值示例值
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      channelId: 'ChannelId',
      emotionValue: 'EmotionValue',
      endTime: 'EndTime',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      channelId: 'number',
      emotionValue: 'number',
      endTime: 'number',
      silenceDuration: 'number',
      speechRate: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetAsrResponseBodyDataRecordFileText1Out extends $dara.Model {
  /**
   * @example
   * 33340
   */
  bizDuration?: number;
  /**
   * @remarks
   * 错误信息
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 145a13227e3249258cd3b5232a56d634
   */
  id?: string;
  /**
   * @remarks
   * 转写结果
   */
  result?: CloudGetAsrResponseBodyDataRecordFileText1OutResult[];
  /**
   * @remarks
   * 状态
   * 
   * @example
   * SUCCEED
   */
  status?: string;
  /**
   * @remarks
   * 状态码
   * 
   * @example
   * 0
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      bizDuration: 'BizDuration',
      errorMessage: 'ErrorMessage',
      id: 'Id',
      result: 'Result',
      status: 'Status',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDuration: 'number',
      errorMessage: 'string',
      id: 'string',
      result: { 'type': 'array', 'itemType': CloudGetAsrResponseBodyDataRecordFileText1OutResult },
      status: 'string',
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetAsrResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * 开始时间
   * 
   * @example
   * 4350
   */
  beginTime?: number;
  /**
   * @remarks
   * 通道id
   * 
   * @example
   * 32
   */
  channelId?: number;
  /**
   * @remarks
   * 情感值
   * 
   * @example
   * 7.0
   */
  emotionValue?: number;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 10445
   */
  endTime?: number;
  /**
   * @remarks
   * 语音文本所属方；in: 第一侧；out: 第二侧
   * 
   * @example
   * out
   */
  side?: string;
  /**
   * @remarks
   * 沉默时间
   * 
   * @example
   * 0
   */
  silenceDuration?: number;
  /**
   * @remarks
   * 语速
   * 
   * @example
   * 255
   */
  speechRate?: number;
  /**
   * @remarks
   * 转写文本
   * 
   * @example
   * 示例值示例值
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      channelId: 'ChannelId',
      emotionValue: 'EmotionValue',
      endTime: 'EndTime',
      side: 'Side',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      channelId: 'number',
      emotionValue: 'number',
      endTime: 'number',
      side: 'string',
      silenceDuration: 'number',
      speechRate: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetAsrResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 企业编号
   * 
   * @example
   * 7000002
   */
  enterpriseId?: string;
  /**
   * @remarks
   * 转写类型 1：混音 2：分轨
   * 
   * @example
   * 1
   */
  monitorType?: string;
  /**
   * @remarks
   * 转写文件个数
   * 
   * @example
   * 1
   */
  recordFileCount?: string;
  /**
   * @remarks
   * 第一侧转写文本结果
   */
  recordFileText1In?: CloudGetAsrResponseBodyDataRecordFileText1In;
  /**
   * @remarks
   * 第二侧转写文本结果
   */
  recordFileText1Out?: CloudGetAsrResponseBodyDataRecordFileText1Out;
  /**
   * @remarks
   * 转写结果, 当all=true时返回
   */
  result?: CloudGetAsrResponseBodyDataResult[];
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'EnterpriseId',
      monitorType: 'MonitorType',
      recordFileCount: 'RecordFileCount',
      recordFileText1In: 'RecordFileText1In',
      recordFileText1Out: 'RecordFileText1Out',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'string',
      monitorType: 'string',
      recordFileCount: 'string',
      recordFileText1In: CloudGetAsrResponseBodyDataRecordFileText1In,
      recordFileText1Out: CloudGetAsrResponseBodyDataRecordFileText1Out,
      result: { 'type': 'array', 'itemType': CloudGetAsrResponseBodyDataResult },
    };
  }

  validate() {
    if(this.recordFileText1In && typeof (this.recordFileText1In as any).validate === 'function') {
      (this.recordFileText1In as any).validate();
    }
    if(this.recordFileText1Out && typeof (this.recordFileText1Out as any).validate === 'function') {
      (this.recordFileText1Out as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetAsrResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudGetAsrResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
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
      data: CloudGetAsrResponseBodyData,
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

