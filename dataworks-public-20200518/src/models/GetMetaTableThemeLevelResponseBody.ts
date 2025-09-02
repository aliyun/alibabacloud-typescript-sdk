// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableThemeLevelResponseBodyEntityLevel extends $dara.Model {
  /**
   * @remarks
   * The description of the level.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the level.
   * 
   * @example
   * 1
   */
  levelId?: number;
  /**
   * @remarks
   * The name of the level.
   * 
   * @example
   * level1
   */
  name?: string;
  /**
   * @remarks
   * The type of the level. Valid values:
   * 
   * *   1: indicates the logical level.
   * *   2: indicates the physical level.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      levelId: 'LevelId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      levelId: 'number',
      name: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableThemeLevelResponseBodyEntityTheme extends $dara.Model {
  /**
   * @remarks
   * The level of the theme. Valid values:
   * 
   * *   1
   * *   2
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The name of the theme.
   * 
   * @example
   * theme1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent theme.
   * 
   * @example
   * 0
   */
  parentId?: number;
  /**
   * @remarks
   * The ID of the theme.
   * 
   * @example
   * 123
   */
  themeId?: number;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      name: 'Name',
      parentId: 'ParentId',
      themeId: 'ThemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      name: 'string',
      parentId: 'number',
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

export class GetMetaTableThemeLevelResponseBodyEntity extends $dara.Model {
  /**
   * @remarks
   * The information about the levels of the metatable.
   */
  level?: GetMetaTableThemeLevelResponseBodyEntityLevel[];
  /**
   * @remarks
   * The information about the themes of the metatable.
   */
  theme?: GetMetaTableThemeLevelResponseBodyEntityTheme[];
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      theme: 'Theme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: { 'type': 'array', 'itemType': GetMetaTableThemeLevelResponseBodyEntityLevel },
      theme: { 'type': 'array', 'itemType': GetMetaTableThemeLevelResponseBodyEntityTheme },
    };
  }

  validate() {
    if(Array.isArray(this.level)) {
      $dara.Model.validateArray(this.level);
    }
    if(Array.isArray(this.theme)) {
      $dara.Model.validateArray(this.theme);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableThemeLevelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  entity?: GetMetaTableThemeLevelResponseBodyEntity;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
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
   * The request ID. You can troubleshoot issues based on the ID.
   * 
   * @example
   * 1324afdsfde
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
      entity: 'Entity',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entity: GetMetaTableThemeLevelResponseBodyEntity,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.entity && typeof (this.entity as any).validate === 'function') {
      (this.entity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

