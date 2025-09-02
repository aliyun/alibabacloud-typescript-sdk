// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableLevelResponseBodyTableLevelInfoLevelList extends $dara.Model {
  /**
   * @remarks
   * The description of the table level.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The table level ID.
   * 
   * @example
   * 123
   */
  levelId?: number;
  /**
   * @remarks
   * The table level type. Valid values: 1 and 2. The value 1 indicates the logical level. The value 2 indicates the physical level.
   * 
   * @example
   * 1
   */
  levelType?: number;
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
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 123
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      levelId: 'LevelId',
      levelType: 'LevelType',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      levelId: 'number',
      levelType: 'number',
      name: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableLevelResponseBodyTableLevelInfo extends $dara.Model {
  /**
   * @remarks
   * The list of table levels.
   */
  levelList?: ListTableLevelResponseBodyTableLevelInfoLevelList[];
  /**
   * @remarks
   * The total number of table levels returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      levelList: 'LevelList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelList: { 'type': 'array', 'itemType': ListTableLevelResponseBodyTableLevelInfoLevelList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.levelList)) {
      $dara.Model.validateArray(this.levelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableLevelResponseBody extends $dara.Model {
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
   * abc
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
  /**
   * @remarks
   * The information about the table levels.
   */
  tableLevelInfo?: ListTableLevelResponseBodyTableLevelInfo;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      tableLevelInfo: 'TableLevelInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      tableLevelInfo: ListTableLevelResponseBodyTableLevelInfo,
    };
  }

  validate() {
    if(this.tableLevelInfo && typeof (this.tableLevelInfo as any).validate === 'function') {
      (this.tableLevelInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

