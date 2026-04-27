// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudBatchCreateAgentRequest extends $dara.Model {
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
   * 座席所属区号；区号格式
   * 
   * This parameter is required.
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
   * 1
   */
  callPower?: number;
  /**
   * @remarks
   * 开始座席工号；正整数，取值3-10位数字
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  cno?: string;
  /**
   * @remarks
   * 备注
   * 
   * @example
   * 示例值
   */
  comment?: string;
  /**
   * @remarks
   * 结束座席工号；正整数，取值3-10位数字，单次批量创建不能超过100个
   * 
   * This parameter is required.
   * 
   * @example
   * 103
   */
  endCno?: string;
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
   * 是否开启座席质检；取值说明：0：不开启，1：开启，默认开启
   * 
   * @example
   * 1
   */
  isQualityCheck?: number;
  /**
   * @remarks
   * 座席姓名；需进行UTF-8格式的URLEncode编码
   * 
   * This parameter is required.
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
   * 外显属性；取值：{"isMatchCapital":0,"areaCodeRule":1}；obClidType=4时，isMatchCapital表示是否匹配省会号码，1是 0否，areaCodeRule表示区号匹配规则，1座席区号 2客户号码区号
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
   * 所选的技能id；可选择多个，多个之间使用英文标点逗号间隔.例如:"1,2,3"；传入skillIds时，需要同时传入skillLevels
   * 
   * @example
   * 1,2,3
   */
  skillIds?: string;
  /**
   * @remarks
   * 所选的技能的等级；值越小技能越高，多个间用英文标点逗号间隔。(与技能id相对应) 例如:"5,1,1"表示技能id为1的等级是5; 技能id为2的等级是1; 技能id为3的等级是1.
   * 
   * @example
   * 5,1,1
   */
  skillLevels?: string;
  /**
   * @remarks
   * webrtc软电话返回地址；取值说明：0：企业默认 1：公网域名 2：专线域名 3：公网IP 4：专线IP
   * 
   * @example
   * 1
   */
  webrtcUrlType?: number;
  /**
   * @remarks
   * 整理时间；单位秒数，默认10秒
   * 
   * @example
   * 20
   */
  wrapup?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      areaCode: 'AreaCode',
      callPower: 'CallPower',
      cno: 'Cno',
      comment: 'Comment',
      endCno: 'EndCno',
      enterpriseId: 'EnterpriseId',
      ibRecord: 'IbRecord',
      isAsr: 'IsAsr',
      isOb: 'IsOb',
      isQualityCheck: 'IsQualityCheck',
      name: 'Name',
      obClid: 'ObClid',
      obClidProperty: 'ObClidProperty',
      obClidType: 'ObClidType',
      obRecord: 'ObRecord',
      ownerId: 'OwnerId',
      power: 'Power',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      skillIds: 'SkillIds',
      skillLevels: 'SkillLevels',
      webrtcUrlType: 'WebrtcUrlType',
      wrapup: 'Wrapup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      areaCode: 'string',
      callPower: 'number',
      cno: 'string',
      comment: 'string',
      endCno: 'string',
      enterpriseId: 'number',
      ibRecord: 'number',
      isAsr: 'number',
      isOb: 'number',
      isQualityCheck: 'number',
      name: 'string',
      obClid: 'string',
      obClidProperty: 'string',
      obClidType: 'number',
      obRecord: 'number',
      ownerId: 'number',
      power: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      skillIds: 'string',
      skillLevels: 'string',
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

