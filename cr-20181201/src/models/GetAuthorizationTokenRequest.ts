// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationTokenRequest extends $dara.Model {
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
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

