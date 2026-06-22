// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNodeGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 64EBE3F5-0498-1578-BEC0-6ACE364E912D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation to release the node group was successful. Valid values:
   * 
   * - true: The operation was successful.
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

