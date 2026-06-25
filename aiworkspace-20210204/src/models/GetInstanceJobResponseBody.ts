// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC, in ISO 8601 format.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The instance ID. For example, if a job creates a custom role, this parameter returns the corresponding role ID.
   * 
   * @example
   * *****12qb3*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * CreateWorkspaceCustomRole-role-***abc*******
   */
  instanceJobId?: string;
  /**
   * @remarks
   * A message providing details about the job.
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
   * The status of the job. Valid values:
   * 
   * - Creating: The job is being created.
   * 
   * - Updating: The job is being updated.
   * 
   * - Deleting: The job is being deleted.
   * 
   * - Successful: The job completed successfully (a final state).
   * 
   * - Failed: The job failed (a final state).
   * 
   * @example
   * Successful
   */
  status?: string;
  /**
   * @remarks
   * The job type. Valid values:
   * 
   * - CreateWorkspaceCustomRole
   * 
   * - UpdateWorkspaceCustomRole
   * 
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

