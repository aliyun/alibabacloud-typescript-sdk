// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataAgentThemeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The common scenarios. Valid values: report, infographic, and others.
   * 
   * @example
   * custom
   */
  category?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 format.
   * 
   * @example
   * 2025-06-15T08:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The description of the theme.
   * 
   * @example
   * weekly report
   */
  description?: string;
  /**
   * @remarks
   * The modification time in ISO 8601 format.
   * 
   * @example
   * 2025-06-20T10:15:30Z
   */
  modifiedAt?: string;
  /**
   * @remarks
   * The theme tracing information. This field is currently not enabled.
   * 
   * @example
   * 6d1e3f9a-****-****-****-2b8c4e6f0a1d
   */
  referTo?: string;
  /**
   * @remarks
   * The source of the theme. Valid values:
   * 
   * - system
   * - custom
   * 
   * @example
   * custom
   */
  themeFrom?: string;
  /**
   * @remarks
   * The business ID of the theme.
   * 
   * @example
   * 0f8b2c1d***********9a3e5f7b1c2d
   */
  themeId?: string;
  /**
   * @remarks
   * The display name of the theme.
   * 
   * @example
   * weekly report
   */
  themeName?: string;
  /**
   * @remarks
   * The theme stage. Valid values:
   * 
   * - design: design.md only.
   * - template: complete and renderable.
   * 
   * @example
   * template
   */
  themeType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createdAt: 'CreatedAt',
      description: 'Description',
      modifiedAt: 'ModifiedAt',
      referTo: 'ReferTo',
      themeFrom: 'ThemeFrom',
      themeId: 'ThemeId',
      themeName: 'ThemeName',
      themeType: 'ThemeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createdAt: 'string',
      description: 'string',
      modifiedAt: 'string',
      referTo: 'string',
      themeFrom: 'string',
      themeId: 'string',
      themeName: 'string',
      themeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataAgentThemeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: DescribeDataAgentThemeResponseBodyData;
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
      data: DescribeDataAgentThemeResponseBodyData,
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

