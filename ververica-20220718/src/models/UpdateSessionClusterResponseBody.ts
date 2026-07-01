// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SessionCluster } from "./SessionCluster";


export class UpdateSessionClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data structure of the updated session cluster.
   */
  data?: SessionCluster;
  /**
   * @remarks
   * The error code returned if the request fails. This parameter is empty if the request is successful.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails. This parameter is empty if the request is successful.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code. The value is always 200. Use the \\`success\\` parameter to determine if the request was successful.
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
   * 1EF03B0C-F44F-47AD-BB48-D002D0F7B8C9
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
      data: SessionCluster,
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

