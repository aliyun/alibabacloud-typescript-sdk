// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentPackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account UID of the deployment package creator.
   * 
   * @example
   * 110755000425****
   */
  creator?: string;
  /**
   * @remarks
   * The maximum timestamp in milliseconds for the creation time of the deployment package.
   * 
   * @example
   * 1593877765000
   */
  endCreateTime?: number;
  /**
   * @remarks
   * The maximum timestamp in milliseconds for the execution start time of the deployment package.
   * 
   * @example
   * 1593877765000
   */
  endExecuteTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud account UID of the deployment package executor.
   * 
   * @example
   * 2003****
   */
  executor?: string;
  /**
   * @remarks
   * The keyword in the deployment package name. DataWorks supports fuzzy match. You can enter a keyword to query deployment packages whose names contain the keyword.
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
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the DataWorks console and go to the workspace configuration page to obtain the workspace ID. You must specify either this parameter or the ProjectIdentifier parameter to determine the DataWorks workspace for this API call.
   * 
   * @example
   * 10003
   */
  projectId?: number;
  /**
   * @remarks
   * The unique identifier of the DataWorks workspace, which is the English identifier displayed in the workspace switcher at the top of the DataStudio page. You must specify either this parameter or the ProjectId parameter to determine the DataWorks workspace for this API call.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The current status of the deployment package. Valid values:
   * - 0: The deployment package is ready.
   * - 1: The deployment package is published.
   * - 2: The deployment package failed to be published.
   * - 6: The deployment package is rejected.
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

