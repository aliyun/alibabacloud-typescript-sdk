// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppVersionsResponseBodyAppVersions extends $dara.Model {
  /**
   * @remarks
   * The image ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * m-f8z0dfa96luomqly****
   */
  imageId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * V-Ray
   */
  name?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * v1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of application versions.
   */
  appVersions?: GetAppVersionsResponseBodyAppVersions[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * true
   * 
   * false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appVersions: 'AppVersions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersions: { 'type': 'array', 'itemType': GetAppVersionsResponseBodyAppVersions },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appVersions)) {
      $dara.Model.validateArray(this.appVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

