// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMetaTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The GUID of the workspace where the metatables reside.
   * 
   * @example
   * odps.engine_name
   */
  appGuid?: string;
  /**
   * @remarks
   * The ID of the EMR cluster. This parameter is required only if you set the DataSourceType parameter to emr.
   * 
   * You can log on to the [EMR console](https://emr.console.aliyun.com/?spm=a2c4g.11186623.0.0.965cc5c2GeiHet#/cn-hangzhou) to obtain the ID.
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
   * emr
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The type of the metatables. Valid values: 0 and 1. The value 0 indicates that tables are queried. The value 1 indicates that views are queried. If you do not configure this parameter, all types of metatables are queried.
   * 
   * @example
   * 0
   */
  entityType?: number;
  /**
   * @remarks
   * The keyword based on which metatables are queried. During the query, the system tokenizes the names of metatables and matches the names with the keyword. If no name is matched, the value null is returned. By default, the system uses underscores (_) to tokenize the names.
   * 
   * This parameter is required.
   * 
   * @example
   * test
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
   * The schema information of the table. You must configure this parameter if you enable the three-layer model of MaxCompute.
   * 
   * @example
   * default
   * 
   * **if can be null:**
   * true
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      entityType: 'EntityType',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      clusterId: 'string',
      dataSourceType: 'string',
      entityType: 'number',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

