// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkCreateClientResponseBodyDataClientClidArea extends $dara.Model {
  /**
   * @remarks
   * 地区组名称
   * 
   * @example
   * 示例值示例值
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

export class ClinkCreateClientResponseBodyDataClientPermission extends $dara.Model {
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
   * 2
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
   * 1
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

export class ClinkCreateClientResponseBodyDataClient extends $dara.Model {
  /**
   * @remarks
   * 启用状态，0: 停用；1: 启用
   * 
   * @example
   * 0
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
   * 可外显号码集合
   */
  clid?: string[];
  /**
   * @remarks
   * 给地区指定可外显号码
   */
  clidArea?: ClinkCreateClientResponseBodyDataClientClidArea[];
  /**
   * @remarks
   * 缺省外显号码集合，当clidType（外显号码类型）值为3且clidRule（外显规则）值为1时，支持配置缺省外显
   */
  clidDefault?: string[];
  /**
   * @remarks
   * 外显规则，根据外显号码类型值来定义，1: 随机；2: 轮选 或 1: 动态；2: 自定义
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
   * 云号码四种呼叫模式；数组长度 为 4，依次对应云号码外呼的四种模式（实体卡、工作卡、两端呼、RTC)的开启状态；
   */
  cloudNumberModes?: number[];
  /**
   * @remarks
   * 座席工号
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
   * 20
   */
  crmId?: number;
  /**
   * @remarks
   * 动态号码组名称，当assignType（号码类型）值为1（动态号码组）时为必填项
   * 
   * @example
   * xxx
   */
  dynamicTelGroupName?: string;
  /**
   * @remarks
   * 号码隐藏类型，0: 不隐藏；1: 隐藏规则与全局设置保持一致
   * 
   * @example
   * 0
   */
  hiddenTel?: number;
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * 示例值
   */
  name?: string;
  /**
   * @remarks
   * 座席密码
   * 
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * permission
   */
  permission?: ClinkCreateClientResponseBodyDataClientPermission;
  /**
   * @remarks
   * 所属队列号集合
   */
  qnos?: string[];
  /**
   * @remarks
   * 轮选方式，1: 按天轮选；2: 按次轮选
   * 
   * @example
   * 1
   */
  recurrentselectionType?: number;
  /**
   * @remarks
   * 轮选值设置 1: 按天轮选，每 n 天外呼更换一次外显号码，可设置 1-30 天 2: 按次轮选，每 n 次外呼更换一次外显号码，可设置 1-30 次
   * 
   * @example
   * 1
   */
  recurrentselectionValue?: number;
  /**
   * @remarks
   * 座席角色，0: 普通座席；1: 班长座席
   * 
   * @example
   * 0
   */
  role?: number;
  /**
   * @remarks
   * 座席类型，1：全渠道、2：呼叫中心、3：在线客服
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * 整理时长，座席进行外呼操作后的整理时间
   * 
   * @example
   * 42
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
      dynamicTelGroupName: 'DynamicTelGroupName',
      hiddenTel: 'HiddenTel',
      name: 'Name',
      password: 'Password',
      permission: 'Permission',
      qnos: 'Qnos',
      recurrentselectionType: 'RecurrentselectionType',
      recurrentselectionValue: 'RecurrentselectionValue',
      role: 'Role',
      type: 'Type',
      wrapupTime: 'WrapupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      areaCode: 'string',
      assignType: 'number',
      clid: { 'type': 'array', 'itemType': 'string' },
      clidArea: { 'type': 'array', 'itemType': ClinkCreateClientResponseBodyDataClientClidArea },
      clidDefault: { 'type': 'array', 'itemType': 'string' },
      clidRule: 'number',
      clidType: 'number',
      cloudNumberEnabled: 'number',
      cloudNumberModes: { 'type': 'array', 'itemType': 'number' },
      cno: 'number',
      crmId: 'number',
      dynamicTelGroupName: 'string',
      hiddenTel: 'number',
      name: 'string',
      password: 'string',
      permission: ClinkCreateClientResponseBodyDataClientPermission,
      qnos: { 'type': 'array', 'itemType': 'string' },
      recurrentselectionType: 'number',
      recurrentselectionValue: 'number',
      role: 'number',
      type: 'number',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkCreateClientResponseBodyData extends $dara.Model {
  client?: ClinkCreateClientResponseBodyDataClient;
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
      client: 'Client',
      clinkRequestId: 'ClinkRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: ClinkCreateClientResponseBodyDataClient,
      clinkRequestId: 'string',
    };
  }

  validate() {
    if(this.client && typeof (this.client as any).validate === 'function') {
      (this.client as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkCreateClientResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkCreateClientResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
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
      data: ClinkCreateClientResponseBodyData,
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

