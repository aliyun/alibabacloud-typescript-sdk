// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentPackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the deployment package creator.
   * 
   * @example
   * 110755000425****
   */
  creator?: string;
  /**
   * @remarks
   * The maximum millisecond timestamp for when the deployment package was created.
   * 
   * @example
   * 1593877765000
   */
  endCreateTime?: number;
  /**
   * @remarks
   * The maximum millisecond timestamp for when the deployment package started executing.
   * 
   * @example
   * 1593877765000
   */
  endExecuteTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the deployment package executor.
   * 
   * @example
   * 2003****
   */
  executor?: string;
  /**
   * @remarks
   * The keyword in the deployment package name. DataWorks supports fuzzy matching, meaning you can enter a keyword to query for deployment packages that contain it.
   * 
   * @example
   * abc
   */
  keyword?: string;
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
   * The number of records per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console and go to the workspace configuration page to query the ID. You must configure either this parameter or the ProjectIdentifier parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * 10003
   */
  projectId?: number;
  /**
   * @remarks
   * The unique identifier of the DataWorks workspace, which is the identifier at the top of the Data Studio page where you switch workspaces. Either this parameter or ProjectId must be specified to determine which DataWorks workspace this API call operates on.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The status of the deployment package. Valid values:
   * 
   * *   0: It is ready.
   * *   1: It was successfully deployed.
   * *   2: It failed to be deployed.
   * *   6: It was rejected.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      endCreateTime: 'EndCreateTime',
      endExecuteTime: 'EndExecuteTime',
      executor: 'Executor',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      endCreateTime: 'number',
      endExecuteTime: 'number',
      executor: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

