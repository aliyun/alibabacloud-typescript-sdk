// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group. You can find this ID on the **Application Management** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The dynamic parameters for the workflow instance. The value cannot exceed 1,000 bytes.
   * 
   * @example
   * test
   */
  instanceParameters?: string;
  /**
   * @remarks
   * The ID of the namespace. You can find this ID on the **Namespace** page in the console.
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
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 111
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceParameters: 'InstanceParameters',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceParameters: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

