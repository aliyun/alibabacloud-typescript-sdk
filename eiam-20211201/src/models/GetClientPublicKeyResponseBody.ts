// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientPublicKeyResponseBodyClientPublicKey extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM 应用公私钥对算法类型 rsa2048、ecc256
   * 
   * @example
   * RSA-2048
   */
  algorithmType?: string;
  /**
   * @remarks
   * IDaaS EIAM 应用Id
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * IDaaS EIAM 应用公私钥对Id
   * 
   * @example
   * KEYEqDnDJhztiEAwSin7MZoxGcihzCAuxxxx
   */
  clientPublicKeyId?: string;
  /**
   * @remarks
   * IDaaS EIAM 应用公私钥对创建时间
   * 
   * @example
   * 1731305755000
   */
  createTime?: number;
  /**
   * @remarks
   * IDaaS EIAM 实例Id
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 1771305755000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * IDaaS EIAM 应用当前是否为首要使用的公私钥对
   * 
   * @example
   * true
   */
  primary?: boolean;
  /**
   * @remarks
   * IDaaS EIAM 应用公钥
   * 
   * @example
   * -----BEGIN PUBLIC KEY-----
   * MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmnWMdp9FU3vXljeIqpgR
   * 05E6jEgzIfKsFaLkv+07e2Lg8luTaJh8Q2nkbxdNpTfqBnMMyTgml88WktP45F78
   * La7hQtR3vz0Eu1yA92gXwD5Oob7ay4JYQZ0C80o2tB3FsbXG2jUvr31MNkf/0oBY
   * qUKK5Hnlk1TdrnZ5VkzgLGHKlj+NJHHF/57DbT64C2qpAWeKHAr9umJ8++0hKqG/
   * oRSOpb7oWK4t5c39ulp1j5JJ6cwqrKVCXvsHfWHywOHkcyus+ZNPTQvpwjRnEmRz
   * Vy3NWrjT7JlIa8vS1aUU+FxeFd2MLQzxFxquFLwi05su2faRexaeYwWW6IWAI3tX
   * twxxxxxx
   * -----END PUBLIC KEY-----
   */
  publicKey?: string;
  /**
   * @remarks
   * IDaaS EIAM 应用公私钥对状态
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmType: 'AlgorithmType',
      applicationId: 'ApplicationId',
      clientPublicKeyId: 'ClientPublicKeyId',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      lastUsedTime: 'LastUsedTime',
      primary: 'Primary',
      publicKey: 'PublicKey',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmType: 'string',
      applicationId: 'string',
      clientPublicKeyId: 'string',
      createTime: 'number',
      instanceId: 'string',
      lastUsedTime: 'number',
      primary: 'boolean',
      publicKey: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientPublicKeyResponseBody extends $dara.Model {
  clientPublicKey?: GetClientPublicKeyResponseBodyClientPublicKey;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientPublicKey: 'ClientPublicKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientPublicKey: GetClientPublicKeyResponseBodyClientPublicKey,
      requestId: 'string',
    };
  }

  validate() {
    if(this.clientPublicKey && typeof (this.clientPublicKey as any).validate === 'function') {
      (this.clientPublicKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

