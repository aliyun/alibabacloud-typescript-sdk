// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The application group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hxm.test
   */
  groupId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a06d5ea-f576-4326-842c-fb14ea043d8d
   */
  namespace?: string;
  /**
   * @remarks
   * The namespace source.
   * 
   * @example
   * source
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * public
   */
  regionId?: string;
  /**
   * @remarks
   * The workflow ID.
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

