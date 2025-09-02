// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaDBTableListRequest extends $dara.Model {
  /**
   * @remarks
   * The GUID of the MaxCompute project. Specify the GUID in the `odps.{projectName}` format. You must configure this parameter only if you set the DataSourceType parameter to odps.
   * 
   * @example
   * odps.testProjectName
   */
  appGuid?: string;
  /**
   * @remarks
   * The E-MapReduce (EMR) cluster ID. You must configure this parameter only if you set the DataSourceType parameter to emr.
   * 
   * @example
   * abc
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values: odps and emr.
   * 
   * @example
   * odps
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The name of the metadatabase.
   * 
   * @example
   * abc
   */
  databaseName?: string;
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

