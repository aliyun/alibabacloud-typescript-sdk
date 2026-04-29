// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryRasrEventResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 机器人对话文本信息
   * 
   * @example
   * 示例值
   */
  botText?: string;
  /**
   * @remarks
   * 坐席工号
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 客户号码
   * 
   * @example
   * 177xxxx1313
   */
  customerNumber?: string;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 1768615738
   */
  endTime?: number;
  /**
   * @remarks
   * 引擎
   * 
   * @example
   * ""
   */
  engine?: string;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * @example
   * 7000002
   */
  enterpriseId?: string;
  /**
   * @remarks
   * 通话唯一标识
   * 
   * @example
   * sip-2-1558615724.87
   */
  mainUniqueId?: string;
  /**
   * @remarks
   * 混音录音文件名
   * 
   * @example
   * sip-2-1558615724.87-54529-mix
   */
  mixRecordFile?: string;
  /**
   * @remarks
   * 1:座席侧（webcall是第二侧），2:客户侧（webcall是第一侧）
   * 
   * @example
   * 2
   */
  monitorSide?: string;
  /**
   * @remarks
   * 机器人侧录音文件名
   * 
   * @example
   * sip-2-1558615724.87-54529-out
   */
  outRecordFile?: string;
  /**
   * @remarks
   * 持续时间
   * 
   * @example
   * 333
   */
  rasrDuration?: string;
  /**
   * @remarks
   * 客户侧录音文件名
   * 
   * @example
   * sip-2-1558615724.87-54529-in
   */
  recordFile?: string;
  /**
   * @remarks
   * 开始时间
   * 
   * @example
   * 96
   */
  startTime?: number;
  /**
   * @remarks
   * 客户对话文本信息
   * 
   * @example
   * 示例值示例值示例值
   */
  text?: string;
  /**
   * @remarks
   * 通话唯一标识
   * 
   * @example
   * sip-2-1480660149.0
   */
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      botText: 'BotText',
      cno: 'Cno',
      customerNumber: 'CustomerNumber',
      endTime: 'EndTime',
      engine: 'Engine',
      enterpriseId: 'EnterpriseId',
      mainUniqueId: 'MainUniqueId',
      mixRecordFile: 'MixRecordFile',
      monitorSide: 'MonitorSide',
      outRecordFile: 'OutRecordFile',
      rasrDuration: 'RasrDuration',
      recordFile: 'RecordFile',
      startTime: 'StartTime',
      text: 'Text',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botText: 'string',
      cno: 'string',
      customerNumber: 'string',
      endTime: 'number',
      engine: 'string',
      enterpriseId: 'string',
      mainUniqueId: 'string',
      mixRecordFile: 'string',
      monitorSide: 'string',
      outRecordFile: 'string',
      rasrDuration: 'string',
      recordFile: 'string',
      startTime: 'number',
      text: 'string',
      uniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudQueryRasrEventResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 返回数据
   */
  list?: CloudQueryRasrEventResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudQueryRasrEventResponseBodyDataList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudQueryRasrEventResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudQueryRasrEventResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
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
      data: CloudQueryRasrEventResponseBodyData,
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

