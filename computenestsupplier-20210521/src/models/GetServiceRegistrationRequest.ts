// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceRegistrationRequest extends $dara.Model {
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Service registration ID.
   * 
   * @example
   * sr-1b4aabc1c9eb4109****
   */
  registrationId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      registrationId: 'RegistrationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      registrationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

