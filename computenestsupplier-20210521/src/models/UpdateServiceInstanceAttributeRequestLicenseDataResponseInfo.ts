// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceInstanceAttributeRequestLicenseDataResponseInfo extends $dara.Model {
  /**
   * @remarks
   * Mock error code.
   * 
   * @example
   * EntityNotExist.Service
   */
  errorCode?: string;
  /**
   * @remarks
   * Mock error message.
   * 
   * @example
   * The provided parameter "ServiceId" is invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * if you want mock response, please open this option.
   * 
   * @example
   * true
   */
  updateResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      updateResponse: 'UpdateResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      updateResponse: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

