// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreloadRegionSDGResponseBodyDataResult } from "./PreloadRegionSdgresponseBodyDataResult";


export class PreloadRegionSDGResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The execution result of the synchronization request.
   */
  result?: PreloadRegionSDGResponseBodyDataResult;
  /**
   * @remarks
   * Indicates whether all tasks are successful. Valid values:
   * 
   * *   true: All tasks are successful.
   * *   false: Failed tasks exist.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      result: PreloadRegionSDGResponseBodyDataResult,
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

