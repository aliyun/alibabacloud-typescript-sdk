// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelServiceRegistrationRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a unique value from your client. This value must be unique for each request and can contain only ASCII characters.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service review request.
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

