// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppVersionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The URL of the code package. If you use the SAE console to upload the code package, take note of the following items:
   * 
   * *   You cannot download the URL. You must call the GetPackageVersionAccessableUrl operation to obtain the URL. The obtained URL is valid for 10 minutes.
   * *   SAE can retain the package up to 90 days. After 90 days, the URL cannot be returned or downloaded.
   */
  buildPackageUrl?: string;
  /**
   * @remarks
   * The download link of the WAR or JAR package. This parameter is returned when the **Type** parameter is set to **url**.
   * 
   * @example
   * 1590124643553
   */
  createTime?: string;
  /**
   * @remarks
   * The error code.
   * 
   * *   The **ErrorCode** parameter is not returned when the request succeeds.
   * *   The **ErrorCode** parameter is returned when the request fails. For more information, see **Error codes** in this topic.
   * 
   * @example
   * a0ce266c-d354-423a-9bd6-4083405a****
   */
  id?: string;
  /**
   * @remarks
   * The deployment method of the application. Valid values:
   * 
   * *   **image**: indicates that the application is deployed by using an image.
   * *   **url**: indicates that the application is deployed by using a code package.
   * 
   * @example
   * image
   */
  type?: string;
  /**
   * @remarks
   * The URL of the image.
   */
  warUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildPackageUrl: 'BuildPackageUrl',
      createTime: 'CreateTime',
      id: 'Id',
      type: 'Type',
      warUrl: 'WarUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildPackageUrl: 'string',
      createTime: 'string',
      id: 'string',
      type: 'string',
      warUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

