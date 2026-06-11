// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmartqPermissionByCubeIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * test
   */
  cubeName?: string;
  /**
   * @remarks
   * Indicates whether the current user has permissions for Smart Q\\&A.
   */
  hasPerssion?: boolean;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      hasPerssion: 'HasPerssion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      cubeName: 'string',
      hasPerssion: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmartqPermissionByCubeIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 617277******************ABA47E31
   */
  requestId?: string;
  /**
   * @remarks
   * The basic information about the dataset.
   */
  result?: QuerySmartqPermissionByCubeIdResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
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
      result: QuerySmartqPermissionByCubeIdResponseBodyResult,
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

