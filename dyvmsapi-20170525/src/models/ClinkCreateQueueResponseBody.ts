// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkCreateQueueResponseBodyDataQueueQueueMembers extends $dara.Model {
  /**
   * @remarks
   * 队列下座席号
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 该座席在队列中的优先级
   * 
   * @example
   * 7
   */
  penalty?: number;
  static names(): { [key: string]: string } {
    return {
      cno: 'Cno',
      penalty: 'Penalty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cno: 'string',
      penalty: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkCreateQueueResponseBodyDataQueue extends $dara.Model {
  /**
   * @remarks
   * 在线客服排队位置推送(小于该位置则推送)
   * 
   * @example
   * 10
   */
  chatLocation?: number;
  /**
   * @remarks
   * 在线客服最大排队数
   * 
   * @example
   * 10
   */
  chatMaxWait?: number;
  /**
   * @remarks
   * 在线客服分配策略，2：轮选；4：随机；5：技能优先
   * 
   * @example
   * 2
   */
  chatStrategy?: number;
  /**
   * @remarks
   * 是否允许呼入队列，0: 否；1: 是
   * 
   * @example
   * 1
   */
  ibAllowed?: number;
  /**
   * @remarks
   * 队列中为空时是否可以join，1: 置忙，2: 通话中，4: 振铃，8: 无效，16: 整理 如选多种状态则传对应数值的和，如选置忙和通话中，值为 3。默认值为 0 即都未选中
   * 
   * @example
   * 0
   */
  joinEmpty?: number;
  /**
   * @remarks
   * 最大并发置忙座席数，开关配置
   * 
   * @example
   * 19
   */
  maxPauseClientFlag?: number;
  /**
   * @remarks
   * 最大并发置忙座席数，配置类型
   * 
   * @example
   * 73
   */
  maxPauseClientType?: number;
  /**
   * @remarks
   * 最大并发置忙座席数，配置值
   * 
   * @example
   * 38
   */
  maxPauseClientValue?: number;
  /**
   * @remarks
   * 最大等待数，设置范围 0-999，0 表示不做任何限制
   * 
   * @example
   * 0
   */
  maxWait?: number;
  /**
   * @remarks
   * 座席超时时间，取值范围 20-60 秒
   * 
   * @example
   * 20
   */
  memberTimeout?: number;
  /**
   * @remarks
   * 座席名称，只允许输入中文，字母，数字，下划线，长度不超过 20 个字符
   * 
   * @example
   * 示例值示例值
   */
  name?: string;
  /**
   * @remarks
   * 队列工号，4位数字，要求唯一
   * 
   * @example
   * 1122
   */
  qno?: string;
  /**
   * @remarks
   * 队列内座席及技能值设置。技能值 1-10，技能值 1 的优先级为最高 cno 队列下座席号 penalty该座席在队列中的优先级
   */
  queueMembers?: ClinkCreateQueueResponseBodyDataQueueQueueMembers[];
  /**
   * @remarks
   * 队列超时时间，取值范围 30-600 秒
   * 
   * @example
   * 33
   */
  queueTimeout?: number;
  /**
   * @remarks
   * 语音报号(是否报座席号)(1:是 0: 否)
   * 
   * @example
   * 1
   */
  sayCno?: number;
  /**
   * @remarks
   * 服务水平秒数，取值范围 10-30 秒，低于此时间内接听的认为是高服务水平
   * 
   * @example
   * 27
   */
  serviceLevel?: number;
  /**
   * @remarks
   * 呼叫策略，1：顺序，2：轮选，3：平均，4：随机，5：技能优先，6：距上一通呼入空闲时间累计最长，7：技能优先+距上一通呼入空闲时间累计最长，8：距上一通呼入空闲时间累计最长(全队列)，9：技能优先+距上一通呼入空闲时间累计最长(全队列)，10：全队列平均，11：技能优先+轮选，12：最长空闲时长，13：技能优先+当前空闲状态时长最长，14：距上一通通话空闲时间累计最长
   * 
   * @example
   * 1
   */
  strategy?: number;
  /**
   * @remarks
   * 支持VIP级别(VIP客户优先)(0:不支持 1:支持)
   * 
   * @example
   * 0
   */
  vipSupport?: number;
  /**
   * @remarks
   * 队列优先级，取值范围 1-10 座席属于多个队列时，优先级高的队列的来电将优先接听；数值越高，优先级越高
   * 
   * @example
   * 3
   */
  weight?: number;
  /**
   * @remarks
   * 整理时长，取值范围 3-300 秒，整理期间座席不接受新的呼叫
   * 
   * @example
   * 86
   */
  wrapupTime?: number;
  static names(): { [key: string]: string } {
    return {
      chatLocation: 'ChatLocation',
      chatMaxWait: 'ChatMaxWait',
      chatStrategy: 'ChatStrategy',
      ibAllowed: 'IbAllowed',
      joinEmpty: 'JoinEmpty',
      maxPauseClientFlag: 'MaxPauseClientFlag',
      maxPauseClientType: 'MaxPauseClientType',
      maxPauseClientValue: 'MaxPauseClientValue',
      maxWait: 'MaxWait',
      memberTimeout: 'MemberTimeout',
      name: 'Name',
      qno: 'Qno',
      queueMembers: 'QueueMembers',
      queueTimeout: 'QueueTimeout',
      sayCno: 'SayCno',
      serviceLevel: 'ServiceLevel',
      strategy: 'Strategy',
      vipSupport: 'VipSupport',
      weight: 'Weight',
      wrapupTime: 'WrapupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatLocation: 'number',
      chatMaxWait: 'number',
      chatStrategy: 'number',
      ibAllowed: 'number',
      joinEmpty: 'number',
      maxPauseClientFlag: 'number',
      maxPauseClientType: 'number',
      maxPauseClientValue: 'number',
      maxWait: 'number',
      memberTimeout: 'number',
      name: 'string',
      qno: 'string',
      queueMembers: { 'type': 'array', 'itemType': ClinkCreateQueueResponseBodyDataQueueQueueMembers },
      queueTimeout: 'number',
      sayCno: 'number',
      serviceLevel: 'number',
      strategy: 'number',
      vipSupport: 'number',
      weight: 'number',
      wrapupTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.queueMembers)) {
      $dara.Model.validateArray(this.queueMembers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkCreateQueueResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * 示例值示例值示例值
   */
  clinkRequestId?: string;
  queue?: ClinkCreateQueueResponseBodyDataQueue;
  static names(): { [key: string]: string } {
    return {
      clinkRequestId: 'ClinkRequestId',
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clinkRequestId: 'string',
      queue: ClinkCreateQueueResponseBodyDataQueue,
    };
  }

  validate() {
    if(this.queue && typeof (this.queue as any).validate === 'function') {
      (this.queue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkCreateQueueResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkCreateQueueResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 9FF70B74-1B3C-44C1-ACDF-8DF962988F0E
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
      data: ClinkCreateQueueResponseBodyData,
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

