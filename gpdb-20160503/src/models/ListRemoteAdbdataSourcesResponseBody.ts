// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemoteADBDataSourcesResponseBodyDataSourceItemsRemoteDataSources extends $dara.Model {
  /**
   * @remarks
   * Data source name
   * 
   * @example
   * db1_gptest1_to_db2_gp-test2
   */
  dataSourceName?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Local database name
   * 
   * @example
   * db1
   */
  localDatabase?: string;
  /**
   * @remarks
   * Local instance name
   * 
   * @example
   * gp-test1
   */
  localInstanceName?: string;
  /**
   * @remarks
   * Manager user name
   * 
   * @example
   * admin
   */
  managerUserName?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) API to view available region IDs.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Remote database name
   * 
   * @example
   * db2
   */
  remoteDatabase?: string;
  /**
   * @remarks
   * Remote instance name
   * 
   * @example
   * gp-test2
   */
  remoteInstanceName?: string;
  /**
   * @remarks
   * Data source status
   * 
   * @example
   * creating
   */
  status?: string;
  /**
   * @remarks
   * User name
   * 
   * @example
   * user1
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
      description: 'Description',
      id: 'Id',
      localDatabase: 'LocalDatabase',
      localInstanceName: 'LocalInstanceName',
      managerUserName: 'ManagerUserName',
      regionId: 'RegionId',
      remoteDatabase: 'RemoteDatabase',
      remoteInstanceName: 'RemoteInstanceName',
      status: 'Status',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      description: 'string',
      id: 'number',
      localDatabase: 'string',
      localInstanceName: 'string',
      managerUserName: 'string',
      regionId: 'string',
      remoteDatabase: 'string',
      remoteInstanceName: 'string',
      status: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemoteADBDataSourcesResponseBodyDataSourceItems extends $dara.Model {
  remoteDataSources?: ListRemoteADBDataSourcesResponseBodyDataSourceItemsRemoteDataSources[];
  static names(): { [key: string]: string } {
    return {
      remoteDataSources: 'RemoteDataSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteDataSources: { 'type': 'array', 'itemType': ListRemoteADBDataSourcesResponseBodyDataSourceItemsRemoteDataSources },
    };
  }

  validate() {
    if(Array.isArray(this.remoteDataSources)) {
      $dara.Model.validateArray(this.remoteDataSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemoteADBDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returns the successfully added data sharing service data.
   */
  dataSourceItems?: ListRemoteADBDataSourcesResponseBodyDataSourceItems;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * e9d60eb1-e90d-4bc6-a470-c8b767460858
   */
  requestId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 90000
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceItems: 'DataSourceItems',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceItems: ListRemoteADBDataSourcesResponseBodyDataSourceItems,
      requestId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    if(this.dataSourceItems && typeof (this.dataSourceItems as any).validate === 'function') {
      (this.dataSourceItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

