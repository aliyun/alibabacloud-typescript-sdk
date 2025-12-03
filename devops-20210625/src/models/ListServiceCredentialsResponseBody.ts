// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceCredentialsResponseBodyServiceCredentials extends $dara.Model {
  /**
   * @example
   * 123
   */
  id?: number;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 123456789
   */
  ownerStaffId?: string;
  /**
   * @example
   * Codeup
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      ownerName: 'ownerName',
      ownerStaffId: 'ownerStaffId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ownerName: 'string',
      ownerStaffId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceCredentialsResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  serviceCredentials?: ListServiceCredentialsResponseBodyServiceCredentials[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      serviceCredentials: 'serviceCredentials',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      serviceCredentials: { 'type': 'array', 'itemType': ListServiceCredentialsResponseBodyServiceCredentials },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.serviceCredentials)) {
      $dara.Model.validateArray(this.serviceCredentials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

