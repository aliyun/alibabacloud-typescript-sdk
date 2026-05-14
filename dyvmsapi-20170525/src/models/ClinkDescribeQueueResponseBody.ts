// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkDescribeQueueResponseBodyDataResultQueueMembers extends $dara.Model {
  /**
   * @remarks
   * 座席号
   * 
   * @example
   * 2233
   */
  cno?: string;
  /**
   * @remarks
   * 优先级
   * 
   * @example
   * 3
   */
  penalty?: number;
  /**
   * @remarks
   * 座席类型
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      cno: 'Cno',
      penalty: 'Penalty',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cno: 'string',
      penalty: 'number',
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

export class ClinkDescribeQueueResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * 在线客服排队位置推送(小于该位置则推送)
   * 
   * @example
   * 20
   */
  chatLocation?: number;
  /**
   * @remarks
   * 在线客服最大排队数
   * 
   * @example
   * 20
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
   * 企业id
   * 
   * @example
   * 8004970
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 允许呼入队列 0：不允许 1：允许
   * 
   * @example
   * 1
   */
  ibAllowed?: number;
  /**
   * @remarks
   * 队列中为空时是否可以join（设置了队列等待数，来电进入队列后处于等待状态，等待超时才溢出；如果勾选了这几个选项，认为座席不可用，直接溢出，减少客户等待时间）， 1: 置忙；2: 通话中；4: 振铃；8: 无效；16: 整理。 如选多种状态则传对应数值的和，如选置忙和通话中，值为 3
   * 
   * @example
   * 3
   */
  joinEmpty?: number;
  /**
   * @remarks
   * 最大并发置忙座席数，开关配置
   * 
   * @example
   * 1
   */
  maxPauseClientFlag?: number;
  /**
   * @remarks
   * 最大并发置忙座席数，配置类型
   * 
   * @example
   * 1
   */
  maxPauseClientType?: number;
  /**
   * @remarks
   * 最大并发置忙座席数，配置值
   * 
   * @example
   * 10
   */
  maxPauseClientValue?: number;
  /**
   * @remarks
   * 呼叫中心最大排队数
   * 
   * @example
   * 20
   */
  maxWait?: number;
  /**
   * @remarks
   * 座席超时时长
   * 
   * @example
   * 51
   */
  memberTimeout?: number;
  /**
   * @remarks
   * 队列名称
   * 
   * @example
   * 41
   */
  name?: number;
  /**
   * @remarks
   * 队列号
   * 
   * @example
   * 2201
   */
  qno?: string;
  /**
   * @remarks
   * cno 座席号 penalty 优先级 type 座席类型 1：全渠道、2：呼叫中心、3：在线客服
   */
  queueMembers?: ClinkDescribeQueueResponseBodyDataResultQueueMembers[];
  /**
   * @remarks
   * 队列超时时长
   * 
   * @example
   * 51
   */
  queueTimeout?: number;
  /**
   * @remarks
   * 座席超时无应答,呼叫下一座席的延迟秒数,⇐0时采用默认值5。
   * 
   * @example
   * 5
   */
  retry?: number;
  /**
   * @remarks
   * 语音报号(是否报座席号)(1：是 0：否)
   * 
   * @example
   * 0
   */
  sayCno?: number;
  /**
   * @remarks
   * 服务水平秒数，取值范围 10-30秒，低于此时间内接听的认为是高服务水平
   * 
   * @example
   * 10
   */
  serviceLevel?: number;
  /**
   * @remarks
   * 呼叫策略，1：顺序，2：轮选，3：平均，4：随机，5：技能优先，6：距上一通呼入空闲时间累计最长，7：技能优先+距上一通呼入空闲时间累计最长，8：距上一通呼入空闲时间累计最长(全队列)，9：技能优先+距上一通呼入空闲时间累计最长(全队列)，10：全队列平均，11：技能优先+轮选，12：最长空闲时长，13：技能优先+当前空闲状态时长最长，14：距上一通通话空闲时间累计最长
   * 
   * @example
   * 2
   */
  strategy?: number;
  /**
   * @remarks
   * 支持VIP级别(VIP客户优先)(0：不支持 1：支持)
   * 
   * @example
   * 0
   */
  vipSupport?: number;
  /**
   * @remarks
   * 队列优先级，取值范围 1-10。默认值为 1，座席属于多个队列时，优先级高的队列的来电将优先接听；数值越高，优先级越高
   * 
   * @example
   * 6
   */
  weight?: number;
  /**
   * @remarks
   * 整理时间
   * 
   * @example
   * 45
   */
  wrapupTime?: number;
  static names(): { [key: string]: string } {
    return {
      chatLocation: 'ChatLocation',
      chatMaxWait: 'ChatMaxWait',
      chatStrategy: 'ChatStrategy',
      enterpriseId: 'EnterpriseId',
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
      retry: 'Retry',
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
      enterpriseId: 'number',
      ibAllowed: 'number',
      joinEmpty: 'number',
      maxPauseClientFlag: 'number',
      maxPauseClientType: 'number',
      maxPauseClientValue: 'number',
      maxWait: 'number',
      memberTimeout: 'number',
      name: 'number',
      qno: 'string',
      queueMembers: { 'type': 'array', 'itemType': ClinkDescribeQueueResponseBodyDataResultQueueMembers },
      queueTimeout: 'number',
      retry: 'number',
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

export class ClinkDescribeQueueResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * xxx
   */
  clinkRequestId?: string;
  result?: ClinkDescribeQueueResponseBodyDataResult;
  static names(): { [key: string]: string } {
    return {
      clinkRequestId: 'ClinkRequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clinkRequestId: 'string',
      result: ClinkDescribeQueueResponseBodyDataResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkDescribeQueueResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkDescribeQueueResponseBodyData;
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
      data: ClinkDescribeQueueResponseBodyData,
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

