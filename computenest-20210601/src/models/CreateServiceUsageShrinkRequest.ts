// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceUsageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-d6fc5f949a9246xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The application information.
   */
  userInformationShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      serviceId: 'ServiceId',
      userInformationShrink: 'UserInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceId: 'string',
      userInformationShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

