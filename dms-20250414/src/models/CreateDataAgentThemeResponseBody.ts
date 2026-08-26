// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentThemeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The OSS key of the theme file (dart/{uid}/{theme_id}/theme.zip, verified to exist before being stored in the database).
   */
  filePath?: string;
  /**
   * @remarks
   * The business identifier of the theme.
   * 
   * @example
   * 0f8b2c1d************9a3e5f7b1c2d
   */
  themeId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      themeId: 'ThemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      themeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAgentThemeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: CreateDataAgentThemeResponseBodyData;
  /**
   * @remarks
   * The error code returned when the request is abnormal.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDataAgentThemeResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
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

