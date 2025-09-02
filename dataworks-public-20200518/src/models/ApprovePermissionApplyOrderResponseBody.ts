// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApprovePermissionApplyOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the permission request order is processed.
   * 
   * @example
   * true
   */
  approveSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc1ec92159376****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      approveSuccess: 'ApproveSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

