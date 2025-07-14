// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWarningEventMetricResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the application.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * 10
   */
  warningCount?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
      regionId: 'RegionId',
      warningCount: 'WarningCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
      regionId: 'string',
      warningCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningEventMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of Warning events.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 3B763F98-0BA2-5C23-B6B8-558568D2C1C2
   */
  data?: GetWarningEventMetricResponseBodyData[];
  /**
   * @remarks
   * The additional information that is returned. The following limits are imposed on the ID:
   * 
   * *   success: If the call is successful, **success** is returned.
   * *   An error code: If the call fails, an error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3B763F98-0BA2-5C23-B6B8-558568D2****
   */
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': GetWarningEventMetricResponseBodyData },
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

