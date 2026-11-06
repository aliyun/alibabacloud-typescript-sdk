// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgenticVpcEndpointResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint accepted for deletion.
   * 
   * @example
   * ep-7xvra4ad6619266ba43d
   */
  endpointId?: string;
  /**
   * @remarks
   * The deletion status. A value of DELETING only indicates that the asynchronous deletion request is accepted, not that the deletion in the cloud is complete.
   * 
   * @example
   * RELEASED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAgenticVpcEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deletion acceptance result. For duplicate requests, downstream errors are retained and idempotence is not guaranteed.
   */
  data?: DeleteAgenticVpcEndpointResponseBodyData;
  /**
   * @remarks
   * The error code returned when a request exception occurs.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteAgenticVpcEndpointResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
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

