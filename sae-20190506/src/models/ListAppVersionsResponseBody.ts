// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppVersionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The download URL of the code package. If you uploaded the package using SAE, note the following:
   * 
   * - This URL is not a direct download link. You must call the GetPackageVersionAccessableUrl operation to obtain a downloadable URL that is valid for 10 minutes.
   * 
   * - SAE stores the package for a maximum of 90 days. After this period, the URL is not returned and the package cannot be downloaded.
   */
  buildPackageUrl?: string;
  /**
   * @remarks
   * The time when the version was created.
   * 
   * @example
   * 1590124643553
   */
  createTime?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * a0ce266c-d354-423a-9bd6-4083405a****
   */
  id?: string;
  /**
   * @remarks
   * The application type. Valid values:
   * 
   * - **image**: The application is deployed using an image.
   * 
   * - **url**: The application is deployed using a code package.
   * 
   * @example
   * image
   */
  type?: string;
  /**
   * @remarks
   * The URL of the WAR package.
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
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: The call is successful.
   * 
   * - **3xx**: The call is redirected.
   * 
   * - **4xx**: A request error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The version information.
   */
  data?: ListAppVersionsResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - This parameter is returned if the request fails. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information about the call.
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
   * 01CF26C7-00A3-4AA6-BA76-7E95F2A3****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the historical versions of the application were successfully queried. Valid values:
   * 
   * - **true**: The query was successful.
   * 
   * - **false**: The query failed.
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

