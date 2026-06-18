// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddOrganizationMemberResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * acc_123456789
   */
  accountId?: string;
  /**
   * @remarks
   * Indicates whether the seat was successfully assigned.
   * 
   * @example
   * true
   */
  seatAssigned?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      seatAssigned: 'SeatAssigned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      seatAssigned: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrganizationMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is empty if the request is successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: AddOrganizationMemberResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * None
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message. This parameter is empty if the request is successful.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 385C2BC3-52FC-564F-9312-97E5DFE1DFC0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddOrganizationMemberResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

