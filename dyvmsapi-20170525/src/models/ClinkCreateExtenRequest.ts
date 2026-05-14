// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkCreateExtenRequest extends $dara.Model {
  /**
   * @remarks
   * 语音编码。 IP话机支持的语音编码：1、2、3、4、5 软电话支持的语音编码：5、6 1：g729(已弃用) 2：g729,alaw,ulaw 3：alaw,ulaw,g729 4：myopus,alaw,ulaw,g729 5：alaw,ulaw 6：myopus,alaw,ulaw
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  allow?: number;
  /**
   * @remarks
   * 话机区号。以 0 开头 3-4 位数字
   * 
   * This parameter is required.
   * 
   * @example
   * 010
   */
  areaCode?: string;
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
   * 话机号码。3-6 位数字，要求唯一
   * 
   * This parameter is required.
   * 
   * @example
   * 12235
   */
  extenNumber?: string;
  /**
   * @remarks
   * 是否允许主叫外呼，1：允许；0：不允许。话机类型为IP话机时，可以开启主叫外呼功能，直接通过IP话机进行外呼。若要使用主叫外呼功能，需要开启企业级开关。
   * 
   * @example
   * 1
   */
  isDirect?: number;
  /**
   * @remarks
   * 网络防抖，0：关闭；1：开启，默认关闭，当开启时，语音编码类型默认为5
   * 
   * @example
   * 70
   */
  jittBuffer?: number;
  ownerId?: number;
  /**
   * @remarks
   * 话机密码，密码规则参见企业配置
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  password?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 话机类型。1: IP话机， 2: 软电话
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      allow: 'Allow',
      areaCode: 'AreaCode',
      enterpriseId: 'EnterpriseId',
      extenNumber: 'ExtenNumber',
      isDirect: 'IsDirect',
      jittBuffer: 'JittBuffer',
      ownerId: 'OwnerId',
      password: 'Password',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allow: 'number',
      areaCode: 'string',
      enterpriseId: 'number',
      extenNumber: 'string',
      isDirect: 'number',
      jittBuffer: 'number',
      ownerId: 'number',
      password: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

