// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group. You can find this ID on the **Application Management** page in the Console.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the namespace. You can find this ID on the **Namespace** page in the Console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * Required only for specific third-party scenarios.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The region ID.
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
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
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

