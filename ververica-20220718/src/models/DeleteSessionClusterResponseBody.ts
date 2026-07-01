// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SessionCluster } from "./SessionCluster";


export class DeleteSessionClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data structure of the deleted session cluster.
   */
  data?: SessionCluster;
  /**
   * @remarks
   * This parameter is not empty and indicates the error code if \\`success\\` is \\`false\\`. This parameter is empty if \\`success\\` is \\`true\\`.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * This parameter is not empty and indicates the error message if \\`success\\` is \\`false\\`. This parameter is empty if \\`success\\` is \\`true\\`.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code. A value of 200 is returned. The \\`success\\` parameter indicates whether the request was successful.
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
   * CBC799F0-ABCD-1D30-8A4F-882ED4DD****
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

