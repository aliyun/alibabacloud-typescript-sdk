// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetApplicationResourceServerIdentifierRequest extends $dara.Model {
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
   * A client token to ensure the idempotence of the request. Generate a unique value from your client for this parameter. The client token can contain only ASCII characters and cannot be longer than 64 characters. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/en/ecs/developer-reference/how-to-ensure-idempotence).
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
   * The unique identifier of the resource server.
   * 
   * This parameter is required.
   * 
   * @example
   * http://gateway.com
   */
  resourceServerIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      resourceServerIdentifier: 'ResourceServerIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientToken: 'string',
      instanceId: 'string',
      resourceServerIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

