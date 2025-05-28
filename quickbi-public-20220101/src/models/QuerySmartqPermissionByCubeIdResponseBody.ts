// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmartqPermissionByCubeIdResponseBodyResult } from "./QuerySmartqPermissionByCubeIdResponseBodyResult";


export class QuerySmartqPermissionByCubeIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 617277******************ABA47E31
   */
  requestId?: string;
  /**
   * @remarks
   * Basic information of the dataset.
   */
  result?: QuerySmartqPermissionByCubeIdResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: The request was successful.
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

