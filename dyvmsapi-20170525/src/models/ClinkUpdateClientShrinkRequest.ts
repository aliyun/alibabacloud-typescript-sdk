// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkUpdateClientShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 启用状态， 0: 停用；1: 启用。
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * 所属区号
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
   * 可外显号码集合，当外显类型非全部时需指定此参数值。
   */
  clidShrink?: string;
  /**
   * @remarks
   * 按地区外显配置，当clidType（外显号码类型）值为3且clidRule（外显规则）值为2（自定义）时有意义，具体配置项见 clidArea 对象
   */
  clidAreaShrink?: string;
  /**
   * @remarks
   * 缺省外显号码集合，当clidType（外显号码类型）值为3且clidRule（外显规则）值为1（动态）时，支持配置缺省外显
   */
  clidDefaultShrink?: string;
  /**
   * @remarks
   * 外显规则， 当clidType（外显号码类型）值为0（全部）时，1:随机；2: 轮选。 当clidType（外显号码类型）值为3（智能外显）时，1:动态；2: 自定义。
   * 
   * @example
   * 1
   */
  clidRule?: number;
  /**
   * @remarks
   * 外显号码类型，0: 全部；2: 座席指定；3: 智能外显
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
  cloudNumberModesShrink?: string;
  /**
   * @remarks
   * 座席工号，4-11位数字，要求唯一
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
   * 95
   */
  crmId?: number;
  /**
   * @remarks
   * 缺省动态外呼组id，当obClidDefaultType值为1时为必填项
   * 
   * @example
   * 19
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
   * 号码隐藏类型，0: 不隐藏；1: 隐藏规则与全局设置保持一致。
   * 
   * @example
   * 0
   */
  hiddenTel?: number;
  /**
   * @remarks
   * 呼入整理时长，客户来电座席接听，双方通话结束后座席的话后处理时长，此期间座席不接收新的客户来电。取值范围：0～3600秒。
   * 
   * @example
   * 30
   */
  ibWrapupTime?: number;
  /**
   * @remarks
   * 呼入整理类型，1：队列；2：座席。
   * 
   * @example
   * 2
   */
  ibWrapupType?: number;
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
   * 缺省号码类型 0：号码 1：动态号码组 默认0
   * 
   * @example
   * 1
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
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * 是否可置忙登录，关闭后，座席不允许置忙登录，0：关闭，1：开启。
   * 
   * @example
   * 0
   */
  pauseLogin?: number;
  /**
   * @remarks
   * permission
   * 
   * This parameter is required.
   */
  permissionShrink?: string;
  /**
   * @remarks
   * 所属队列号集合
   */
  qnosShrink?: string;
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
   * 座席角色，0: 普通座席；1: 班长座席。
   * 
   * @example
   * 1
   */
  role?: number;
  /**
   * @remarks
   * 座席服务地区，区号数组 配置座席服务的地区，可用于外呼任务中“按服务地区分配”的策略。
   */
  serveAreaShrink?: string;
  /**
   * @remarks
   * 微信小程序RTC开关 1：开启 0：关闭 默认关闭
   * 
   * @example
   * 1
   */
  wechatMiniProgramRtc?: number;
  /**
   * @remarks
   * 整理时长，座席进行外呼操作后的整理时间，取值范围 0-300 秒。
   * 
   * @example
   * 51
   */
  wrapupTime?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      areaCode: 'AreaCode',
      assignType: 'AssignType',
      clidShrink: 'Clid',
      clidAreaShrink: 'ClidArea',
      clidDefaultShrink: 'ClidDefault',
      clidRule: 'ClidRule',
      clidType: 'ClidType',
      cloudNumberEnabled: 'CloudNumberEnabled',
      cloudNumberModesShrink: 'CloudNumberModes',
      cno: 'Cno',
      crmId: 'CrmId',
      dynamicTelGroupIdDefault: 'DynamicTelGroupIdDefault',
      dynamicTelGroupName: 'DynamicTelGroupName',
      enterpriseId: 'EnterpriseId',
      hiddenTel: 'HiddenTel',
      ibWrapupTime: 'IbWrapupTime',
      ibWrapupType: 'IbWrapupType',
      name: 'Name',
      obClidDefaultType: 'ObClidDefaultType',
      obHangupSms: 'ObHangupSms',
      ownerId: 'OwnerId',
      password: 'Password',
      pauseLogin: 'PauseLogin',
      permissionShrink: 'Permission',
      qnosShrink: 'Qnos',
      recurrentselectionType: 'RecurrentselectionType',
      recurrentselectionValue: 'RecurrentselectionValue',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      role: 'Role',
      serveAreaShrink: 'ServeArea',
      wechatMiniProgramRtc: 'WechatMiniProgramRtc',
      wrapupTime: 'WrapupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      areaCode: 'string',
      assignType: 'number',
      clidShrink: 'string',
      clidAreaShrink: 'string',
      clidDefaultShrink: 'string',
      clidRule: 'number',
      clidType: 'number',
      cloudNumberEnabled: 'number',
      cloudNumberModesShrink: 'string',
      cno: 'number',
      crmId: 'number',
      dynamicTelGroupIdDefault: 'number',
      dynamicTelGroupName: 'string',
      enterpriseId: 'number',
      hiddenTel: 'number',
      ibWrapupTime: 'number',
      ibWrapupType: 'number',
      name: 'string',
      obClidDefaultType: 'number',
      obHangupSms: 'number',
      ownerId: 'number',
      password: 'string',
      pauseLogin: 'number',
      permissionShrink: 'string',
      qnosShrink: 'string',
      recurrentselectionType: 'number',
      recurrentselectionValue: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      role: 'number',
      serveAreaShrink: 'string',
      wechatMiniProgramRtc: 'number',
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

