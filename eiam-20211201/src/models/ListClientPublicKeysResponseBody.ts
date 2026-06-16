// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientPublicKeysResponseBodyClientPublicKeys extends $dara.Model {
  /**
   * @remarks
   * The algorithm type.
   * 
   * @example
   * RSA-2048
   */
  algorithmType?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the client public key.
   * 
   * @example
   * KEYEqDnDJhztiEAwSin7MZoxGcihzCAuxxxx
   */
  clientPublicKeyId?: string;
  /**
   * @remarks
   * The time when the key was created.
   * 
   * @example
   * 1722006052000
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the key was last used.
   * 
   * @example
   * 1762006052000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * Indicates whether the key is used with priority.
   * 
   * @example
   * true
   */
  primary?: boolean;
  /**
   * @remarks
   * The public key.
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
   * The status.
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
  /**
   * @remarks
   * The list of client public keys for the application.
   */
  clientPublicKeys?: ListClientPublicKeysResponseBodyClientPublicKeys[];
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

