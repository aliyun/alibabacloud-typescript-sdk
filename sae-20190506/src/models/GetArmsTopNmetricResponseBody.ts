// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetArmsTopNMetricResponseBodyData } from "./GetArmsTopNmetricResponseBodyData";


export class GetArmsTopNMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The following limits are imposed on the ID:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of applications.
   */
  data?: GetArmsTopNMetricResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * 3B763F98-0BA2-5C23-B6B8-558568D2C1C2
   * 
   * @example
   * 3B763F98-0BA2-5C23-B6B8-558568D2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the list of applications was obtained. The following limits are imposed on the ID:
   * 
   * *   **true**: The namespaces were obtained.
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetArmsTopNMetricResponseBodyData },
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

