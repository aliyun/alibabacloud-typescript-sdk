// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComfyWorkflowResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * conn failed!
   */
  message?: string;
  missingNodes?: string[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * on
   */
  status?: string;
  /**
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

