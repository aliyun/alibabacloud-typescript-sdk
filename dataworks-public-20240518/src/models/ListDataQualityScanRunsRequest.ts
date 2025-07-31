// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityScanRunsRequest extends $dara.Model {
  /**
   * @example
   * 1710239005403
   */
  createTimeFrom?: number;
  /**
   * @example
   * 1710239005403
   */
  createTimeTo?: number;
  /**
   * @example
   * 10001
   */
  dataQualityScanId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @example
   * CreateTime Desc
   */
  sortBy?: string;
  /**
   * @example
   * Fail
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeFrom: 'CreateTimeFrom',
      createTimeTo: 'CreateTimeTo',
      dataQualityScanId: 'DataQualityScanId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeFrom: 'number',
      createTimeTo: 'number',
      dataQualityScanId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
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

