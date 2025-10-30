// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsForSwimmingLaneResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 0099b7be-5f5b-4512-a7fc-56049ef1****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the baseline application.
   * 
   * @example
   * 8c573618-8d72-4407-baf4-f7b64b******
   */
  baseAppId?: string;
  /**
   * @remarks
   * The name of the baseline application.
   * 
   * @example
   * demo
   */
  baseAppName?: string;
  /**
   * @remarks
   * The ID of the MSE instance.
   * 
   * @example
   * mse-cn-hvm47******
   */
  mseAppId?: string;
  /**
   * @remarks
   * MSE Instance Name
   * 
   * @example
   * test
   */
  mseAppName?: string;
  /**
   * @remarks
   * The ID of the namespace to which the MSE instance belongs.
   * 
   * @example
   * sae-test
   */
  mseNamespaceId?: string;
  /**
   * @remarks
   * The canary tag configured for the application.
   */
  serviceTags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      baseAppId: 'BaseAppId',
      baseAppName: 'BaseAppName',
      mseAppId: 'MseAppId',
      mseAppName: 'MseAppName',
      mseNamespaceId: 'MseNamespaceId',
      serviceTags: 'ServiceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      baseAppId: 'string',
      baseAppName: 'string',
      mseAppId: 'string',
      mseAppName: 'string',
      mseNamespaceId: 'string',
      serviceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.serviceTags) {
      $dara.Model.validateMap(this.serviceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForSwimmingLaneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or the error code. Valid values:
   * 
   * *   **2xx**: The request was successful.
   * *   **3xx**: The request was redirected.
   * *   **4xx**: The request failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of applications.
   */
  data?: ListApplicationsForSwimmingLaneResponseBodyData[];
  /**
   * @remarks
   * The status code. Value values:
   * 
   * *   If the request was successful, **ErrorCode** is not returned.
   * *   If the request failed, the **ErrorCode** parameter is returned. For more information, see **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned. The following limits are imposed on the ID:
   * 
   * *   If the request was successful, **success** is returned.
   * *   An error code is returned when a request failed.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the trace. The ID is used to query the details of a request.
   * 
   * @example
   * 0a98a02315955564772843261e****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the list of application instances was queried. Valid values:
   * 
   * *   **true**: The instance groups were obtained.
   * *   **false**: The instance groups failed to be obtained.
   * 
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
      data: { 'type': 'array', 'itemType': ListApplicationsForSwimmingLaneResponseBodyData },
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

