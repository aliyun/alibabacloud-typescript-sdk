// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowDagRequest extends $dara.Model {
  /**
   * @remarks
   * The definition of the workflow\\"s directed acyclic graph (DAG), including nodes and edges, as a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * {"nodes":[{"id":2300691},{"id":10518089},{"id":1758851}],"edges":[{"source":10518089,"target":1758851},{"source":10518089,"target":2300691}]}
   */
  dagJson?: string;
  /**
   * @remarks
   * The Application Group ID. You can find this ID on the **Application Management** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The Namespace ID. You can obtain the ID on the **Namespaces** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required only for specific third-party integrations.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      dagJson: 'DagJson',
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagJson: 'string',
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

