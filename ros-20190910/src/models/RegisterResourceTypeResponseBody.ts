// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterResourceTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the registration record. You can call the [ListResourceTypeRegistrations](https://help.aliyun.com/document_detail/2330740.html) operation to query registration records.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  registrationId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registrationId: 'RegistrationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrationId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

