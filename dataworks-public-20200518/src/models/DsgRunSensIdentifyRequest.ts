// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgRunSensIdentifyRequestEsMetaParams extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. You can obtain the ID based on the data source you use.
   * 
   * @example
   * 101010
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   ODPS.ODPS
   * *   EMR
   * *   HOLO.POSTGRES
   * 
   * @example
   * ODPS.ODPS
   */
  dbType?: string;
  /**
   * @remarks
   * The instance ID. You can obtain the ID based on the data source you use.
   * 
   * @example
   * hgprecn-cn-9lb37k181024
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the name.
   * 
   * @example
   * 1666676756691024
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the schema.
   * 
   * @example
   * default
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * table1
   */
  tableName?: string;
  /**
   * @remarks
   * The names of the tables.
   */
  tableNameList?: string[];
  /**
   * @remarks
   * The username of the operator. We recommend that you enter the username of your Alibaba Cloud account.
   * 
   * @example
   * xxx-uat
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dbType: 'DbType',
      instanceId: 'InstanceId',
      projectName: 'ProjectName',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tableNameList: 'TableNameList',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dbType: 'string',
      instanceId: 'number',
      projectName: 'string',
      schemaName: 'string',
      tableName: 'string',
      tableNameList: { 'type': 'array', 'itemType': 'string' },
      user: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tableNameList)) {
      $dara.Model.validateArray(this.tableNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgRunSensIdentifyRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters that you need to configure to scan specified metadata.
   */
  esMetaParams?: DsgRunSensIdentifyRequestEsMetaParams[];
  /**
   * @remarks
   * The tenant ID. To obtain the tenant ID, perform the following steps: Log on to the [DataWorks console](https://workbench.data.aliyun.com/console). Find your workspace and go to the DataStudio page. On the DataStudio page, click the logon username in the upper-right corner and click User Info in the Menu section.
   * 
   * This parameter is required.
   * 
   * @example
   * 10241024
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      esMetaParams: 'EsMetaParams',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      esMetaParams: { 'type': 'array', 'itemType': DsgRunSensIdentifyRequestEsMetaParams },
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.esMetaParams)) {
      $dara.Model.validateArray(this.esMetaParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

