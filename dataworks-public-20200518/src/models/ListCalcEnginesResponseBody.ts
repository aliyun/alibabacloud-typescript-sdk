// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCalcEnginesResponseBodyDataCalcEngines extends $dara.Model {
  /**
   * @remarks
   * The ID of the workspace with which the compute engine is associated.
   * 
   * @example
   * 27
   */
  bindingProjectId?: number;
  /**
   * @remarks
   * The name of the workspace with which the compute engine is associated.
   * 
   * @example
   * abc
   */
  bindingProjectName?: string;
  /**
   * @remarks
   * The type of the compute engine.
   * 
   * @example
   * ODPS
   */
  calcEngineType?: string;
  /**
   * @remarks
   * The region where the DataWorks workspace with which the compute engine is associated resides.
   * 
   * @example
   * cn-zhangjiakou
   */
  dwRegion?: string;
  /**
   * @remarks
   * The compute engine ID.
   * 
   * @example
   * 35
   */
  engineId?: number;
  /**
   * @remarks
   * The details of the compute engine.
   * 
   * *   ODPS
   * 
   *         {
   *           "pubEndpoint": "service.cn.maxcompute.aliyun.com/api",
   *           "endpoint": "service.cn.maxcompute.aliyun-inc.com/api",
   *           "initProperties": " 
   *           {\\"odpsTypeMode\\":\\"STANDARD\\",\\"openPai\\":false,\\"openPaiGpu\\":false}",
   *           "resourceGroupType": "ODPS",
   *           "resourceGroupId": "361826516****",
   *           "vpcEndpoint": "service.cn.maxcompute.aliyun-inc.com/api",
   *           "projectName": "onefall_test_zjk",
   *           "taskSameAsOwner": "true"
   *         }
   * 
   * *   EMR
   * 
   *         {
   *           "emrClusterId": "C-xxx",
   *           "specs": "{\\"emrClusterId\\":\\"C-xxx\\",\\"emrAccessMode\\":\\"simple\\",\\"emrResourceQueueName\\":\\"default\\",\\"emrProjectId\\":\\"FP-xxx\\"}",
   *           "endpoint": "emr.aliyuncs.com",
   *           "emrResourceQueueName": "default",
   *           "emrAccessMode": "simple",
   *           "resourceGroupType": "DW",
   *           "projectName": "xx-xxxx",
   *           "emrProjectId": "FP-xxxx",
   *           "taskSameAsOwner": "false"
   *         }   
   * 
   * *   BLINK
   * 
   *         {
   *           "bayesProjectId": "xxxx",
   *           "bayesProjectName": "xc_blxxixxxnk_1",
   *           "cluster": "xxxssxsx",
   *           "endpoint": "https://stream.console.aliyun.com",
   *           "engineType": "BLINK",
   *           "name": "xsxsxxxxx",
   *           "projectName": "xc_blxxxsxink_1",
   *           "queue": "root.xc_blxsxxxxxxink_1",
   *           "resourceGroupType": "DW",
   *           "specs": "{\\"cluster\\":\\"xxxxxx\\",\\"bayesProjectName\\":\\"xc_blxxixxxnk_1\\",\\"bayesProjectId\\":\\"ssxxxsa\\",\\"name\\":\\"sxsxsxxx\\",\\"queue\\":\\"root.sxxsxxsx\\"}",
   *           "taskSameAsOwner": false
   *         }
   * 
   * *   HOLO
   * 
   *         {
   *           "endpoint": "hgprecn-cn-xsxssxsx-cn-shanghai-internal.hologres.aliyuncs.com:80",
   *           "engineType": "ODPS",
   *           "odpsEndpoint": "hgprecn-cn-xsxssxxs-cn-shanghai-internal.hologres.aliyuncs.com:80",
   *           "odpsProjectName": "xsxssxsxsx",
   *           "projectName": "xsxssxsxsx",
   *           "resourceGroupType": "DW",
   *           "specs": "{\\"pubEndpoint\\":\\"hgprecn-cn-xsxssxsxs-cn-shanghai.hologres.aliyuncs.com:80\\",\\"commonBuyInstanceId\\":\\"hgprecn-cn-xsxsxsxs\\",\\"project\\":\\"holo_upxsxgrade1\\",\\"common_buy_instance_id\\":\\"hgprecn-cn-xsxsxs\\",\\"endpoint\\":\\"hgprecn-cn-xsxxsxs-cn-shanghai-internal.hologres.aliyuncs.com:80\\",\\"port\\":\\"80\\",\\"host\\":\\"hgprecn-cn-xsxsxsxs-cn-shanghai-internal.hologres.aliyuncs.com\\",\\"vpcEndpoint\\":\\"hgprecn-cn-xsxsxsxs-cn-shanghai-vpc.hologres.aliyuncs.com:80\\",\\"authType\\":2,\\"region\\":\\"cn-shanghai\\"}",
   *           "taskSameAsOwner": false
   *         }
   * 
   * *   MaxGraph
   * 
   *         {
   *           "endpoint": "http://pre-graphcompute.aliyuncs.com",
   *           "engineType": "ODPS",
   *           "odpsEndpoint": "http://pre-graphcompute.aliyuncs.com",
   *           "odpsProjectName": "xsxsxsxs",
   *           "projectName": "xsxsxsxs",
   *           "resourceGroupType": "DW",
   *           "taskSameAsOwner": false
   *         }
   * 
   * *   HYBRIDDB_FOR_POSTGRESQL
   * 
   *         {
   *           "endpoint": "hybriddb_for_postgresql_mo12121ck_endpoint",
   *           "engineType": "ODPS",
   *           "odpsEndpoint": "hybriddb_for_postgresql_m121212ock_endpoint",
   *           "odpsProjectName": "sxasaxsaxaxas",
   *           "projectName": "sxasaxsaxaxas",
   *           "resourceGroupType": "DW",
   *           "specs": "{\\"connectionString\\":\\"gp-xsxsxsxxs.gpdb.rds.aliyuncs.com\\",\\"database\\":\\"xsxsxxsxs\\",\\"password\\":\\"xxxxxxx\\",\\"instanceId\\":\\"gp-cdcdacdacda\\",\\"port\\":\\"3432\\",\\"ownerId\\":\\"12121212\\",\\"username\\":\\"sdasaddsa\\"}",
   *           "taskSameAsOwner": false
   *         }
   * 
   * *   ADB_MYSQL
   * 
   *         {
   *           "endpoint": "adb_mysql_mock_endpoint",
   *           "engineType": "ODPS",
   *           "odpsEndpoint": "adb_mysql_mock_endpoint",
   *           "odpsProjectName": "am-xsaxaxa",
   *           "projectName": "am-xsxsaxa",
   *           "resourceGroupType": "DW",
   *           "specs": "{\\"connectionString\\":\\"am-xsaxsa.ads.aliyuncs.com:3306\\",\\"database\\":\\"xsaxsaxa\\",\\"password\\":\\"xsaxsaxassxsa\\",\\"instanceId\\":\\"am-xsaxsasx\\",\\"username\\":\\"xsaxsadsd\\"}",
   *           "taskSameAsOwner": false
   *         }
   * 
   * *   HADOOP_CDH
   * 
   *         {
   *           "bindingBaseId": "xsaxsaxs",
   *           "endpoint": "xsaaaaa",
   *           "engineType": "ODPS",
   *           "odpsEndpoint": "axsxaxssxs",
   *           "odpsProjectName": "ssxxax",
   *           "projectName": "xsaxsaxsa",
   *           "resourceGroupId": 45208xxxxxx,
   *           "resourceGroupType": "GATEWAY",
   *           "specs": "{\\"cluster\\":{\\"hive\\":{\\"hiveServer2Url\\":\\"jdbc:hive2://xxxxxxer-1-cn-shanghai-pre-kerberos-1:10000\\",\\"hiveMetastore\\":\\"thrift://xxxxxxxr-1-cn-shanghai-pre-kerberos-1:9083\\",\\"version\\":\\"2.1.1\\"},\\"configFiles\\":{\\"coreSite\\":\\"4534574xxxxxx\\",\\"hdfsSite\\":\\"453457919xxxxxxx\\",\\"mapredSite\\":\\"45345750xxxxxx\\",\\"yarnSite\\":\\"4534575xxxxx\\",\\"krb5Conf\\":\\"4534576xxxxx1\\",\\"hiveSite\\":\\"453457xxxxx20\\"},\\"spark\\":{\\"version\\":\\"2.4.0\\"},\\"cdh\\":{\\"version\\":\\"6.3.2\\"},\\"hdfs\\":{\\"version\\":\\"3.0.0\\"},\\"impala\\":{\\"impalaUrl\\":\\"jdbc:impala://cdh-xsxssxxsx-1-cn-shanghai-pre-kerberos-1:21050\\",\\"version\\":\\"3.2.0\\"},\\"yarn\\":{\\"YarnUrl\\":\\"http://cdh-xsxsxsxsxs-1-cn-shanghai-pre-kerberos-1:8032\\",\\"webUrl\\":\\"http://cdh-xsxsxssxxssx-1-cn-shanghai-pre-kerberos-1:8088\\",\\"version\\":\\"3.0.0\\"},\\"presto\\":{\\"prestoUrl\\":\\"jdbc:presto://cdh-xssxsxxsxsxs-1-cn-shanghai-pre-kerberos-1:8080/hive/default\\",\\"version\\":\\"0.244.1\\"}},\\"instanceId\\":161sdads733,\\"authDetail\\":{\\"principal\\":\\"hive@HADOOP.COM\\",\\"keytabFileId\\":\\"45345815xsxsxs3\\",\\"type\\":\\"kerberos\\",\\"username\\":\\"xsxsxsxsa@HADOOP.COM\\"},\\"resGroupStatus\\":\\"\\",\\"hadoopAuthType\\":\\"kerberos\\",\\"clusterIdentifier\\":\\"xssxsxsxsx\\",\\"clusterId\\":xsxsx,\\"resGroupId\\":4520870619xsxssxxs,\\"accessMode\\":\\"security\\",\\"authType\\":2}",
   *           "taskSameAsOwner": false
   *         }
   * 
   * @example
   * {"pubEndpoint":"http://service.cn.maxcompute.aliyun.com/api","endpoint":"http://service.cn.maxcompute.aliyun-inc.com/api","resourceGroupType":"ODPS","resourceGroupId":"361826516****","vpcEndpoint":"http://service.cn.maxcompute.aliyun-inc.com/api","projectName":"onefall_test_zjk","taskSameAsOwner":"true"}
   */
  engineInfo?: { [key: string]: any };
  /**
   * @remarks
   * The environment in which the compute engine is used. Valid values:
   * 
   * *   **DEV**
   * *   **PRD**
   * 
   * @example
   * PRD
   */
  envType?: string;
  /**
   * @remarks
   * The time when the compute engine was created.
   * 
   * @example
   * Oct 10, 2019 3:42:44 PM
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Indicates whether the compute engine is the default engine of the current type.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The display name of the compute engine.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The region where the compute engine resides.
   * 
   * @example
   * cn-zhangjiakou
   */
  region?: string;
  /**
   * @remarks
   * The identity that is used to access the compute engine. Valid values:
   * 
   * *   **USER**: the current user
   * *   **PROJECT**: the workspace executor
   * *   **SUBACCOUNT**: a RAM user
   * *   **STS_ROLE**: the Security Token Service (STS) role
   * 
   * @example
   * PROJECT
   */
  taskAuthType?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1234567
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      bindingProjectId: 'BindingProjectId',
      bindingProjectName: 'BindingProjectName',
      calcEngineType: 'CalcEngineType',
      dwRegion: 'DwRegion',
      engineId: 'EngineId',
      engineInfo: 'EngineInfo',
      envType: 'EnvType',
      gmtCreate: 'GmtCreate',
      isDefault: 'IsDefault',
      name: 'Name',
      region: 'Region',
      taskAuthType: 'TaskAuthType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingProjectId: 'number',
      bindingProjectName: 'string',
      calcEngineType: 'string',
      dwRegion: 'string',
      engineId: 'number',
      engineInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      envType: 'string',
      gmtCreate: 'string',
      isDefault: 'boolean',
      name: 'string',
      region: 'string',
      taskAuthType: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    if(this.engineInfo) {
      $dara.Model.validateMap(this.engineInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalcEnginesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The compute engines.
   */
  calcEngines?: ListCalcEnginesResponseBodyDataCalcEngines[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of compute engine instances.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      calcEngines: 'CalcEngines',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calcEngines: { 'type': 'array', 'itemType': ListCalcEnginesResponseBodyDataCalcEngines },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.calcEngines)) {
      $dara.Model.validateArray(this.calcEngines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalcEnginesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query results for compute engines that are returned on multiple pages.
   */
  data?: ListCalcEnginesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc1ec92159376****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListCalcEnginesResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

