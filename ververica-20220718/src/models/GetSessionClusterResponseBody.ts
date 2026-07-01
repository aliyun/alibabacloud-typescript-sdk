// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SessionCluster } from "./SessionCluster";


export class GetSessionClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * This data structure represents the retrieved session cluster.
   */
  data?: SessionCluster;
  /**
   * @remarks
   * The error code. This parameter is returned when \\`success\\` is \\`false\\`. If \\`success\\` is \\`true\\`, this parameter is empty.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. This parameter is returned when \\`success\\` is \\`false\\`. If \\`success\\` is \\`true\\`, this parameter is empty.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code. This parameter is always 200. Use the success parameter to determine whether the request was successful.
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

