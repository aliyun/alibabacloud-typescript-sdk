// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaDBTableListRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for the project, in the format `odps.{projectName}`. This parameter is required only if the `DataSourceType` is set to `odps`.
   * 
   * @example
   * odps.testProjectName
   */
  appGuid?: string;
  /**
   * @remarks
   * The ID of the E-MapReduce (EMR) cluster. This parameter is required only if the `DataSourceType` is set to `emr`.
   * 
   * @example
   * abc
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values: `odps` and `emr`.
   * 
   * @example
   * odps
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 1,000.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

