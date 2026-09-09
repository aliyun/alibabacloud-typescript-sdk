// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrossProjectDeploymentCandidatesRequest extends $dara.Model {
  /**
   * @remarks
   * The change type.
   * 
   * @example
   * ADD
   */
  changeType?: string;
  /**
   * @remarks
   * The start of the commit time range. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1788739200000
   */
  commitTimeFrom?: number;
  /**
   * @remarks
   * The end of the commit time range. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1788825599999
   */
  commitTimeTo?: number;
  /**
   * @remarks
   * The committer.
   * 
   * @example
   * operator
   */
  commitUser?: string;
  /**
   * @remarks
   * The cross-workspace deployment environment ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 101
   */
  deploymentEnvironmentId?: number;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * object
   */
  keyword?: string;
  /**
   * @remarks
   * The candidate object ID.
   * 
   * @example
   * 1
   */
  objectId?: string;
  /**
   * @remarks
   * The candidate object type.
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
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      commitTimeFrom: 'CommitTimeFrom',
      commitTimeTo: 'CommitTimeTo',
      commitUser: 'CommitUser',
      deploymentEnvironmentId: 'DeploymentEnvironmentId',
      keyword: 'Keyword',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      commitTimeFrom: 'number',
      commitTimeTo: 'number',
      commitUser: 'string',
      deploymentEnvironmentId: 'number',
      keyword: 'string',
      objectId: 'string',
      objectType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

