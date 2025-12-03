// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * username_password
   */
  serviceCredentialType?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCredentialType: 'serviceCredentialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCredentialType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

