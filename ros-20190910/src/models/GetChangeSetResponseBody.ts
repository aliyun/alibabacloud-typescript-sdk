// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetChangeSetResponseBodyLog } from "./GetChangeSetResponseBodyLog";
import { GetChangeSetResponseBodyParameters } from "./GetChangeSetResponseBodyParameters";
import { GetChangeSetResponseBodyTags } from "./GetChangeSetResponseBodyTags";


export class GetChangeSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * @example
   * 4c11658d-bd47-4dd0-ba64-727edc62****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The name of the change set.
   * 
   * @example
   * ChangeSet_template
   */
  changeSetName?: string;
  /**
   * @remarks
   * The type of the change set.
   * 
   * @example
   * UPDATE
   */
  changeSetType?: string;
  /**
   * @remarks
   * The changes of the change set.
   */
  changes?: { [key: string]: any }[];
  /**
   * @remarks
   * The time when the change set was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-01T02:20:56
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the change set.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether rollback was performed when the stack failed to be created or updated.
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The execution status of the change set.
   * 
   * @example
   * AVAILABLE
   */
  executionStatus?: string;
  /**
   * @remarks
   * The output logs of the change set.
   */
  log?: GetChangeSetResponseBodyLog;
  /**
   * @remarks
   * The parameters of the stack.
   */
  parameters?: GetChangeSetResponseBodyParameters[];
  /**
   * @remarks
   * The region ID of the change set.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3766EE04-76DD-50F9-9C23-3AF136CD5708
   */
  requestId?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the stack with which the change set is associated.
   * 
   * @example
   * a486fc19-ebb7-4ce9-a70b-554a7c3d****
   */
  stackId?: string;
  /**
   * @remarks
   * The name of the stack with which the change set is associated.
   * 
   * @example
   * stack_2021-10-13
   */
  stackName?: string;
  /**
   * @remarks
   * The status of the change set.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the change set is in its current state.
   * 
   * @example
   * too many changes.
   */
  statusReason?: string;
  tags?: GetChangeSetResponseBodyTags[];
  /**
   * @remarks
   * The template body of the change set.
   * 
   * > This parameter takes effect only if you set ShowTemplate to true.
   * 
   * @example
   * {"ROSTemplateFormatVersion": "2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The timeout period that is specified for the stack creation or update operation.
   * 
   * @example
   * 60
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      changeSetName: 'ChangeSetName',
      changeSetType: 'ChangeSetType',
      changes: 'Changes',
      createTime: 'CreateTime',
      description: 'Description',
      disableRollback: 'DisableRollback',
      executionStatus: 'ExecutionStatus',
      log: 'Log',
      parameters: 'Parameters',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      stackId: 'StackId',
      stackName: 'StackName',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
      templateBody: 'TemplateBody',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      changeSetName: 'string',
      changeSetType: 'string',
      changes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      createTime: 'string',
      description: 'string',
      disableRollback: 'boolean',
      executionStatus: 'string',
      log: GetChangeSetResponseBodyLog,
      parameters: { 'type': 'array', 'itemType': GetChangeSetResponseBodyParameters },
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': GetChangeSetResponseBodyTags },
      templateBody: 'string',
      timeoutInMinutes: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.changes)) {
      $dara.Model.validateArray(this.changes);
    }
    if(this.log && typeof (this.log as any).validate === 'function') {
      (this.log as any).validate();
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

