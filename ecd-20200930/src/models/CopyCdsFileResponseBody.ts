// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CopyCdsFileResponseBodyCopyCdsFileModel } from "./CopyCdsFileResponseBodyCopyCdsFileModel";


export class CopyCdsFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation result. The value success indicates that the operation is successful. If the operation failed, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The details about the file copying.
   */
  copyCdsFileModel?: CopyCdsFileResponseBodyCopyCdsFileModel;
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
   * The request ID.
   * 
   * @example
   * 93AD30C1-16B8-5C54-AD23-A51FF53F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      copyCdsFileModel: 'CopyCdsFileModel',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      copyCdsFileModel: CopyCdsFileResponseBodyCopyCdsFileModel,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.copyCdsFileModel && typeof (this.copyCdsFileModel as any).validate === 'function') {
      (this.copyCdsFileModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

