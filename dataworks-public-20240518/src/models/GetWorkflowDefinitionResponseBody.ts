// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkflowDefinitionResponseBodyWorkflowDefinition } from "./GetWorkflowDefinitionResponseBodyWorkflowDefinition";


export class GetWorkflowDefinitionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2BDD628-8A21-5BD1-B930-1A2D5989XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the workflow.
   */
  workflowDefinition?: GetWorkflowDefinitionResponseBodyWorkflowDefinition;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workflowDefinition: 'WorkflowDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workflowDefinition: GetWorkflowDefinitionResponseBodyWorkflowDefinition,
    };
  }

  validate() {
    if(this.workflowDefinition && typeof (this.workflowDefinition as any).validate === 'function') {
      (this.workflowDefinition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

