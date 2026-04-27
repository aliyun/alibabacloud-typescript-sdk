// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudBatchUpdateAgentRequest extends $dara.Model {
  /**
   * @remarks
   * 是否激活；取值0或1，取值说明 0：不激活，1激活，默认激活
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * 座席类型；取值1或2，取值说明 1：电话座席，2：电脑座席，默认电话座席
   * 
   * @example
   * 1
   */
  agentType?: number;
  /**
   * @remarks
   * 座席所属区号；区号格式
   * 
   * @example
   * 010
   */
  areaCode?: string;
  /**
   * @remarks
   * 呼叫权限；取值说明 0：无限制，1：国内长途，2：国内本市，3：内部呼叫，默认无限制
   * 
   * @example
   * 0
   */
  callPower?: number;
  /**
   * @remarks
   * 座席工号列表；需要批量更新座席的工号列表，多个之间使用英文标点逗号间隔，最多支持100个座席的批量更新。例如："0001,0002,00103"；座席工号，正整数，取值3-10位数字
   * 
   * This parameter is required.
   * 
   * @example
   * 0001,0002,00103
   */
  cnos?: string;
  /**
   * @remarks
   * 备注
   * 
   * @example
   * 示例值示例值
   */
  comment?: string;
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
   * 呼入是否录音；取值说明 0：不录用，1：录音，默认录音
   * 
   * @example
   * 1
   */
  ibRecord?: number;
  /**
   * @remarks
   * 是否开启ASR转写；取值说明：0：不开启，1：开启，默认不开启
   * 
   * @example
   * 1
   */
  isAsr?: number;
  /**
   * @remarks
   * 是否允许外呼；取值说明 0：不允许，1：可以，默认允许
   * 
   * @example
   * 1
   */
  isOb?: number;
  /**
   * @remarks
   * 外呼主叫记忆开关；取值说明：0：关闭 1：开启；默认开启
   * 
   * @example
   * 1
   */
  isObRemember?: string;
  /**
   * @remarks
   * 是否开启座席质检；取值说明：0：不开启，1：开启，默认开启
   * 
   * @example
   * 1
   */
  isQualityCheck?: number;
  /**
   * @remarks
   * 随机外显；取值说明 0:否，1:是。当obClidType值为4时需要传值，默认值为0
   * 
   * @example
   * 0
   */
  isRandom?: string;
  /**
   * @remarks
   * 座席姓名；需进行UTF-8格式的URLEncode编码
   * 
   * @example
   * 示例值
   */
  name?: string;
  /**
   * @remarks
   * 透传号码；可传入企业中继号码或设置好的客户侧外显号码，当obClidType值为2或3时必选
   * 
   * @example
   * 22223333
   */
  obClid?: string;
  /**
   * @remarks
   * 外显属性；取值：{"isMatchCapital":0,"areaCodeRule":1}；obClidType=4时，isMatchCapital表示是否匹配省会号码，1是 0否，areaCodeRule表示区号匹配规则，1座席区号 2客户号码区号（注意：json格式数据需要URLencode）
   * 
   * @example
   * {"isMatchCapital":0,"areaCodeRule":1}
   */
  obClidProperty?: string;
  /**
   * @remarks
   * 外显规则；取值：1:默认 2:随机 3:按区号 4 动态外显 ，默认值为1
   * 
   * @example
   * 1
   */
  obClidType?: number;
  /**
   * @remarks
   * 外呼是否录音；取值说明 0：不录音，1：录音，默认录音
   * 
   * @example
   * 1
   */
  obRecord?: number;
  ownerId?: number;
  /**
   * @remarks
   * 可外呼时间段；格式：08:00,20:00
   * 
   * @example
   * 08:00,20:00
   */
  permitObPreviewTime?: string;
  /**
   * @remarks
   * 座席权限；取值1或0，取值说明 1：班长席，0：普通座席，默认为0 普通座席
   * 
   * @example
   * 1
   */
  power?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * webrtc软电话返回地址；取值说明：0：企业默认 1：公网域名 2：专线域名 3：公网IP 4：专线IP
   * 
   * @example
   * 0
   */
  webrtcUrlType?: number;
  /**
   * @remarks
   * 整理时间；单位秒数，默认10秒
   * 
   * @example
   * 10
   */
  wrapup?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      agentType: 'AgentType',
      areaCode: 'AreaCode',
      callPower: 'CallPower',
      cnos: 'Cnos',
      comment: 'Comment',
      enterpriseId: 'EnterpriseId',
      ibRecord: 'IbRecord',
      isAsr: 'IsAsr',
      isOb: 'IsOb',
      isObRemember: 'IsObRemember',
      isQualityCheck: 'IsQualityCheck',
      isRandom: 'IsRandom',
      name: 'Name',
      obClid: 'ObClid',
      obClidProperty: 'ObClidProperty',
      obClidType: 'ObClidType',
      obRecord: 'ObRecord',
      ownerId: 'OwnerId',
      permitObPreviewTime: 'PermitObPreviewTime',
      power: 'Power',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      webrtcUrlType: 'WebrtcUrlType',
      wrapup: 'Wrapup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      agentType: 'number',
      areaCode: 'string',
      callPower: 'number',
      cnos: 'string',
      comment: 'string',
      enterpriseId: 'number',
      ibRecord: 'number',
      isAsr: 'number',
      isOb: 'number',
      isObRemember: 'string',
      isQualityCheck: 'number',
      isRandom: 'string',
      name: 'string',
      obClid: 'string',
      obClidProperty: 'string',
      obClidType: 'number',
      obRecord: 'number',
      ownerId: 'number',
      permitObPreviewTime: 'string',
      power: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      webrtcUrlType: 'number',
      wrapup: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

