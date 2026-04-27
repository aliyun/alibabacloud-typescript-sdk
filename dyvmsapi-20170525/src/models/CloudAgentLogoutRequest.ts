// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudAgentLogoutRequest extends $dara.Model {
  /**
   * @remarks
   * 座席工号；取值3-10位正整数
   * 
   * This parameter is required.
   * 
   * @example
   * 1111
   */
  cno?: string;
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
   * 是否忽略重复下线报错；取值：0:不忽略 1:忽略 默认为0，不忽略
   * 
   * @example
   * 0
   */
  ignoreOffline?: number;
  /**
   * @remarks
   * 是否给座席发生kickout事件；取值： 0:不发送， 1:发送 默认为1，发送
   * 
   * @example
   * 1
   */
  isKickout?: number;
  /**
   * @remarks
   * 取值： 0:不解除绑定电话， 1:解除绑定电话 默认为0
   * 
   * @example
   * 0
   */
  removeBinding?: number;
  static names(): { [key: string]: string } {
    return {
      cno: 'Cno',
      enterpriseId: 'EnterpriseId',
      ignoreOffline: 'IgnoreOffline',
      isKickout: 'IsKickout',
      removeBinding: 'RemoveBinding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cno: 'string',
      enterpriseId: 'number',
      ignoreOffline: 'number',
      isKickout: 'number',
      removeBinding: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

