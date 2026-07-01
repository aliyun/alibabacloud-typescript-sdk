// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateDeploymentDraftAsyncResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous ticket. Use this ID to query the result of the asynchronous operation.
   * 
   * @example
   * b3dcdb25-bf36-457d-92ba-a36077e8****
   */
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      ticketId: 'ticketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticketId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateDeploymentDraftAsyncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: ValidateDeploymentDraftAsyncResponseBodyData;
  /**
   * @remarks
   * The error code. This parameter is returned when the request fails. If the request is successful, this parameter is empty.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. This parameter is returned when the request fails. If the request is successful, this parameter is empty.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code. This is always 200. Use the success parameter to determine if the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ValidateDeploymentDraftAsyncResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
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

