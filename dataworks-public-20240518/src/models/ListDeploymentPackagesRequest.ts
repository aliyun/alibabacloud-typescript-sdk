// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentPackagesRequest extends $dara.Model {
  /**
   * @example
   * 110755000425****
   */
  creator?: string;
  /**
   * @example
   * 1593877765000
   */
  endCreateTime?: number;
  /**
   * @example
   * 1593877765000
   */
  endExecuteTime?: number;
  /**
   * @example
   * 2003****
   */
  executor?: string;
  /**
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10003
   */
  projectId?: number;
  /**
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
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

