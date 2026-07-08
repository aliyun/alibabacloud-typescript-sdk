// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComfyWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message. If `Status` is `Failed`, this parameter provides the reason for the failure.
   * 
   * @example
   * conn failed!
   */
  message?: string;
  /**
   * @remarks
   * A list of missing nodes.
   */
  missingNodes?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The workflow status.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * wf_adb32aed-ccdc-42ae-b4d4-a21181ac8a5c
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      missingNodes: 'MissingNodes',
      requestId: 'RequestId',
      status: 'Status',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      missingNodes: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      status: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.missingNodes)) {
      $dara.Model.validateArray(this.missingNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

