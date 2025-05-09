// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceExecutionStatusResponseBodyResourceExecutionStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the execution.
   * 
   * @example
   * exec-6be6d6ff805349d9ac13
   */
  executionId?: string;
  /**
   * @remarks
   * The time when the execution started running.
   * 
   * @example
   * 2020-11-13T08:48:34Z
   */
  executionTime?: string;
  /**
   * @remarks
   * The output of the template.
   * 
   * @example
   * { 				"commandOutput": "hello\\n" 			}
   */
  outputs?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * i-bp1e1bxxxxxxxxxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The status of the execution.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      executionTime: 'ExecutionTime',
      outputs: 'Outputs',
      resourceId: 'ResourceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      executionTime: 'string',
      outputs: 'string',
      resourceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

