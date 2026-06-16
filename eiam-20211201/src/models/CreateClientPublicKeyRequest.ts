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
   * A client token used to ensure the idempotence of the request. Generate a unique value from your client for this parameter. The ClientToken value can contain only ASCII characters and must be no more than 64 characters long. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/en/ecs/developer-reference/how-to-ensure-idempotence).
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
   * The public key in the Subject Public Key Info (SPKI) type of the Privacy-Enhanced Mail (PEM) format. The key must start with -----BEGIN PUBLIC KEY----- and end with -----END PUBLIC KEY-----.
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

