// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskFlowTimeVariablesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task node. You can call the [GetTaskInstanceRelation](https://help.aliyun.com/document_detail/424711.html) operation to query the node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 43****
   */
  dagId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > :To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The time variables for the task flow.
   * 
   * This parameter is required.
   * 
   * @example
   * {"variables":[ {"name":"var", "pattern":"yyyy-MM-dd|+0m+0h-2d+0w+0M+1y"} ]}
   */
  timeVariables?: string;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      tid: 'Tid',
      timeVariables: 'TimeVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      tid: 'number',
      timeVariables: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

