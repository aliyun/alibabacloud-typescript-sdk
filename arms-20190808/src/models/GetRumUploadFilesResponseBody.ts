// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumUploadFilesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * test.js.map
   */
  fileName?: string;
  /**
   * @remarks
   * The time when the file was last modified. The value is a timestamp.
   * 
   * @example
   * 1682863151000
   */
  lastModifiedTime?: any;
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * @example
   * 1000
   */
  size?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * cxxxerfewrfwerfwerffvrt
   */
  uuid?: string;
  /**
   * @remarks
   * The version number of the file.
   * 
   * @example
   * 1.0.0
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      lastModifiedTime: 'LastModifiedTime',
      size: 'Size',
      uuid: 'Uuid',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      lastModifiedTime: 'any',
      size: 'string',
      uuid: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRumUploadFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful. Other status codes indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The queried files.
   */
  data?: GetRumUploadFilesResponseBodyData[];
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
   * The error message returned if the request failed.
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
   * 2983BEF7-4A0D-47A2-94A2-8E9C5E63****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetRumUploadFilesResponseBodyData },
      httpStatusCode: 'number',
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

