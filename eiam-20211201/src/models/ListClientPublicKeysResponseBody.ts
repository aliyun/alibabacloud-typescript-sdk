// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientPublicKeysResponseBodyClientPublicKeys extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM 应用ClientPublicKey的算法类型 rsa2048、ecc256
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
   * IDaaS EIAM 应用ClientPublicKey的Id
   * 
   * @example
   * KEYEqDnDJhztiEAwSin7MZoxGcihzCAuxxxx
   */
  clientPublicKeyId?: string;
  /**
   * @remarks
   * IDaaS EIAM 应用ClientPublicKey的创建时间
   * 
   * @example
   * 1722006052000
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
   * 1762006052000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * IDaaS EIAM 应用当前是否为首要使用的应用ClientPublicKey的
   * 
   * @example
   * true
   */
  primary?: boolean;
  /**
   * @remarks
   * IDaaS EIAM 应用ClientPublicKey的公钥
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
   * IDaaS EIAM 应用ClientPublicKey的状态
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

export class ListClientPublicKeysResponseBody extends $dara.Model {
  clientPublicKeys?: ListClientPublicKeysResponseBodyClientPublicKeys[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于下一次翻页查询。
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clientPublicKeys: 'ClientPublicKeys',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientPublicKeys: { 'type': 'array', 'itemType': ListClientPublicKeysResponseBodyClientPublicKeys },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clientPublicKeys)) {
      $dara.Model.validateArray(this.clientPublicKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

