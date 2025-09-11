// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStoresLogHubStore extends $dara.Model {
  /**
   * @remarks
   * The value of the log keyword.
   * 
   * @example
   * 255311
   */
  fieldKey?: string;
  /**
   * @remarks
   * The log keyword.
   * 
   * @example
   * taskid
   */
  logKey?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'FieldKey',
      logKey: 'LogKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      logKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStores extends $dara.Model {
  logHubStore?: DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStoresLogHubStore[];
  static names(): { [key: string]: string } {
    return {
      logHubStore: 'LogHubStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logHubStore: { 'type': 'array', 'itemType': DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStoresLogHubStore },
    };
  }

  validate() {
    if(Array.isArray(this.logHubStore)) {
      $dara.Model.validateArray(this.logHubStore);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogHubAttributeResponseBodyLoghubInfo extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-8vbs48m7553du1gz2
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * rds
   */
  DBType?: string;
  /**
   * @remarks
   * The synchronization latency, which is the latency between the latest update time of the synchronization job and the current system time. Unit: seconds.
   * 
   * @example
   * 361
   */
  delay?: number;
  /**
   * @remarks
   * The name of the log shipping job.
   * 
   * @example
   * loghub-web-login-new
   */
  deliverName?: string;
  /**
   * @remarks
   * The log shipping time.
   * 
   * @example
   * 2024-12-06\\"T\\"10:15\\"Z\\"
   */
  deliverTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether dirty data is filtered.
   * 
   * @example
   * true
   */
  filterDirtyData?: boolean;
  /**
   * @remarks
   * The names of the Logstores.
   */
  logHubStores?: DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStores;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * device_login
   */
  logStoreName?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * test-adb
   */
  projectName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * cbd_bi
   */
  schemaName?: string;
  /**
   * @remarks
   * The synchronization status.
   * 
   * @example
   * processing
   */
  syncStatus?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test2
   */
  tableName?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * aaa
   */
  userName?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      delay: 'Delay',
      deliverName: 'DeliverName',
      deliverTime: 'DeliverTime',
      description: 'Description',
      filterDirtyData: 'FilterDirtyData',
      logHubStores: 'LogHubStores',
      logStoreName: 'LogStoreName',
      message: 'Message',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      syncStatus: 'SyncStatus',
      tableName: 'TableName',
      userName: 'UserName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBType: 'string',
      delay: 'number',
      deliverName: 'string',
      deliverTime: 'string',
      description: 'string',
      filterDirtyData: 'boolean',
      logHubStores: DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStores,
      logStoreName: 'string',
      message: 'string',
      projectName: 'string',
      regionId: 'string',
      schemaName: 'string',
      syncStatus: 'string',
      tableName: 'string',
      userName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.logHubStores && typeof (this.logHubStores as any).validate === 'function') {
      (this.logHubStores as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogHubAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log collection information.
   */
  loghubInfo?: DescribeLogHubAttributeResponseBodyLoghubInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8A564B7F-8C00-43C0-8EC5-919FBB70573
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loghubInfo: 'LoghubInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loghubInfo: DescribeLogHubAttributeResponseBodyLoghubInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.loghubInfo && typeof (this.loghubInfo as any).validate === 'function') {
      (this.loghubInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

