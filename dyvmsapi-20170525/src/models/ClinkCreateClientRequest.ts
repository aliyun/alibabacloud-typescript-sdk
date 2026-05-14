// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkCreateClientRequestClidArea extends $dara.Model {
  /**
   * @remarks
   * 地区组名称
   * 
   * @example
   * 示例值示例值示例值
   */
  areaGroupName?: string;
  /**
   * @remarks
   * 号码类型，默认值为0，0: 号码；1: 动态号码组
   * 
   * @example
   * 0
   */
  assignType?: number;
  /**
   * @remarks
   * 动态号码组名称，当assignType（号码类型）值为1（动态号码组）时为必填项
   * 
   * @example
   * 示例值示例值
   */
  dynamicTelGroupName?: string;
  /**
   * @remarks
   * 外显号码
   */
  obClids?: string[];
  static names(): { [key: string]: string } {
    return {
      areaGroupName: 'AreaGroupName',
      assignType: 'AssignType',
      dynamicTelGroupName: 'DynamicTelGroupName',
      obClids: 'ObClids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaGroupName: 'string',
      assignType: 'number',
      dynamicTelGroupName: 'string',
      obClids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.obClids)) {
      $dara.Model.validateArray(this.obClids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkCreateClientRequestPermission extends $dara.Model {
  /**
   * @remarks
   * 语音转写，0: 关闭；1: 呼入开启；2 外呼开启；3 全部开启；默认值为 0
   * 
   * @example
   * 0
   */
  asr?: number;
  /**
   * @remarks
   * 外呼权限，0: 关闭；1: 无限制；2: 国内长途；3: 国内本地，默认值为 1
   * 
   * @example
   * 1
   */
  call?: number;
  /**
   * @remarks
   * 通话记录查看权限，1: 全部；2: 所属队列；3:本座席，默认值为 1
   * 
   * @example
   * 1
   */
  cdr?: number;
  /**
   * @remarks
   * 在线客服查看会话记录权限 ，0：全部、1：所属队列、2：本座席； 默认值为 0
   * 
   * @example
   * 0
   */
  chat?: number;
  /**
   * @remarks
   * 其他数据查看权限：1：全部 2：所属员工组 3：自己 4:指定员工组 ,默认所属员工组
   * 
   * @example
   * 1
   */
  otherData?: number;
  /**
   * @remarks
   * 通话录音权限，0: 关闭；1: 呼入；2: 外呼；3: 全部，默认值为 3
   * 
   * @example
   * 3
   */
  record?: number;
  /**
   * @remarks
   * 录音试听下载权限，0: 关闭；1: 试听下载；2：试听，默认值 1
   * 
   * @example
   * 1
   */
  recordDownload?: number;
  /**
   * @remarks
   * 短信发送权限，0: 关闭；1: 开启，默认值为 0
   * 
   * @example
   * 0
   */
  sms?: number;
  /**
   * @remarks
   * 外呼任务查看权限，1：全部 3：自己，默认全部
   * 
   * @example
   * 1
   */
  taskInventory?: number;
  /**
   * @remarks
   * 通话转移/咨询权限，可选范围，0：全部，1：所属员工组, 默认所属员工组
   * 
   * @example
   * 0
   */
  transfer?: number;
  static names(): { [key: string]: string } {
    return {
      asr: 'Asr',
      call: 'Call',
      cdr: 'Cdr',
      chat: 'Chat',
      otherData: 'OtherData',
      record: 'Record',
      recordDownload: 'RecordDownload',
      sms: 'Sms',
      taskInventory: 'TaskInventory',
      transfer: 'Transfer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asr: 'number',
      call: 'number',
      cdr: 'number',
      chat: 'number',
      otherData: 'number',
      record: 'number',
      recordDownload: 'number',
      sms: 'number',
      taskInventory: 'number',
      transfer: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkCreateClientRequest extends $dara.Model {
  /**
   * @remarks
   * 启用状态，0: 停用；1: 启用，默认值为 1
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * 所属区号
   * 
   * This parameter is required.
   * 
   * @example
   * 010
   */
  areaCode?: string;
  /**
   * @remarks
   * 号码类型，默认值为0，0: 号码；1: 动态号码组
   * 
   * @example
   * 0
   */
  assignType?: number;
  /**
   * @remarks
   * 可外显号码集合，当clidType（外显号码类型）值为非0时为必填项
   */
  clid?: string[];
  /**
   * @remarks
   * 按地区外显配置，当clidType（外显号码类型）值为3且clidRule（外显规则）值为2（自定义）时有意义，具体配置项见 clidArea 对象
   */
  clidArea?: ClinkCreateClientRequestClidArea[];
  /**
   * @remarks
   * 缺省外显号码集合，当clidType（外显号码类型）值为3且clidRule（外显规则）值为1（动态）时，支持配置缺省外显
   */
  clidDefault?: string[];
  /**
   * @remarks
   * 外显规则，默认值为 1 当clidType（外显号码类型）值为0（全部）时，1:随机；2: 轮选。 当clidType（外显号码类型）值为3（智能外显）时，1:动态；2: 自定义。
   * 
   * @example
   * 1
   */
  clidRule?: number;
  /**
   * @remarks
   * 外显号码类型，0: 全部；2: 座席指定；3: 智能外显；默认值为 0
   * 
   * @example
   * 0
   */
  clidType?: number;
  /**
   * @remarks
   * 云号码外呼开关，0-关，1-开
   * 
   * @example
   * 0
   */
  cloudNumberEnabled?: number;
  /**
   * @remarks
   * 云号码四种呼叫模式；数组长度 为 4，依次对应云号码外呼的四种模式（实体卡、工作卡、两端呼、RTC)的开启状态； 例如：[0,0,0,1] 表示 座席只可使用 RTC 外呼模式。 注意：仅当企业开启了云手机外呼功能，才能为座席设置该属性，否则，座席将创建失败
   */
  cloudNumberModes?: number[];
  /**
   * @remarks
   * 座席工号，长度为4-11个字符，必须全部为数字，要求唯一
   * 
   * This parameter is required.
   * 
   * @example
   * 1111
   */
  cno?: number;
  /**
   * @remarks
   * CRM 编号，与第三方 CRM 系统对接时，可作为唯一标识
   * 
   * @example
   * 87
   */
  crmId?: number;
  /**
   * @remarks
   * 缺省动态外呼组id，当obClidDefaultType值为1时为必填项
   * 
   * @example
   * 17
   */
  dynamicTelGroupIdDefault?: number;
  /**
   * @remarks
   * 动态号码组名称，当assignType（号码类型）值为1（动态号码组）时为必填项
   * 
   * @example
   * 示例值示例值
   */
  dynamicTelGroupName?: string;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 8004970
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 号码隐藏类型，0: 不隐藏；1: 隐藏规则与全局设置保持一致，默认值为 0
   * 
   * @example
   * 0
   */
  hiddenTel?: number;
  /**
   * @remarks
   * 座席名称，只允许输入中文、字母、数字、下划线，长度不超过 20 个字符
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  name?: string;
  /**
   * @remarks
   * 缺省号码类型 0：号码 1：动态号码组 默认0
   * 
   * @example
   * 0
   */
  obClidDefaultType?: number;
  /**
   * @remarks
   * 外呼挂机短信开关 0：关闭， 1：开启。开启后，当座席发起外呼时，系统会依据【短信中心 - 短信设置 - 外呼双方接听通知 / 外呼客户未接听通知】中的配置条件发送短信。
   * 
   * @example
   * 0
   */
  obHangupSms?: number;
  ownerId?: number;
  /**
   * @remarks
   * 座席密码，采用 AES加密 ，默认长度为 8 位。如果企业开启了密码安全设置，则需要按照设置的规则设置
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  password?: string;
  /**
   * @remarks
   * 是否可置忙登录，关闭后，座席不允许置忙登录，0：关闭，1：开启，默认1。
   * 
   * @example
   * 1
   */
  pauseLogin?: number;
  /**
   * @remarks
   * permission
   * 
   * This parameter is required.
   */
  permission?: ClinkCreateClientRequestPermission;
  /**
   * @remarks
   * 所属队列号集合
   */
  qnos?: string[];
  /**
   * @remarks
   * 轮选方式，1: 按天轮选；2: 按次轮选，当外显号码类型为全部、外显规则为轮选时配置才生效
   * 
   * @example
   * 1
   */
  recurrentselectionType?: number;
  /**
   * @remarks
   * 轮选值设置，当外显号码类型为全部、外显规则为轮选时配置才生效 1: 按天轮选，每 n 天外呼更换一次外显号码，可设置 1-30 天 2: 按次轮选，每 n 次外呼更换一次外显号码，可设置 1-30 次
   * 
   * @example
   * 1
   */
  recurrentselectionValue?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 座席角色，0: 普通座席；1: 班长座席，默认值为 0
   * 
   * @example
   * 0
   */
  role?: number;
  /**
   * @remarks
   * 座席服务地区，区号数组 配置座席服务的地区，可用于外呼任务中“按服务地区分配”的策略。
   */
  serveArea?: string[];
  /**
   * @remarks
   * 座席类型，1：全渠道、2：呼叫中心、3：在线客服；默认值为 2
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * 微信小程序RTC开关 1：开启 0：关闭 默认关闭
   * 
   * @example
   * 0
   */
  wechatMiniProgramRtc?: number;
  /**
   * @remarks
   * 整理时长，座席进行外呼操作后的整理时间。取值范围 0-300 秒，默认值为 30
   * 
   * @example
   * 24
   */
  wrapupTime?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      areaCode: 'AreaCode',
      assignType: 'AssignType',
      clid: 'Clid',
      clidArea: 'ClidArea',
      clidDefault: 'ClidDefault',
      clidRule: 'ClidRule',
      clidType: 'ClidType',
      cloudNumberEnabled: 'CloudNumberEnabled',
      cloudNumberModes: 'CloudNumberModes',
      cno: 'Cno',
      crmId: 'CrmId',
      dynamicTelGroupIdDefault: 'DynamicTelGroupIdDefault',
      dynamicTelGroupName: 'DynamicTelGroupName',
      enterpriseId: 'EnterpriseId',
      hiddenTel: 'HiddenTel',
      name: 'Name',
      obClidDefaultType: 'ObClidDefaultType',
      obHangupSms: 'ObHangupSms',
      ownerId: 'OwnerId',
      password: 'Password',
      pauseLogin: 'PauseLogin',
      permission: 'Permission',
      qnos: 'Qnos',
      recurrentselectionType: 'RecurrentselectionType',
      recurrentselectionValue: 'RecurrentselectionValue',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      role: 'Role',
      serveArea: 'ServeArea',
      type: 'Type',
      wechatMiniProgramRtc: 'WechatMiniProgramRtc',
      wrapupTime: 'WrapupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      areaCode: 'string',
      assignType: 'number',
      clid: { 'type': 'array', 'itemType': 'string' },
      clidArea: { 'type': 'array', 'itemType': ClinkCreateClientRequestClidArea },
      clidDefault: { 'type': 'array', 'itemType': 'string' },
      clidRule: 'number',
      clidType: 'number',
      cloudNumberEnabled: 'number',
      cloudNumberModes: { 'type': 'array', 'itemType': 'number' },
      cno: 'number',
      crmId: 'number',
      dynamicTelGroupIdDefault: 'number',
      dynamicTelGroupName: 'string',
      enterpriseId: 'number',
      hiddenTel: 'number',
      name: 'string',
      obClidDefaultType: 'number',
      obHangupSms: 'number',
      ownerId: 'number',
      password: 'string',
      pauseLogin: 'number',
      permission: ClinkCreateClientRequestPermission,
      qnos: { 'type': 'array', 'itemType': 'string' },
      recurrentselectionType: 'number',
      recurrentselectionValue: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      role: 'number',
      serveArea: { 'type': 'array', 'itemType': 'string' },
      type: 'number',
      wechatMiniProgramRtc: 'number',
      wrapupTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clid)) {
      $dara.Model.validateArray(this.clid);
    }
    if(Array.isArray(this.clidArea)) {
      $dara.Model.validateArray(this.clidArea);
    }
    if(Array.isArray(this.clidDefault)) {
      $dara.Model.validateArray(this.clidDefault);
    }
    if(Array.isArray(this.cloudNumberModes)) {
      $dara.Model.validateArray(this.cloudNumberModes);
    }
    if(this.permission && typeof (this.permission as any).validate === 'function') {
      (this.permission as any).validate();
    }
    if(Array.isArray(this.qnos)) {
      $dara.Model.validateArray(this.qnos);
    }
    if(Array.isArray(this.serveArea)) {
      $dara.Model.validateArray(this.serveArea);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

