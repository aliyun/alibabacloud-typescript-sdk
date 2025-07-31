// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceTDEInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * 实例的自定义密钥。
   * 
   * 目前仅以下地域支持BYOK（Bring Your Own Key，用户可以自行管理和拥有加密密钥）：
   * - 华东1（杭州）
   * - 华东2（上海）
   * - 华北2（北京）
   * - 华南1（深圳）
   * - 中国（香港）
   * - 新加坡
   * - 马来西亚（吉隆坡）
   * 
   * > 支持BYOK，用户可以管理且拥有密钥，系统将返回用户的自定义密钥；不支持BYOK，用户不可管理密钥，系统将返回字符串`NoActiveBYOK`。
   * 
   * @example
   * 2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * 加密算法。
   * 
   * @example
   * aes-256-cbc
   */
  encryptorName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F4DD0E29-361B-42F2-9301-B0048CCCE5D6
   */
  requestId?: string;
  /**
   * @remarks
   * 指定待授权角色的全局资源描述符ARN（Alibaba Cloud Resource Name）信息。
   * 
   * @example
   * acs:ram::123456789012****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleARN?: string;
  /**
   * @remarks
   * The TDE status. Valid values:
   * 
   * *   **enabled**
   * *   **disabled**
   * 
   * @example
   * enabled
   */
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionKey: 'EncryptionKey',
      encryptorName: 'EncryptorName',
      requestId: 'RequestId',
      roleARN: 'RoleARN',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionKey: 'string',
      encryptorName: 'string',
      requestId: 'string',
      roleARN: 'string',
      TDEStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

