// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseWorkflowTodosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of closed to-do items. The value is 0 for idempotent repeated calls.
   * 
   * @example
   * 3
   */
  cancelledCount?: number;
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The workflow ID, returned as provided.
   * 
   * @example
   * wf-1
   */
  sourceWorkflowId?: string;
  static names(): { [key: string]: string } {
    return {
      cancelledCount: 'cancelledCount',
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      sourceWorkflowId: 'sourceWorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledCount: 'number',
      code: 'string',
      message: 'string',
      requestId: 'string',
      sourceWorkflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

