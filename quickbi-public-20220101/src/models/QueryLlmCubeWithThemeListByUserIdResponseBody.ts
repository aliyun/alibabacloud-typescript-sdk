// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryLlmCubeWithThemeListByUserIdResponseBodyResult } from "./QueryLlmCubeWithThemeListByUserIdResponseBodyResult";


export class QueryLlmCubeWithThemeListByUserIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 2EE822B***************F-F5B42DDADC12
   */
  requestId?: string;
  /**
   * @remarks
   * List of datasets and analysis themes.
   */
  result?: QueryLlmCubeWithThemeListByUserIdResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: The request was successful
   * - false: The request failed
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

