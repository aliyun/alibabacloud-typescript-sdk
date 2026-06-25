// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsForSwimmingLaneResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 0099b7be-5f5b-4512-a7fc-56049ef1****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
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
   * The name of the MSE instance.
   * 
   * @example
   * test
   */
  mseAppName?: string;
  /**
   * @remarks
   * The ID of the namespace in which the MSE instance resides.
   * 
   * @example
   * sae-test
   */
  mseNamespaceId?: string;
  /**
   * @remarks
   * The canary tags configured for the application.
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
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: Success.
   * 
   * - **3xx**: Redirection.
   * 
   * - **4xx**: Client error.
   * 
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The application list.
   */
  data?: ListApplicationsForSwimmingLaneResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * - The parameter is an empty string if the request is successful.
   * 
   * - This parameter is returned if the request fails. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message. Valid values:
   * 
   * - **success** is returned if the request is successful.
   * 
   * - A specific error code is returned if the request fails.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The trace ID used to query the details of a request.
   * 
   * @example
   * 0a98a02315955564772843261e****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
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

