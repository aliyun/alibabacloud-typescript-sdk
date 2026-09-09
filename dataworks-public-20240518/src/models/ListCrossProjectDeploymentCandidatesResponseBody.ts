// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrossProjectDeploymentCandidatesResponseBodyDataDeploymentCandidates extends $dara.Model {
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
   * The commit time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1788739200000
   */
  commitTime?: number;
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
   * The candidate object ID.
   * 
   * @example
   * 1
   */
  objectId?: string;
  /**
   * @remarks
   * The candidate object name.
   * 
   * @example
   * object-1
   */
  objectName?: string;
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
   * The candidate object version.
   * 
   * @example
   * 7
   */
  objectVersion?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      commitTime: 'CommitTime',
      commitUser: 'CommitUser',
      objectId: 'ObjectId',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      objectVersion: 'ObjectVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      commitTime: 'number',
      commitUser: 'string',
      objectId: 'string',
      objectName: 'string',
      objectType: 'string',
      objectVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrossProjectDeploymentCandidatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of candidate objects from the source workspace that are available for cross-workspace deployment.
   * 
   * @example
   * [{"ObjectId":"1","ObjectType":"ODPS_SQL","ObjectName":"object-1","ObjectVersion":"7","ChangeType":"ADD","CommitUser":"operator","CommitTime":1788739200000}]
   */
  deploymentCandidates?: ListCrossProjectDeploymentCandidatesResponseBodyDataDeploymentCandidates[];
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
   * The request ID.
   * 
   * @example
   * 735894D1-D5E5-50B8-8A6D-041C90A98B23
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deploymentCandidates: 'DeploymentCandidates',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentCandidates: { 'type': 'array', 'itemType': ListCrossProjectDeploymentCandidatesResponseBodyDataDeploymentCandidates },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deploymentCandidates)) {
      $dara.Model.validateArray(this.deploymentCandidates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrossProjectDeploymentCandidatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business response.
   * 
   * @example
   * {"RequestId":"735894D1-D5E5-50B8-8A6D-041C90A98B23","PageNumber":1,"PageSize":10,"TotalCount":1,"DeploymentCandidates":[{"ObjectId":"1","ObjectType":"ODPS_SQL","ObjectName":"object-1","ObjectVersion":"7","ChangeType":"ADD","CommitUser":"operator","CommitTime":1788739200000}]}
   */
  data?: ListCrossProjectDeploymentCandidatesResponseBodyData;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot this API call.
   * 
   * @example
   * 735894D1-D5E5-50B8-8A6D-041C90A98B23
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListCrossProjectDeploymentCandidatesResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

