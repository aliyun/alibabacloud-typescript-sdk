// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListTaskFileResponseBodyDataTaskFileList extends $dara.Model {
  /**
   * @remarks
   * 创建批次时间，格式为： yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  createTime?: string;
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
   * 批次Id
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * 导入条数
   * 
   * @example
   * 3
   */
  importCount?: string;
  /**
   * @remarks
   * 批次名称
   * 
   * @example
   * name2
   */
  name?: string;
  /**
   * @remarks
   * 优先级，默认为0，值越大优先级越高
   * 
   * @example
   * 0
   */
  priority?: string;
  /**
   * @remarks
   * 重复条数
   * 
   * @example
   * 0
   */
  repeatCount?: string;
  /**
   * @remarks
   * 黑名单条数
   * 
   * @example
   * 0
   */
  restrictCount?: string;
  /**
   * @remarks
   * 批次状态，0：未导入，1：导入完成 ，2：加载到缓存，3：呼叫完，4：已冻结
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * 任务Id
   * 
   * @example
   * 27
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      enterpriseId: 'EnterpriseId',
      id: 'Id',
      importCount: 'ImportCount',
      name: 'Name',
      priority: 'Priority',
      repeatCount: 'RepeatCount',
      restrictCount: 'RestrictCount',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      enterpriseId: 'string',
      id: 'string',
      importCount: 'string',
      name: 'string',
      priority: 'string',
      repeatCount: 'string',
      restrictCount: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudListTaskFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 任务批次信息
   */
  taskFileList?: CloudListTaskFileResponseBodyDataTaskFileList[];
  /**
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      taskFileList: 'TaskFileList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskFileList: { 'type': 'array', 'itemType': CloudListTaskFileResponseBodyDataTaskFileList },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.taskFileList)) {
      $dara.Model.validateArray(this.taskFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudListTaskFileResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudListTaskFileResponseBodyData;
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
      data: CloudListTaskFileResponseBodyData,
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

