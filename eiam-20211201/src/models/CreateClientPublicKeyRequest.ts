// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientPublicKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The algorithm type.
   * 
   * This parameter is required.
   * 
   * @example
   * RSA-2048
   */
  algorithmType?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate a parameter value, but make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see References: [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
   * 
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The public key in PEM format. The key must be of the SPKI type, starting with "-----BEGIN PUBLIC KEY-----" and ending with "-----END PUBLIC KEY-----".
   * 
   * This parameter is required.
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
  static names(): { [key: string]: string } {
    return {
      algorithmType: 'AlgorithmType',
      applicationId: 'ApplicationId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      publicKey: 'PublicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmType: 'string',
      applicationId: 'string',
      clientToken: 'string',
      instanceId: 'string',
      publicKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

