// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudWebcallRequest extends $dara.Model {
  /**
   * @remarks
   * 是否开启amd；自动应答检查（传真机等），1.开启 0.不开启 默认为0
   * 
   * @example
   * 0
   */
  amd?: number;
  /**
   * @remarks
   * 可传入企业中继号码或设置好的客户侧外显号码
   * 
   * @example
   * 41008502
   */
  clid?: string;
  /**
   * @remarks
   * 客户侧外显指定地区号码，优先级低于clid
   * 
   * @example
   * 010
   */
  clidAreaCode?: string;
  /**
   * @remarks
   * 客户侧外显号码组；使用clidGroup需要账号支持按标识路由，优先级低于clid
   * 
   * @example
   * clidGroup
   */
  clidGroup?: string;
  /**
   * @remarks
   * 指定本次外呼使用的客户侧外显号码集合，系统将根据号码调度策略选择可用号码进行外呼
   * 
   * @example
   * 41008502
   */
  clidList?: string;
  /**
   * @remarks
   * 外显导航标识
   * 
   * @example
   * 33
   */
  crnId?: string;
  /**
   * @remarks
   * 延迟时长；秒数，延迟多少秒呼叫 参数取值范围：0<=delay<=60 默认为0
   * 
   * @example
   * 20
   */
  delay?: number;
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
   * 过期时间，精确到s，yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  expirTime?: string;
  /**
   * @remarks
   * 回呼接通后进入的ivrId；如果不传此参数，使用后台配置的ivr
   * 
   * @example
   * 70
   */
  ivrId?: number;
  /**
   * @remarks
   * 多号码时呼叫延时；tel多个号码时，号码之间的呼叫延迟，最大120秒，默认0
   * 
   * @example
   * 0
   */
  multiTelDelay?: number;
  /**
   * @remarks
   * 多号码，是否每个号码呼叫都挂机推送；取值说明 0：只挂机推送一次； 1：每次呼叫都触发挂机推送；默认0
   * 
   * @example
   * 0
   */
  multiTelPush?: number;
  /**
   * @remarks
   * 请求唯一标识；说明：长度不超过300个字节。1个汉字是3字节。此字段保存到通话记录requestUniqueId字段，后续接口查询使用。一次接口请求造成的多次呼叫requestUniqueId相同；如果是加密的号码，需要URLEncode后传入
   * 
   * @example
   * requset12345
   */
  requestUniqueId?: string;
  /**
   * @remarks
   * 重试次数；最大5次，使用的企业需要开启webcall自动重试开关
   * 
   * @example
   * 2
   */
  retry?: number;
  /**
   * @remarks
   * 重试间隔，单位分钟，最小0分钟，最大59分钟
   * 
   * @example
   * 3
   */
  retryInterval?: number;
  /**
   * @remarks
   * 电话号码；固话带区号，手机不加0；固话带分机的以\\"-\\"分隔；支持多个号码，多个直接用英文逗号’,’分隔；传多个号码时，若前面的号码没接通则会呼叫后面的号码，若接通则不会呼叫；[加密外呼](../字段定义/接口部分/加密外呼号码加密规则.md)；如果是加密的号码，需要URLEncode后传入
   * 
   * This parameter is required.
   * 
   * @example
   * 13312345678
   */
  tel?: string;
  /**
   * @remarks
   * 呼叫客户超时时间；说明：参数取值范围 0<=timeout<=60；不传入，默认30(单位:s)
   * 
   * @example
   * 30
   */
  timeout?: number;
  /**
   * @remarks
   * 用户自定义字段；说明：长度不超过250个字节。1个汉字是3字节。此字段保存到通话记录userField字段，后续接口查询使用。该字段需“动态附带参数”paramNames有值时方可生效。
   * 
   * @example
   * UserField
   */
  userField?: string;
  /**
   * @remarks
   * 用哪种语言播放ivr提示音；1.普通话 2.粤语 4.标贝TTS 5.普通话-甜美女音 默认为1
   * 
   * @example
   * 1
   */
  vid?: string;
  static names(): { [key: string]: string } {
    return {
      amd: 'Amd',
      clid: 'Clid',
      clidAreaCode: 'ClidAreaCode',
      clidGroup: 'ClidGroup',
      clidList: 'ClidList',
      crnId: 'CrnId',
      delay: 'Delay',
      enterpriseId: 'EnterpriseId',
      expirTime: 'ExpirTime',
      ivrId: 'IvrId',
      multiTelDelay: 'MultiTelDelay',
      multiTelPush: 'MultiTelPush',
      requestUniqueId: 'RequestUniqueId',
      retry: 'Retry',
      retryInterval: 'RetryInterval',
      tel: 'Tel',
      timeout: 'Timeout',
      userField: 'UserField',
      vid: 'Vid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amd: 'number',
      clid: 'string',
      clidAreaCode: 'string',
      clidGroup: 'string',
      clidList: 'string',
      crnId: 'string',
      delay: 'number',
      enterpriseId: 'number',
      expirTime: 'string',
      ivrId: 'number',
      multiTelDelay: 'number',
      multiTelPush: 'number',
      requestUniqueId: 'string',
      retry: 'number',
      retryInterval: 'number',
      tel: 'string',
      timeout: 'number',
      userField: 'string',
      vid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

