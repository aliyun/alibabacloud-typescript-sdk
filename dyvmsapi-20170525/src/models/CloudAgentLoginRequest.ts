// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudAgentLoginRequest extends $dara.Model {
  /**
   * @remarks
   * 绑定电话
   * 
   * This parameter is required.
   * 
   * @example
   * 41008502
   */
  bindTel?: string;
  /**
   * @remarks
   * 取值 1.普通电话,2.分机,3.webrtc </br>说明：绑定类型如果是分机则必须先让分机电话设备注册成功。如果绑定类型为webrtc，就算调用接口成功也是无法呼叫的。如果在企业设置页面开启了自适应绑定电话类型，则系统会根据绑定的号码来找到对应的绑定类型，使用系统找到的绑定类型，此处的设置优先级低。
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bindType?: number;
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
   * 登录状态，1：置闲，2：置忙，默认为1
   * 
   * @example
   * 1
   */
  loginStatus?: number;
  /**
   * @remarks
   * 置忙描述
   * 
   * @example
   * description
   */
  pauseDescription?: string;
  static names(): { [key: string]: string } {
    return {
      bindTel: 'BindTel',
      bindType: 'BindType',
      cno: 'Cno',
      enterpriseId: 'EnterpriseId',
      loginStatus: 'LoginStatus',
      pauseDescription: 'PauseDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindTel: 'string',
      bindType: 'number',
      cno: 'string',
      enterpriseId: 'number',
      loginStatus: 'number',
      pauseDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

