// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateUdfArtifactResult } from "./UpdateUdfArtifactResult";


export class UpdateUdfArtifactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of updating the JAR file of the UDF.
   */
  data?: UpdateUdfArtifactResult;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
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
      data: UpdateUdfArtifactResult,
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

