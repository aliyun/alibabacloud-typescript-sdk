// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAppVersionsResponseBodyData } from "./ListAppVersionsResponseBodyData";


export class ListAppVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the historical versions of the application were obtained. Valid values:
   * 
   * *   **true**: indicates that the historical versions of the application were obtained.
   * *   **false**: indicates that the historical versions of the application could not be obtained.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the versions.
   */
  data?: ListAppVersionsResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: indicates that the request was successful.
   * *   **3xx**: indicates that the request was redirected.
   * *   **4xx**: indicates that the request was invalid.
   * *   **5xx**: indicates that a server error occurred.
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The information about the versions.
   * 
   * @example
   * 01CF26C7-00A3-4AA6-BA76-7E95F2A3****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppVersionsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

