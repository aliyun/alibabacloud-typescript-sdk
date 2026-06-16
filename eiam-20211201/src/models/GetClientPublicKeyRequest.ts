// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientPublicKeyRequest extends $dara.Model {
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
   * The ID of the application\\"s ClientPublicKey.
   * 
   * This parameter is required.
   * 
   * @example
   * KEYEqDnDJhztiEAwSin7MZoxGcihzCAuxxxx
   */
  clientPublicKeyId?: string;
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
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientPublicKeyId: 'string',
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

