// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * AAAAAYChudnQUoBH+mGWFpb6oP0=
   */
  clientToken?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-39f4f251e94843xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the applicant.
   */
  userInformation?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      serviceId: 'ServiceId',
      userInformation: 'UserInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceId: 'string',
      userInformation: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.userInformation) {
      $dara.Model.validateMap(this.userInformation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

