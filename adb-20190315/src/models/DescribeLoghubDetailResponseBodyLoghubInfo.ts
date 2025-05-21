// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLoghubDetailResponseBodyLoghubInfoLogHubStores } from "./DescribeLoghubDetailResponseBodyLoghubInfoLogHubStores";


export class DescribeLoghubDetailResponseBodyLoghubInfo extends $dara.Model {
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
   * The name of the log shipping job.
   * 
   * @example
   * hub-pay-callback-ykt
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
   * aaa
   */
  description?: string;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * am-bp1p38m2c26s7hpk690650.ads.aliyuncs.com
   */
  domainUrl?: string;
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
   * The log keywords.
   */
  logHubStores?: DescribeLoghubDetailResponseBodyLoghubInfoLogHubStores;
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
   * cn-shenzhen
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
   * test
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
      deliverName: 'DeliverName',
      deliverTime: 'DeliverTime',
      description: 'Description',
      domainUrl: 'DomainUrl',
      filterDirtyData: 'FilterDirtyData',
      logHubStores: 'LogHubStores',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      userName: 'UserName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBType: 'string',
      deliverName: 'string',
      deliverTime: 'string',
      description: 'string',
      domainUrl: 'string',
      filterDirtyData: 'boolean',
      logHubStores: DescribeLoghubDetailResponseBodyLoghubInfoLogHubStores,
      logStoreName: 'string',
      projectName: 'string',
      regionId: 'string',
      schemaName: 'string',
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

