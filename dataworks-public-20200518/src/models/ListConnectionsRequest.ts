// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   odps
   * *   mysql
   * *   rds
   * *   oss
   * *   sqlserver
   * *   polardb
   * *   oracle
   * *   mongodb
   * *   emr
   * *   postgresql
   * *   analyticdb_for_mysql
   * *   hybriddb_for_postgresql
   * *   holo
   * 
   * @example
   * rds
   */
  connectionType?: string;
  /**
   * @remarks
   * The environment in which the data source is used. Valid values: 0 and 1. The value 0 indicates the development environment. The value 1 indicates the production environment.
   * 
   * @example
   * 1
   */
  envType?: number;
  /**
   * @remarks
   * The name of the data source that you want to query.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
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
   * The ID of the workspace to which the data source belongs. You can call the [ListProjects](https://help.aliyun.com/document_detail/178393.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 76086
   */
  projectId?: number;
  /**
   * @remarks
   * The status of the data source. Valid values:
   * 
   * *   ENABLED
   * *   DISABLED
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The subtype of the data source. This parameter is used in scenarios where a type includes subtypes. The following type and subtypes are supported:
   * 
   * *   Type: `rds`
   * *   Subtypes: `mysql`, `sqlserver`, and `postgresql`
   * 
   * @example
   * mysql
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      connectionType: 'ConnectionType',
      envType: 'EnvType',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      status: 'Status',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionType: 'string',
      envType: 'number',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      status: 'string',
      subType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

