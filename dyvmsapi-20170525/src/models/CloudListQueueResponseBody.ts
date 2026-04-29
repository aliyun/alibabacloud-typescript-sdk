// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListQueueResponseBodyDataList extends $dara.Model {
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
   * 2025-09-06 15:50:18
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
   * 48175
   */
  id?: number;
  /**
   * @remarks
   * 队列中为空时是否可以join，取值：1：置忙 2：通话中 4：振铃 8：无效 16：整理
   * 
   * @example
   * 0
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
   * 25
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
   * 33
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
   * 1
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
   * rrmemory
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
   * 1
   */
  weight?: number;
  /**
   * @remarks
   * 整理时间，取值范围3-3600秒
   * 
   * @example
   * 10
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

export class CloudListQueueResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 队列列表
   */
  list?: CloudListQueueResponseBodyDataList[];
  /**
   * @remarks
   * 总条数
   * 
   * @example
   * 23
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudListQueueResponseBodyDataList },
      total: 'number',
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

export class CloudListQueueResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudListQueueResponseBodyData;
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
      data: CloudListQueueResponseBodyData,
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

