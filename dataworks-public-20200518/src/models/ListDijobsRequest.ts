// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The destination type. If you do not configure this parameter, no limits are imposed on the tasks.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * The name of the task. Fuzzy match is supported. If you do not configure this parameter, no limits are imposed on the tasks.
   * 
   * @example
   * mysql_to_holo_sync_8772
   */
  jobName?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
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
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 1967
   */
  projectId?: number;
  /**
   * @remarks
   * The source type. If you do not configure this parameter, no limits are imposed on the tasks.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sourceDataSourceType: 'SourceDataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDataSourceType: 'string',
      jobName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sourceDataSourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

