// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemoteADBDataSourcesResponseBodyDataSourceItemsRemoteDataSources extends $dara.Model {
  dataSourceName?: string;
  description?: string;
  id?: number;
  localDatabase?: string;
  localInstanceName?: string;
  managerUserName?: string;
  regionId?: string;
  remoteDatabase?: string;
  remoteInstanceName?: string;
  status?: string;
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

