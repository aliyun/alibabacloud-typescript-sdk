// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleasePostInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Indicates whether the release was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  releaseStatus?: boolean;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * EE316A19-xxxx-5043-9DF1-C04458ABC570
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
      httpStatusCode: 'HttpStatusCode',
      releaseStatus: 'ReleaseStatus',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      releaseStatus: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

