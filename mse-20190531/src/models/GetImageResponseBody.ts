// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The full version number of the current instance image. The parameter is in the X.X.X.X format.
   * 
   * @example
   * 3.5.5.0
   */
  currentVersionFullShowName?: string;
  /**
   * @remarks
   * The URL of the changelog for the maximum version to which the current version can be upgraded.
   * 
   * @example
   * https://xxxxx
   */
  maxVersionChangelogUrl?: string;
  /**
   * @remarks
   * The code of the maximum version to which the current version can be upgraded.
   * 
   * @example
   * ZooKeeper_3_6_3
   */
  maxVersionCode?: string;
  /**
   * @remarks
   * The full number of the maximum version to which the current version can be upgraded.
   * 
   * @example
   * 3.6.3.0
   */
  maxVersionFullShowName?: string;
  static names(): { [key: string]: string } {
    return {
      currentVersionFullShowName: 'CurrentVersionFullShowName',
      maxVersionChangelogUrl: 'MaxVersionChangelogUrl',
      maxVersionCode: 'MaxVersionCode',
      maxVersionFullShowName: 'MaxVersionFullShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentVersionFullShowName: 'string',
      maxVersionChangelogUrl: 'string',
      maxVersionCode: 'string',
      maxVersionFullShowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data.
   */
  data?: GetImageResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25EA0A83-9007-4E87-808C-637BE1A****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetImageResponseBodyData,
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

