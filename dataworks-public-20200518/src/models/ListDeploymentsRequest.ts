// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the user who creates the deployment packages.
   * 
   * @example
   * 20030****
   */
  creator?: string;
  /**
   * @remarks
   * The time when the deployment packages to be queried are created. This value must be a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1593877765000
   */
  endCreateTime?: number;
  /**
   * @remarks
   * The time when the deployment packages are run. This value must be a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1593877765000
   */
  endExecuteTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the user who runs the deployment packages.
   * 
   * @example
   * 2003****
   */
  executor?: string;
  /**
   * @remarks
   * The keyword that is contained in the names of the deployment packages. A fuzzy search is supported. After you enter a keyword, all deployment packages whose names contain the keyword are displayed.
   * 
   * @example
   * hello
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the workspace ID.
   * 
   * You must configure either this parameter or the ProjectIdentifier parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the workspace name.
   * 
   * You must configure either this parameter or the ProjectId parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The status of the deployment packages. Valid values:
   * 
   * *   0: The deployment packages are ready.
   * *   1: The deployment packages are deployed.
   * *   2: The deployment packages fail to be deployed.
   * *   6: The deployment packages are rejected.
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

