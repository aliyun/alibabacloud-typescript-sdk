// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListXTelephonesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 绑定失败原因
   * 
   * @example
   * 绑定失败用户身份证黑名单
   */
  authMsg?: string;
  /**
   * @remarks
   * 绑定时间
   * 
   * @example
   * 2024-08-29 17:23:58
   */
  bindTime?: string;
  /**
   * @remarks
   * 购买时间
   * 
   * @example
   * 2024-08-29 17:23:58
   */
  buyTime?: string;
  /**
   * @remarks
   * 客户号码池key
   * 
   * @example
   * FC533e6eeb81f4400c87ef3745a21a1a
   */
  customerPoolKey?: string;
  /**
   * @remarks
   * 号码池名称
   * 
   * @example
   * 测试号码池
   */
  customerPoolName?: string;
  /**
   * @remarks
   * 释放时间
   * 
   * @example
   * 2024-08-29 17:23:58
   */
  releaseTime?: string;
  /**
   * @remarks
   * 短信开通状态：0 未开通 1已开通
   * 
   * @example
   * 0
   */
  smsStatus?: string;
  /**
   * @remarks
   * X号码
   * 
   * @example
   * 17816876546
   */
  telephone?: string;
  /**
   * @remarks
   * 号码状态：0 空闲中 1 调拨完成待购买 2购买完成待认证  3 实名认证中  4 实名认证成功  5 认证失败  6 解绑中 7 解绑失败 8已释放 99 超时释放
   * 
   * @example
   * 0
   */
  telephoneStatus?: string;
  /**
   * @remarks
   * 解绑时间
   * 
   * @example
   * 2024-08-29 17:23:58
   */
  unbindTime?: string;
  static names(): { [key: string]: string } {
    return {
      authMsg: 'AuthMsg',
      bindTime: 'BindTime',
      buyTime: 'BuyTime',
      customerPoolKey: 'CustomerPoolKey',
      customerPoolName: 'CustomerPoolName',
      releaseTime: 'ReleaseTime',
      smsStatus: 'SmsStatus',
      telephone: 'Telephone',
      telephoneStatus: 'TelephoneStatus',
      unbindTime: 'UnbindTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMsg: 'string',
      bindTime: 'string',
      buyTime: 'string',
      customerPoolKey: 'string',
      customerPoolName: 'string',
      releaseTime: 'string',
      smsStatus: 'string',
      telephone: 'string',
      telephoneStatus: 'string',
      unbindTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

