// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentThemeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The common scenarios. Valid values: report, infographic, and others.
   * 
   * @example
   * report
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
   * The description.
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
   * The tracing reference that points to the UUID of the source theme.
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
   * - derived
   * 
   * @example
   * custom
   */
  themeFrom?: string;
  /**
   * @remarks
   * The business identifier of the theme.
   * 
   * @example
   * 0f8b2c1d-****-****-****-9a3e5f7b1c2d
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
   * - design: contains only design.md.
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

export class ListDataAgentThemeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: ListDataAgentThemeResponseBodyData[];
  /**
   * @remarks
   * The error code returned when the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * NesLoKLEdIZrKhDT7I2gS****
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The current page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 3
   */
  total?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataAgentThemeResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
      totalPages: 'number',
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

