// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudPreviewoutcallRequest extends $dara.Model {
  /**
   * @remarks
   * 备用外呼号码；tel没呼通时呼叫备用号码，最多支持5个号码，多个之间用逗号分隔
   * 
   * @example
   * 41008502
   */
  backupTels?: string;
  /**
   * @remarks
   * 通道变量可以在以下场景中使用：1. 事件推送，作为推送字段使用2. 通话记录中，将字段存储在自定义字段3. 通过SIP-Header方式将字段传到呼叫的下游链路格式如: [{"name":"mainUniqueId","value":"cdr_main_unique_id","type":"2"},{"name":"callType","value":"cdr_call_type","type":"2"}]name：变量名称value：变量值type：变量类型，1.普通变量 2.PJSIP_HEADER变量（用于将变量通过SIP-Header方式传到客户侧，最多支持5个）
   * 
   * @example
   * [{"name":"mainUniqueId","value":"cdr_main_unique_id","type":"2"},{"name":"callType","value":"cdr_call_type","type":"2"}]
   */
  callVariables?: string;
  /**
   * @remarks
   * 此次通话录音是否进行ASR转写；0.不进行 1.进行 默认：1
   * 
   * @example
   * 1
   */
  cdrIsAsr?: number;
  /**
   * @remarks
   * 外显号码集合, 格式如: [{"clid":"1708587xxxx","priority":1},{"clid":"1304412xxxx","priority":2},{"clid":"0107990xxxx","priority":3}] clid：外显号码（String类型）（必填）priority：优先级（Integer类型）（非必填） 特别说明： 一次呼叫最多允许传10个指定号码；若指定了号码优先级，要求所有传入的号码都必传
   * 
   * @example
   * [{"clid":"1708587xxxx","priority":1},{"clid":"1304412xxxx","priority":2},{"clid":"0107990xxxx","priority":3}]
   */
  clidList?: string;
  /**
   * @remarks
   * 座席工号；3-10位数字
   * 
   * This parameter is required.
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 外显导航标识
   * 
   * @example
   * 12333
   */
  crnId?: string;
  /**
   * @remarks
   * 呼叫客户侧超时时间；取值范围 5<=dialTelTimeout<=60，默认45(单位:s)
   * 
   * @example
   * 26
   */
  dialTelTimeout?: number;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 是否满意度调查；0.不进行满意度调查 1.进行满意度调查，默认：取企业配置
   * 
   * @example
   * 0
   */
  isInvestigation?: number;
  /**
   * @remarks
   * 可传入企业中继号码或设置好的客户侧外显号码
   * 
   * @example
   * 41008502
   */
  obClid?: string;
  /**
   * @remarks
   * 指定外显区号；传入区号，在指定区号下外显号码；如果obClid和obClidAreaCode都传的情况下，按照obClid外显
   * 
   * @example
   * 010
   */
  obClidAreaCode?: string;
  /**
   * @remarks
   * 客户侧外显号码组；使用clidGroup需要账号支持按标识路由，使用此参数时clid参数无效
   * 
   * @example
   * 333
   */
  obClidGroup?: string;
  /**
   * @remarks
   * 请求唯一id；取值：如果没有传入值则系统会生产。如果是加密的号码，需要URLEncode后传入
   * 
   * @example
   * req1234567
   */
  requestUniqueId?: string;
  /**
   * @remarks
   * 需要进行呼叫的客户方电话号码，固话带区号，手机不加0。 当开启号码隐藏设置时，可从弹屏事件中获取customerNumberKey的值，进行外呼；[加密外呼](../字段定义/接口部分/加密外呼号码加密规则.md)；如果是加密的号码，需要URLEncode后传入；当外呼相关配置-支持分机号外呼开启后，此字段可支持传手机号-分机号格式
   * 
   * This parameter is required.
   * 
   * @example
   * 1774821736
   */
  tel?: string;
  /**
   * @remarks
   * 呼叫座席侧超时时间；取值范围 5<=timeout<=60，默认30(单位:s)
   * 
   * @example
   * 16
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      backupTels: 'BackupTels',
      callVariables: 'CallVariables',
      cdrIsAsr: 'CdrIsAsr',
      clidList: 'ClidList',
      cno: 'Cno',
      crnId: 'CrnId',
      dialTelTimeout: 'DialTelTimeout',
      enterpriseId: 'EnterpriseId',
      isInvestigation: 'IsInvestigation',
      obClid: 'ObClid',
      obClidAreaCode: 'ObClidAreaCode',
      obClidGroup: 'ObClidGroup',
      requestUniqueId: 'RequestUniqueId',
      tel: 'Tel',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupTels: 'string',
      callVariables: 'string',
      cdrIsAsr: 'number',
      clidList: 'string',
      cno: 'string',
      crnId: 'string',
      dialTelTimeout: 'number',
      enterpriseId: 'number',
      isInvestigation: 'number',
      obClid: 'string',
      obClidAreaCode: 'string',
      obClidGroup: 'string',
      requestUniqueId: 'string',
      tel: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

