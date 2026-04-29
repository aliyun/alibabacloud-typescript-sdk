// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudGetQueueResponseBodyDataQueue extends $dara.Model {
  /**
   * @remarks
   * 位置播报 0关闭 1大于announce_position_param时播放 2小于等于announce_position_param时播放
   * 
   * @example
   * 0
   */
  announcePosition?: number;
  /**
   * @remarks
   * 位置播报周期，秒数
   * 
   * @example
   * 0
   */
  announcePositionFrequency?: number;
  /**
   * @remarks
   * 多余少余n个时播报，必须大于等于2
   * 
   * @example
   * 0
   */
  announcePositionParam?: number;
  /**
   * @remarks
   * 是否播报\\"您是下一位\\",0关闭，1开启
   * 
   * @example
   * 0
   */
  announcePositionYouarenext?: number;
  /**
   * @remarks
   * 播报固定语音 0关闭 1打开
   * 
   * @example
   * 0
   */
  announceSound?: number;
  /**
   * @remarks
   * 固定语音文件
   * 
   * @example
   * ""
   */
  announceSoundFile?: string;
  /**
   * @remarks
   * 播放固定语音周期，秒数
   * 
   * @example
   * 0
   */
  announceSoundFrequency?: number;
  /**
   * @remarks
   * 创建时间，格式: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-30 06:12:33
   */
  createTime?: string;
  /**
   * @remarks
   * 队列名
   * 
   * @example
   * queueName
   */
  description?: string;
  /**
   * @remarks
   * 企业编号
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 队列id
   * 
   * @example
   * 54473
   */
  id?: number;
  /**
   * @remarks
   * 队列中为空时是否可以join，取值：1：置忙 2：通话中 4：振铃 8：无效 16：整理
   * 
   * @example
   * 1
   */
  joinEmpty?: number;
  /**
   * @remarks
   * 最大等待数，设置范围0-999，0表示不做任何限制
   * 
   * @example
   * 0
   */
  maxLen?: number;
  /**
   * @remarks
   * 座席超时时间，取值范围20-60秒，默认25秒
   * 
   * @example
   * 60
   */
  memberTimeout?: number;
  /**
   * @remarks
   * 等待语音class
   * 
   * @example
   * default
   */
  musicClass?: string;
  /**
   * @remarks
   * 队列号
   * 
   * @example
   * 2632
   */
  qno?: string;
  /**
   * @remarks
   * 队列超时时间，取值范围5-600秒，默认600秒
   * 
   * @example
   * 600
   */
  queueTimeout?: number;
  /**
   * @remarks
   * 座席超时无应答,呼叫下一座席的延迟秒数
   * 
   * @example
   * 5
   */
  retry?: number;
  /**
   * @remarks
   * 语音报号，true:播报，false:不播报
   * 
   * @example
   * false
   */
  sayAgentno?: boolean;
  /**
   * @remarks
   * 服务水平秒数，低于此时间内接听的认为是高服务水平
   * 
   * @example
   * 10
   */
  serviceLevel?: number;
  /**
   * @remarks
   * 呼叫策略：rrordered:技能优先 rrmemory:轮选 fewestcalls:平均 random:随机 linear:顺序 leastrecent:最长空闲时间
   * 
   * @example
   * rrordered
   */
  strategy?: string;
  /**
   * @remarks
   * 是否支持vip，1:支持，0:不支持
   * 
   * @example
   * 0
   */
  vipSupport?: number;
  /**
   * @remarks
   * 队列优先级，取值范围1-10，数值越高，优先级越高
   * 
   * @example
   * 10
   */
  weight?: number;
  /**
   * @remarks
   * 整理时间，取值范围3-3600秒
   * 
   * @example
   * 30
   */
  wrapupTime?: number;
  static names(): { [key: string]: string } {
    return {
      announcePosition: 'AnnouncePosition',
      announcePositionFrequency: 'AnnouncePositionFrequency',
      announcePositionParam: 'AnnouncePositionParam',
      announcePositionYouarenext: 'AnnouncePositionYouarenext',
      announceSound: 'AnnounceSound',
      announceSoundFile: 'AnnounceSoundFile',
      announceSoundFrequency: 'AnnounceSoundFrequency',
      createTime: 'CreateTime',
      description: 'Description',
      enterpriseId: 'EnterpriseId',
      id: 'Id',
      joinEmpty: 'JoinEmpty',
      maxLen: 'MaxLen',
      memberTimeout: 'MemberTimeout',
      musicClass: 'MusicClass',
      qno: 'Qno',
      queueTimeout: 'QueueTimeout',
      retry: 'Retry',
      sayAgentno: 'SayAgentno',
      serviceLevel: 'ServiceLevel',
      strategy: 'Strategy',
      vipSupport: 'VipSupport',
      weight: 'Weight',
      wrapupTime: 'WrapupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      announcePosition: 'number',
      announcePositionFrequency: 'number',
      announcePositionParam: 'number',
      announcePositionYouarenext: 'number',
      announceSound: 'number',
      announceSoundFile: 'string',
      announceSoundFrequency: 'number',
      createTime: 'string',
      description: 'string',
      enterpriseId: 'number',
      id: 'number',
      joinEmpty: 'number',
      maxLen: 'number',
      memberTimeout: 'number',
      musicClass: 'string',
      qno: 'string',
      queueTimeout: 'number',
      retry: 'number',
      sayAgentno: 'boolean',
      serviceLevel: 'number',
      strategy: 'string',
      vipSupport: 'number',
      weight: 'number',
      wrapupTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetQueueResponseBodyDataQueueSkills extends $dara.Model {
  /**
   * @remarks
   * 创建时间，格式: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-30 06:12:33
   */
  createTime?: string;
  /**
   * @remarks
   * 企业编号
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * queueSkill关系表中id
   * 
   * @example
   * 51937
   */
  id?: number;
  /**
   * @remarks
   * 队列id
   * 
   * @example
   * 51937
   */
  queueId?: number;
  /**
   * @remarks
   * skill的id
   * 
   * @example
   * 48734
   */
  skillId?: number;
  /**
   * @remarks
   * 技能值
   * 
   * @example
   * 5
   */
  skillLevel?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      enterpriseId: 'EnterpriseId',
      id: 'Id',
      queueId: 'QueueId',
      skillId: 'SkillId',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      enterpriseId: 'number',
      id: 'number',
      queueId: 'number',
      skillId: 'number',
      skillLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetQueueResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 队列配置信息
   */
  queue?: CloudGetQueueResponseBodyDataQueue;
  /**
   * @remarks
   * 队列所需技能数组
   */
  queueSkills?: CloudGetQueueResponseBodyDataQueueSkills[];
  static names(): { [key: string]: string } {
    return {
      queue: 'Queue',
      queueSkills: 'QueueSkills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queue: CloudGetQueueResponseBodyDataQueue,
      queueSkills: { 'type': 'array', 'itemType': CloudGetQueueResponseBodyDataQueueSkills },
    };
  }

  validate() {
    if(this.queue && typeof (this.queue as any).validate === 'function') {
      (this.queue as any).validate();
    }
    if(Array.isArray(this.queueSkills)) {
      $dara.Model.validateArray(this.queueSkills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetQueueResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudGetQueueResponseBodyData;
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
      data: CloudGetQueueResponseBodyData,
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

