// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableThemeResponseBodyDataThemeList extends $dara.Model {
  /**
   * @remarks
   * The time when the table level was created.
   * 
   * @example
   * 123432343243
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * The creator of the table level.
   * 
   * @example
   * 123455
   */
  creator?: string;
  /**
   * @remarks
   * The level of the table folder. Valid values: 1 and 2. The value 1 indicates the first level. The value 2 indicates the second level.
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The name of the table level.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ancestor node ID.
   * 
   * @example
   * 122
   */
  parentId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The table theme ID.
   * 
   * @example
   * 123
   */
  themeId?: number;
  static names(): { [key: string]: string } {
    return {
      createTimeStamp: 'CreateTimeStamp',
      creator: 'Creator',
      level: 'Level',
      name: 'Name',
      parentId: 'ParentId',
      projectId: 'ProjectId',
      themeId: 'ThemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeStamp: 'number',
      creator: 'string',
      level: 'number',
      name: 'string',
      parentId: 'number',
      projectId: 'number',
      themeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableThemeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of table levels.
   */
  themeList?: ListTableThemeResponseBodyDataThemeList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      themeList: 'ThemeList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      themeList: { 'type': 'array', 'itemType': ListTableThemeResponseBodyDataThemeList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.themeList)) {
      $dara.Model.validateArray(this.themeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableThemeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: ListTableThemeResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1031203110005
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameters are invalid.
   */
  errorMessage?: string;
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
   * The request ID.
   * 
   * @example
   * abcde
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTableThemeResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

