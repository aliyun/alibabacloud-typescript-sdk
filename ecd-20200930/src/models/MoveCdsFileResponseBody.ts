// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MoveCdsFileResponseBodyMoveCdsFileModel } from "./MoveCdsFileResponseBodyMoveCdsFileModel";


export class MoveCdsFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the modification. A value of success indicates that the modification is successful. If the modification failed, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The error message that is returned. This parameter is not returned if the value of Code is success.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The response object when you move a file.
   */
  moveCdsFileModel?: MoveCdsFileResponseBodyMoveCdsFileModel;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * Valid values:
   * 
   * *   <!-- -->
   * 
   *     true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   <!-- -->
   * 
   *     false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      moveCdsFileModel: 'MoveCdsFileModel',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      moveCdsFileModel: MoveCdsFileResponseBodyMoveCdsFileModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.moveCdsFileModel && typeof (this.moveCdsFileModel as any).validate === 'function') {
      (this.moveCdsFileModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

