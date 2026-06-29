// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimpleUser } from "./SimpleUser";


export class SimpleTask extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the job is archived. Possible values:  
   * - false: Not archived.  
   * - true: Archived.
   * 
   * @example
   * true
   */
  archived?: boolean;
  /**
   * @remarks
   * Data archiving information.
   * 
   * @example
   * null
   * 
   * **if can be null:**
   * true
   */
  archivedInfos?: string;
  /**
   * @remarks
   * Creator information.
   */
  creator?: SimpleUser;
  /**
   * @remarks
   * UTC creation time.
   * 
   * @example
   * 2021-07-07 16:09:20
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * UTC time of the last update.
   * 
   * @example
   * 2021-07-07 16:09:20
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Label style.
   * 
   * @example
   * IMG
   */
  labelStyle?: string;
  /**
   * @remarks
   * Updated By information.
   */
  modifier?: SimpleUser;
  /**
   * @remarks
   * Auto triggered task ID.
   * 
   * @example
   * 123***5124
   */
  refTaskId?: string;
  /**
   * @remarks
   * Remarks.
   * 
   * @example
   * 备注
   * 
   * **if can be null:**
   * true
   */
  remark?: string;
  /**
   * @remarks
   * Current streaming node. Possible values:  
   * - MARK: Annotating.  
   * - CHECK: Checking.  
   * - FINISHED: Completed.
   * 
   * @example
   * MARK
   */
  stage?: string;
  /**
   * @remarks
   * Task Status. Possible values:  
   * - CREATED  
   * - SUCCESS
   * 
   * @example
   * CREATED
   */
  status?: string;
  /**
   * @remarks
   * List of job labels.
   * 
   * **if can be null:**
   * true
   */
  tags?: string[];
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * 15438***8306500608
   */
  taskId?: string;
  /**
   * @remarks
   * Job name.
   * 
   * @example
   * demo
   */
  taskName?: string;
  /**
   * @remarks
   * Task Type.
   * 
   * @example
   * NORMAL
   */
  taskType?: string;
  /**
   * @remarks
   * Template ID.
   * 
   * @example
   * 1529***348342353920
   * 
   * **if can be null:**
   * true
   */
  templateId?: string;
  /**
   * @remarks
   * Tenant ID.
   * 
   * @example
   * GA***W134
   */
  tenantId?: string;
  /**
   * @remarks
   * UUID.
   * 
   * @example
   * paiworkspace-****
   */
  UUID?: string;
  /**
   * @remarks
   * Pipeline nodes.
   */
  workflowNodes?: string[];
  static names(): { [key: string]: string } {
    return {
      archived: 'Archived',
      archivedInfos: 'ArchivedInfos',
      creator: 'Creator',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labelStyle: 'LabelStyle',
      modifier: 'Modifier',
      refTaskId: 'RefTaskId',
      remark: 'Remark',
      stage: 'Stage',
      status: 'Status',
      tags: 'Tags',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
      templateId: 'TemplateId',
      tenantId: 'TenantId',
      UUID: 'UUID',
      workflowNodes: 'WorkflowNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archived: 'boolean',
      archivedInfos: 'string',
      creator: SimpleUser,
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labelStyle: 'string',
      modifier: SimpleUser,
      refTaskId: 'string',
      remark: 'string',
      stage: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      taskName: 'string',
      taskType: 'string',
      templateId: 'string',
      tenantId: 'string',
      UUID: 'string',
      workflowNodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.modifier && typeof (this.modifier as any).validate === 'function') {
      (this.modifier as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.workflowNodes)) {
      $dara.Model.validateArray(this.workflowNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

