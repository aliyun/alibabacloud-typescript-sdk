// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DeployDeploymentDraftAsyncResponseBodyData extends $dara.Model {
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

export class DeployDeploymentDraftAsyncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the asynchronous operation. This parameter is returned when the request is successful.
   */
  data?: DeployDeploymentDraftAsyncResponseBodyData;
  /**
   * @remarks
   * - If success is false, an error code is returned.
   * 
   * - If success is true, an empty value is returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * - If success is false, an error message is returned.
   * 
   * - If success is true, an empty value is returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code of the business operation. A value other than 200 indicates that the operation failed.
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
      data: DeployDeploymentDraftAsyncResponseBodyData,
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

