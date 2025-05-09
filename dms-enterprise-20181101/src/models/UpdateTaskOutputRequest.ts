// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the node. You can call the [GetTaskInstanceRelation](https://help.aliyun.com/document_detail/424711.html) operation to query the node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 14059
   */
  nodeId?: string;
  /**
   * @remarks
   * The output variables for the task.
   * 
   * @example
   * {“outputs”:[{"row":0, "column":-1,"combiner":","}"extractMethod":"{\\"row\\":0,\\"column\\":-1,\\"combiner\\":\\",\\"}",   "variableName":"var", "description":"For demo" }]}
   */
  nodeOutput?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeOutput: 'NodeOutput',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      nodeOutput: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

