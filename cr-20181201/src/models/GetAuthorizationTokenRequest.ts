// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the temporary credential, in hours. Valid values: 1 to 24.
   * 
   * @example
   * 1
   */
  expiresInHours?: number;
  /**
   * @remarks
   * The repository instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcvaduwb
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      expiresInHours: 'ExpiresInHours',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresInHours: 'number',
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

