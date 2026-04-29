// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListExtenRequest extends $dara.Model {
  /**
   * @remarks
   * 区号
   * 
   * @example
   * 010
   */
  areaCode?: string;
  /**
   * @remarks
   * 呼叫权限，0：无限制，1：国内长途，2：国内本市，3：内部呼叫，默认无限制
   * 
   * @example
   * 0
   */
  callPower?: string;
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
   * 分机号
   * 
   * @example
   * 9000
   */
  exten?: string;
  /**
   * @remarks
   * 呼入是否录音，0：不录用，1：录音，默认录音
   * 
   * @example
   * 1
   */
  ibRecord?: number;
  /**
   * @remarks
   * 是否被座席绑定，1 绑定 0未绑定
   * 
   * @example
   * 0
   */
  isBind?: number;
  /**
   * @remarks
   * 是否允许外呼，0：不允许，1：可以，默认允许
   * 
   * @example
   * 1
   */
  isOb?: string;
  /**
   * @remarks
   * 网络防抖
   * 
   * @example
   * 0
   */
  jitterBuffer?: number;
  /**
   * @remarks
   * 条数；正整数 大于0 小于等于500 默认为10条
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * 外呼是否录音，0：不录音，1：录音，默认录音
   * 
   * @example
   * 1
   */
  obRecord?: number;
  /**
   * @remarks
   * 从第几条开始；正整数 默认为0
   * 
   * @example
   * 0
   */
  offset?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 类型，1. 注册到IAD分机 2.注册到webrtc 3.注册到远程话机
   * 
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      areaCode: 'AreaCode',
      callPower: 'CallPower',
      enterpriseId: 'EnterpriseId',
      exten: 'Exten',
      ibRecord: 'IbRecord',
      isBind: 'IsBind',
      isOb: 'IsOb',
      jitterBuffer: 'JitterBuffer',
      limit: 'Limit',
      obRecord: 'ObRecord',
      offset: 'Offset',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaCode: 'string',
      callPower: 'string',
      enterpriseId: 'number',
      exten: 'string',
      ibRecord: 'number',
      isBind: 'number',
      isOb: 'string',
      jitterBuffer: 'number',
      limit: 'number',
      obRecord: 'number',
      offset: 'number',
      ownerId: 'number',
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

