// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetailsResponseBodyModelList extends $dara.Model {
  /**
   * @remarks
   * 批次号
   * 
   * @example
   * 27
   */
  batchId?: number;
  /**
   * @remarks
   * 呼叫状态描述
   * 
   * @example
   * 示例值示例值
   */
  callDesc?: string;
  /**
   * @remarks
   * 外呼ID
   * 
   * @example
   * 28dd74a4-30ec-43c0-9bec-272924c51eeb
   */
  callId?: string;
  /**
   * @remarks
   * 呼叫状态
   * 
   * @example
   * 1
   */
  callStatus?: number;
  /**
   * @remarks
   * 外呼类型
   * 
   * @example
   * 2001
   */
  callType?: number;
  /**
   * @remarks
   * 导入时间
   * 
   * @example
   * 2023-04-25 15:19:02
   */
  importTime?: string;
  /**
   * @remarks
   * 拦截原因
   * 
   * @example
   * 示例值示例值示例值
   */
  interceptReason?: string;
  /**
   * @remarks
   * 外呼号码
   * 
   * @example
   * 188******454
   */
  number?: string;
  /**
   * @remarks
   * 号码状态描述
   * 
   * @example
   * 示例值
   */
  numberDesc?: string;
  /**
   * @remarks
   * 外呼号码MD5
   * 
   * @example
   * cbe1b40f76f2cca4735954886b706ffa
   */
  numberMD5?: string;
  /**
   * @remarks
   * 号码状态
   * 
   * @example
   * 1
   */
  numberStatus?: number;
  /**
   * @remarks
   * 用户自定义标签
   * 
   * @example
   * A
   */
  tag?: string;
  /**
   * @remarks
   * 任务ID
   * 
   * @example
   * 28
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      callDesc: 'CallDesc',
      callId: 'CallId',
      callStatus: 'CallStatus',
      callType: 'CallType',
      importTime: 'ImportTime',
      interceptReason: 'InterceptReason',
      number: 'Number',
      numberDesc: 'NumberDesc',
      numberMD5: 'NumberMD5',
      numberStatus: 'NumberStatus',
      tag: 'Tag',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      callDesc: 'string',
      callId: 'string',
      callStatus: 'number',
      callType: 'number',
      importTime: 'string',
      interceptReason: 'string',
      number: 'string',
      numberDesc: 'string',
      numberMD5: 'string',
      numberStatus: 'number',
      tag: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailsResponseBodyModel extends $dara.Model {
  list?: DetailsResponseBodyModelList[];
  /**
   * @example
   * 100
   */
  pageNo?: number;
  /**
   * @example
   * 94
   */
  pageSize?: number;
  /**
   * @example
   * 79
   */
  totalCount?: number;
  /**
   * @example
   * 71.8132
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DetailsResponseBodyModelList },
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
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

export class DetailsResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值
   */
  message?: string;
  model?: DetailsResponseBodyModel;
  /**
   * @example
   * 389b2d0a-37e2-406d-b576-1fc0827be46a
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 1686279332221
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      model: DetailsResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

