// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataMaskingRuleShrinkRequest extends $dara.Model {
  /**
   * @example
   * AES_256_GCM
   */
  encAlgorithm?: string;
  /**
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  encryptionKeyId?: string;
  /**
   * @example
   * client_key
   */
  encryptionKeyMode?: string;
  /**
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @example
   * 2145953410000
   */
  expireTime?: number;
  /**
   * @example
   * PRESERVE
   */
  expireTimeOperation?: string;
  /**
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @example
   * 5
   */
  productId?: number;
  /**
   * @example
   * 1001
   */
  riskHandleId?: number;
  subRuleListShrink?: string;
  userListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      encAlgorithm: 'EncAlgorithm',
      encryptionKeyId: 'EncryptionKeyId',
      encryptionKeyMode: 'EncryptionKeyMode',
      engineType: 'EngineType',
      expireTime: 'ExpireTime',
      expireTimeOperation: 'ExpireTimeOperation',
      instanceId: 'InstanceId',
      lang: 'Lang',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskHandleId: 'RiskHandleId',
      subRuleListShrink: 'SubRuleList',
      userListShrink: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encAlgorithm: 'string',
      encryptionKeyId: 'string',
      encryptionKeyMode: 'string',
      engineType: 'string',
      expireTime: 'number',
      expireTimeOperation: 'string',
      instanceId: 'string',
      lang: 'string',
      productCode: 'string',
      productId: 'number',
      riskHandleId: 'number',
      subRuleListShrink: 'string',
      userListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

