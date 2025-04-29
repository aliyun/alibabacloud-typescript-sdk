// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InvalidPhoneNumberFilterResponseBodyData } from "./InvalidPhoneNumberFilterResponseBodyData";


export class InvalidPhoneNumberFilterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **MobileNumberIllegal**: The phone number is invalid.
   * *   **EncyrptTypeIllegal**: The encryption type is invalid.
   * *   **MobileNumberTypeNotMatch**: The phone number does not match the encryption type.
   * *   **CarrierIllegal**: The carrier type is invalid.
   * *   **AuthCodeNotExist**: The authorization code does not exist.
   * *   **PortabilityNumberNotSupported**: Mobile number portability is not supported.
   * *   **Unknown**: An unknown exception occurred.
   * *   **AuthCodeAndApiNotMatch**: A system exception occurred.
   * *   **AuthCodeAndApiNotMatch**: The authorization code does not match the API operation.
   * *   **RequestFrequencyLimit**: Repeated queries for the same phone number at a high frequency within a short period of time are prohibited due to restrictions that are set by carriers. If this error code is returned, please try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Details about the returned entries.
   */
  data?: InvalidPhoneNumberFilterResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': InvalidPhoneNumberFilterResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

