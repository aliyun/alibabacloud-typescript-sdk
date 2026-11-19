// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLlmCubeWithThemeListByUserIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The dataset map.
   * - key: The dataset ID.
   * - value: The dataset name.
   * 
   * @example
   * {"4d93*******0-9614-c97adea37911":"common***value"}
   */
  cubeIds?: { [key: string]: string };
  /**
   * @remarks
   * The analysis theme map.
   * - key: The analysis theme ID. 
   * - value: The analysis theme name.
   * 
   * @example
   * {"9aefb3************75abecbe":"www*********eeee"}
   */
  themeIds?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      cubeIds: 'CubeIds',
      themeIds: 'ThemeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      themeIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.cubeIds) {
      $dara.Model.validateMap(this.cubeIds);
    }
    if(this.themeIds) {
      $dara.Model.validateMap(this.themeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLlmCubeWithThemeListByUserIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2EE822B***************F-F5B42DDADC12
   */
  requestId?: string;
  /**
   * @remarks
   * The list of datasets and analysis themes.
   */
  result?: QueryLlmCubeWithThemeListByUserIdResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryLlmCubeWithThemeListByUserIdResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

