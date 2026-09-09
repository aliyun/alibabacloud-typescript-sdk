// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrossProjectDeploymentEnvironmentsResponseBodyDataDeploymentEnvironments extends $dara.Model {
  /**
   * @remarks
   * The cross-workspace deployment environment ID.
   * 
   * @example
   * 101
   */
  deploymentEnvironmentId?: number;
  /**
   * @remarks
   * The environment name.
   * 
   * @example
   * environment-101
   */
  name?: string;
  /**
   * @remarks
   * The source project workspace ID.
   * 
   * @example
   * 10
   */
  sourceProjectId?: number;
  /**
   * @remarks
   * The environment status.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The target project workspace ID.
   * 
   * @example
   * 20
   */
  targetProjectId?: number;
  /**
   * @remarks
   * The target project workspace name.
   * 
   * @example
   * target
   */
  targetProjectName?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentEnvironmentId: 'DeploymentEnvironmentId',
      name: 'Name',
      sourceProjectId: 'SourceProjectId',
      status: 'Status',
      targetProjectId: 'TargetProjectId',
      targetProjectName: 'TargetProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentEnvironmentId: 'number',
      name: 'string',
      sourceProjectId: 'number',
      status: 'string',
      targetProjectId: 'number',
      targetProjectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrossProjectDeploymentEnvironmentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of enabled cross-workspace deployment environments in the source project.
   * 
   * @example
   * [{"DeploymentEnvironmentId":101,"Name":"environment-101","SourceProjectId":10,"TargetProjectId":20,"TargetProjectName":"target","Status":"Enabled"}]
   */
  deploymentEnvironments?: ListCrossProjectDeploymentEnvironmentsResponseBodyDataDeploymentEnvironments[];
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
      deploymentEnvironments: 'DeploymentEnvironments',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentEnvironments: { 'type': 'array', 'itemType': ListCrossProjectDeploymentEnvironmentsResponseBodyDataDeploymentEnvironments },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deploymentEnvironments)) {
      $dara.Model.validateArray(this.deploymentEnvironments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrossProjectDeploymentEnvironmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business response.
   * 
   * @example
   * {"RequestId":"735894D1-D5E5-50B8-8A6D-041C90A98B23","PageNumber":1,"PageSize":10,"TotalCount":1,"DeploymentEnvironments":[{"DeploymentEnvironmentId":101,"Name":"environment-101","SourceProjectId":10,"TargetProjectId":20,"TargetProjectName":"target","Status":"Enabled"}]}
   */
  data?: ListCrossProjectDeploymentEnvironmentsResponseBodyData;
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
      data: ListCrossProjectDeploymentEnvironmentsResponseBodyData,
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

