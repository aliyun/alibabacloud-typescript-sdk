// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkFlowsRequest extends $dara.Model {
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
   * The source of the namespace. This parameter is required only for special sources.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The job status.
   * 
   * *   **0**: disables the job.
   * *   **1**: enables the routing policy.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * test3
   */
  workflowName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      status: 'Status',
      workflowName: 'WorkflowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      status: 'number',
      workflowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

