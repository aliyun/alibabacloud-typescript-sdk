// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CdsFileShareLinkModel } from "./CdsFileShareLinkModel";


export class ModifyCdsFileShareLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The modification result. The value success indicates that the modification is successful. If the modification failed, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The data information.
   */
  data?: CdsFileShareLinkModel;
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
   * F7E4322D-D679-5ACB-A909-490D2F0E****
   */
  requestId?: string;
  /**
   * @remarks
   * The request status.
   * 
   * Valid values:
   * 
   * *   true: The request is successful.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false: The request fails.
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
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CdsFileShareLinkModel,
      message: 'string',
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

