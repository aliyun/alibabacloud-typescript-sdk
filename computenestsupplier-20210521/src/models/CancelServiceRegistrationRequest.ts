// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelServiceRegistrationRequest extends $dara.Model {
  /**
   * @remarks
   * Client token, used to ensure the idempotence of requests. Generate a unique value for this parameter from your client to ensure it is unique across different requests. ClientToken supports only ASCII characters.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  clientToken?: string;
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
   * This parameter is required.
   * 
   * @example
   * sr-540930183f93xxxxxx
   */
  registrationId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      registrationId: 'RegistrationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

