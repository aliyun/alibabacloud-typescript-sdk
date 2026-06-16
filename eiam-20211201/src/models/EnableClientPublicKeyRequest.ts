// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableClientPublicKeyRequest extends $dara.Model {
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
   * The ID of the ClientPublicKey for the application.
   * 
   * This parameter is required.
   * 
   * @example
   * KEYEqDnDJhztiEAwSin7MZoxGcihzCAuxxxx
   */
  clientPublicKeyId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a unique value from your client for this parameter. The value can contain only ASCII characters and must be no more than 64 characters in length. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
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
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientPublicKeyId: 'ClientPublicKeyId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientPublicKeyId: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

