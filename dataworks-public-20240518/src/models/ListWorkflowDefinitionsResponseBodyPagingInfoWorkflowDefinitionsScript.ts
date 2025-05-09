// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime } from "./ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime";


export class ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScript extends $dara.Model {
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 698002781368644XXXX
   */
  id?: number;
  /**
   * @remarks
   * The script path.
   * 
   * @example
   * XX/OpenAPI_test/workflow_test/OpenAPI_test_workflow_Demo
   */
  path?: string;
  /**
   * @remarks
   * The runtime.
   */
  runtime?: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      path: 'string',
      runtime: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime,
    };
  }

  validate() {
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

