// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow. You can call the [ListTaskFlow](https://help.aliyun.com/document_detail/424565.html) or [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to query the task flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7***
   */
  dagId?: number;
  /**
   * @remarks
   * The position of the node on the Directed Acyclic Graph (DAG).
   * 
   * @example
   * test
   */
  graphParam?: string;
  /**
   * @remarks
   * The configuration of the node.
   * 
   * @example
   * test
   */
  nodeContent?: string;
  /**
   * @remarks
   * The name of the node that you want to create.
   * 
   * This parameter is required.
   * 
   * @example
   * zhttest
   */
  nodeName?: string;
  /**
   * @remarks
   * The output variables configured for the task.
   * 
   * @example
   * test
   */
  nodeOutput?: string;
  /**
   * @remarks
   * The type of the node that you want to create. For more information about the valid values for this parameter, see [NodeType parameter](https://help.aliyun.com/document_detail/424705.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 36
   */
  nodeType?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * >  To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see the "View information about the current tenant" section of the [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html) topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The time variables configured for the node.
   * 
   * @example
   * test
   */
  timeVariables?: string;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      graphParam: 'GraphParam',
      nodeContent: 'NodeContent',
      nodeName: 'NodeName',
      nodeOutput: 'NodeOutput',
      nodeType: 'NodeType',
      tid: 'Tid',
      timeVariables: 'TimeVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      graphParam: 'string',
      nodeContent: 'string',
      nodeName: 'string',
      nodeOutput: 'string',
      nodeType: 'string',
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

