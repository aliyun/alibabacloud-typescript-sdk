// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkDescribeCdrObResponseBodyDataCdrOb extends $dara.Model {
  /**
   * @remarks
   * 接通时长
   * 
   * @example
   * 100
   */
  bridgeDuration?: number;
  /**
   * @remarks
   * 接通时间
   * 
   * @example
   * 82
   */
  bridgeTime?: number;
  /**
   * @remarks
   * 通话记录id
   * 
   * @example
   * ba078ace-717c-6666-af41-d4dd5035edd6
   */
  callId?: string;
  /**
   * @remarks
   * 呼叫类型
   * 
   * @example
   * 示例值示例值
   */
  callType?: string;
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * 示例值
   */
  clientName?: string;
  /**
   * @remarks
   * 座席电话
   * 
   * @example
   * xxx
   */
  clientNumber?: string;
  /**
   * @remarks
   * 座席号
   * 
   * @example
   * 2555
   */
  cno?: string;
  /**
   * @remarks
   * 客户城市
   * 
   * @example
   * 示例值
   */
  customerCity?: string;
  /**
   * @remarks
   * 客户号码，带区号
   * 
   * @example
   * xxx
   */
  customerNumber?: string;
  /**
   * @remarks
   * 客户号码加密串
   * 
   * @example
   * xxx
   */
  customerNumberEncrypt?: string;
  /**
   * @remarks
   * 客户省份
   * 
   * @example
   * 示例值示例值
   */
  customerProvince?: string;
  /**
   * @remarks
   * 客户响铃时间
   * 
   * @example
   * 66
   */
  customerRingingTime?: number;
  /**
   * @remarks
   * 挂机方
   * 
   * @example
   * 示例值示例值示例值
   */
  endReason?: string;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 1536892706
   */
  endTime?: number;
  /**
   * @remarks
   * 是否邀评 0: 否 1: 是
   * 
   * @example
   * 0
   */
  evaluation?: number;
  /**
   * @remarks
   * 热线号码
   * 
   * @example
   * xxx
   */
  hotline?: string;
  /**
   * @remarks
   * [满意度记录] #满意度记录
   */
  investigation?: { [key: string]: any };
  /**
   * @remarks
   * ivr名称
   * 
   * @example
   * name1
   */
  ivrName?: string;
  /**
   * @remarks
   * 标记
   * 
   * @example
   * 3
   */
  mark?: number;
  /**
   * @remarks
   * 备注
   * 
   * @example
   * 示例值示例值示例值
   */
  markData?: string;
  /**
   * @remarks
   * 录音文件名
   * 
   * @example
   * xxx
   */
  recordFile?: string;
  /**
   * @remarks
   * 呼叫结果
   * 
   * @example
   * null
   */
  sipCause?: string;
  /**
   * @remarks
   * 开始时间
   * 
   * @example
   * 1536115324
   */
  startTime?: number;
  /**
   * @remarks
   * 接听状态
   * 
   * @example
   * 示例值
   */
  status?: string;
  /**
   * @remarks
   * 接听状态映射
   * 
   * @example
   * 示例值示例值
   */
  statusCode?: string;
  /**
   * @remarks
   * 展示通话标签详情,当请求参数fields中包含tagNames时返回
   */
  tagNames?: string[];
  /**
   * @remarks
   * 标签
   */
  tags?: string[];
  /**
   * @remarks
   * 总时长
   * 
   * @example
   * 64
   */
  totalDuration?: number;
  /**
   * @remarks
   * 通话记录唯一标识
   * 
   * @example
   * AWS_DEV_MEDIA_SERVER_8-1536892698.2
   */
  uniqueId?: string;
  /**
   * @remarks
   * 虚拟号码
   * 
   * @example
   * xxx
   */
  xnumber?: string;
  static names(): { [key: string]: string } {
    return {
      bridgeDuration: 'BridgeDuration',
      bridgeTime: 'BridgeTime',
      callId: 'CallId',
      callType: 'CallType',
      clientName: 'ClientName',
      clientNumber: 'ClientNumber',
      cno: 'Cno',
      customerCity: 'CustomerCity',
      customerNumber: 'CustomerNumber',
      customerNumberEncrypt: 'CustomerNumberEncrypt',
      customerProvince: 'CustomerProvince',
      customerRingingTime: 'CustomerRingingTime',
      endReason: 'EndReason',
      endTime: 'EndTime',
      evaluation: 'Evaluation',
      hotline: 'Hotline',
      investigation: 'Investigation',
      ivrName: 'IvrName',
      mark: 'Mark',
      markData: 'MarkData',
      recordFile: 'RecordFile',
      sipCause: 'SipCause',
      startTime: 'StartTime',
      status: 'Status',
      statusCode: 'StatusCode',
      tagNames: 'TagNames',
      tags: 'Tags',
      totalDuration: 'TotalDuration',
      uniqueId: 'UniqueId',
      xnumber: 'Xnumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bridgeDuration: 'number',
      bridgeTime: 'number',
      callId: 'string',
      callType: 'string',
      clientName: 'string',
      clientNumber: 'string',
      cno: 'string',
      customerCity: 'string',
      customerNumber: 'string',
      customerNumberEncrypt: 'string',
      customerProvince: 'string',
      customerRingingTime: 'number',
      endReason: 'string',
      endTime: 'number',
      evaluation: 'number',
      hotline: 'string',
      investigation: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ivrName: 'string',
      mark: 'number',
      markData: 'string',
      recordFile: 'string',
      sipCause: 'string',
      startTime: 'number',
      status: 'string',
      statusCode: 'string',
      tagNames: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': 'string' },
      totalDuration: 'number',
      uniqueId: 'string',
      xnumber: 'string',
    };
  }

  validate() {
    if(this.investigation) {
      $dara.Model.validateMap(this.investigation);
    }
    if(Array.isArray(this.tagNames)) {
      $dara.Model.validateArray(this.tagNames);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkDescribeCdrObResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * [外呼通话记录] #外呼通话记录
   */
  cdrOb?: ClinkDescribeCdrObResponseBodyDataCdrOb;
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * 示例值
   */
  clinkRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      cdrOb: 'CdrOb',
      clinkRequestId: 'ClinkRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdrOb: ClinkDescribeCdrObResponseBodyDataCdrOb,
      clinkRequestId: 'string',
    };
  }

  validate() {
    if(this.cdrOb && typeof (this.cdrOb as any).validate === 'function') {
      (this.cdrOb as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkDescribeCdrObResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkDescribeCdrObResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 7BF47617-7851-48F7-A3A1-2021342A78E2
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
      data: ClinkDescribeCdrObResponseBodyData,
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

