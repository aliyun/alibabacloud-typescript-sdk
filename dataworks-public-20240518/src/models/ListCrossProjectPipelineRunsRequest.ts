// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrossProjectPipelineRunsRequest extends $dara.Model {
  /**
   * @remarks
   * The start of the creation time range. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1788739200000
   */
  createTimeFrom?: number;
  /**
   * @remarks
   * The end of the creation time range. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1788825599999
   */
  createTimeTo?: number;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * creator
   */
  creator?: string;
  /**
   * @remarks
   * The cross-workspace publish environment ID.
   * 
   * @example
   * 101
   */
  deploymentEnvironmentId?: number;
  /**
   * @remarks
   * The executor.
   * 
   * @example
   * executor
   */
  executor?: string;
  /**
   * @remarks
   * The publish object ID.
   * 
   * @example
   * 1
   */
  objectId?: string;
  /**
   * @remarks
   * The publish object type.
   * 
   * @example
   * ODPS_SQL
   */
  objectType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  projectId?: number;
  /**
   * @remarks
   * The publish flow status. Valid values:
   * - Building: Building.
   * - Ready: Ready and waiting for execution.
   * - Running: Running.
   * - Termination: Terminated.
   * - Success: Succeeded.
   * - Fail: Failed.
   * 
   * @example
   * Ready
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeFrom: 'CreateTimeFrom',
      createTimeTo: 'CreateTimeTo',
      creator: 'Creator',
      deploymentEnvironmentId: 'DeploymentEnvironmentId',
      executor: 'Executor',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeFrom: 'number',
      createTimeTo: 'number',
      creator: 'string',
      deploymentEnvironmentId: 'number',
      executor: 'string',
      objectId: 'string',
      objectType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

