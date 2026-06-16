// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableInternalAuthenticationSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the internal authentication source.
   * 
   * @example
   * ia_password
   */
  authenticationSourceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_111xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationSourceId: 'AuthenticationSourceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationSourceId: 'string',
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

