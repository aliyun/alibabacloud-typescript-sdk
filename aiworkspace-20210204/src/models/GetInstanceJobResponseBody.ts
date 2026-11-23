// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is in UTC and follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Instance ID of the task instance. For example, in a task that creates a custom role, this is instance ID of the generated role.
   * 
   * @example
   * *****12qb3*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * CreateWorkspaceCustomRole-role-***abc*******
   */
  instanceJobId?: string;
  /**
   * @remarks
   * The detailed description of the task.
   * 
   * @example
   * workspace-example
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - Creating: The task is being created.
   * - Updating: The task is being updated.
   * - Deleting: The task is being deleted.
   * - Successful: The task succeeded. This is a desired state.
   * - Failed: The task failed. This is a desired state.
   * 
   * @example
   * Successful
   */
  status?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - CreateWorkspaceCustomRole
   * - UpdateWorkspaceCustomRole
   * - DeleteWorkspaceCustomRole
   * 
   * @example
   * CreateWorkspaceCustomRole
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      instanceId: 'InstanceId',
      instanceJobId: 'InstanceJobId',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      instanceId: 'string',
      instanceJobId: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

