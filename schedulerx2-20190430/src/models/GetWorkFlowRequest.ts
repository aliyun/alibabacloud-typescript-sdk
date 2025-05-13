// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * hxm.test
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a06d5ea-f576-4326-842c-fb14ea043d8d
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace.
   * 
   * @example
   * source
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The region information.
   * 
   * This parameter is required.
   * 
   * @example
   * public
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
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

