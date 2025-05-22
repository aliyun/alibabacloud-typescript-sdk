// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDtsJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The **ClientToken** parameter can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform full data migration or synchronization. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Specifies whether to perform incremental data migration or synchronization. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * The objects of the data synchronization task after modification. The value must be a JSON string. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * > 
   * 
   * *   The new value of DbList overwrites the original value. Make sure that all the objects that you want to synchronize are specified. Otherwise, some objects may be lost. Specify this parameter with caution.
   * 
   * *   Before you call the ModifyDtsJob operation, we recommend that you call the [DescribeDtsJobDetail](https://help.aliyun.com/document_detail/208925.html) operation to query the current objects of the data synchronization task. Then, you can specify the new objects based on your business requirements. For example, if the current objects are Table A and Table B and you need to add Table C, you must specify Table A, Table B, and Table C for this parameter.
   * 
   * @example
   * {"dtstest":{"name":"dtstest","all":true}}
   */
  dbListShrink?: string;
  /**
   * @remarks
   * The ID of the data synchronization instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsbi6e22ay243****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The synchronization task ID. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the task ID.
   * 
   * @example
   * fpx1149rw7p***
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The operator that is related to the extract, transform, and load (ETL) feature and dedicated to T+1 business.
   * 
   * @example
   * {
   *   "configKeyMap": [
   *     {
   *       "moduleCode": "03",
   *       "etlOperatorColumnReference": "etlOperatorColumnReference",
   *       "etlOperatorSetting": "etlOperatorSetting"
   *     },
   *     {
   *       "moduleCode": "07",
   *       "etlOperatorColumnReference": "etlOperatorColumnReference",
   *       "etlOperatorSetting": "etlOperatorSetting"
   *     }
   *   ],
   *   "amp.increment.replicator.compare.all.columns.enable": false,
   *   "srcNetType": "VPC",
   *   "etlOperatorColumnReference": {
   *     "MODIFY_TIME": [
   *       {
   *         "datasynchron.test_timing_user_000": "user_create_date"
   *       },
   *       {
   *         "datasynchron.test_timing_user_001": "user_create_date"
   *       },
   *       {
   *         "datasynchron.test_timing_user_002": "user_create_date"
   *       },
   *       {
   *         "datasynchron.test_timing_user_003": "user_create_date"
   *       }
   *     ]
   *   },
   *   "destNetType": "VPC",
   *   "originalSrcDbInst": "sg-sit-db2-primary.mysql.polardb.rds.aliyuncs.com",
   *   "etlOperatorSetting": "adb_time_travel",
   *   "sjobUseJobTask": "1",
   *   "srcVpcNetMappingInst": "172.19.XXX.XXX:4261",
   *   "destVpcNetMappingInst": "172.19.XXX.XXX:4260",
   *   "useJobTask": "1"
   * }
   */
  etlOperatorColumnReference?: string;
  /**
   * @remarks
   * The endpoint of the Object Storage Service (OSS) bucket in which the files to be synchronized are stored.
   * 
   * @example
   * http://db-list-os-file.oss-cn-shanghai.aliyuncs.com/8e42_12185******43989_************
   */
  fileOssUrl?: string;
  /**
   * @remarks
   * The name of the table to be filtered.
   * 
   * @example
   * testtable
   */
  filterTableName?: string;
  /**
   * @remarks
   * The method that is used to modify the data synchronization task. If you do not specify the parameter, the objects of the data synchronization task are modified by default. If you specify UPDATE_RESERVED for the parameter, the reserved parameters are modified.
   * 
   * @example
   * UPDATE_RESERVED
   */
  modifyTypeEnum?: string;
  /**
   * @remarks
   * The ID of the region in which the data synchronization instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The reserved parameters of the data synchronization task. You can add reserved parameters instead of overwriting the existing reserved parameters. The value of the parameter is a MAP JSON string. You can specify this parameter to meet special requirements, such as specifying whether to automatically start the precheck of the data synchronization task. For more information, see [MigrationReserved](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to perform schema migration or synchronization. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**: Data is synchronized from the source database to the destination database.
   * *   **Reverse**: Data is synchronized from the destination database to the source database.
   * 
   * > 
   * *   Default value: **Forward**.
   * *   This parameter is required only if the topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * Whether it is a seamless integration (Zero-ETL) task, the value can be:
   * - **false**: No. - **true**: Yes.
   * 
   * @example
   * false
   */
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      dbListShrink: 'DbList',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      etlOperatorColumnReference: 'EtlOperatorColumnReference',
      fileOssUrl: 'FileOssUrl',
      filterTableName: 'FilterTableName',
      modifyTypeEnum: 'ModifyTypeEnum',
      regionId: 'RegionId',
      reserved: 'Reserved',
      resourceGroupId: 'ResourceGroupId',
      structureInitialization: 'StructureInitialization',
      synchronizationDirection: 'SynchronizationDirection',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      dbListShrink: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      etlOperatorColumnReference: 'string',
      fileOssUrl: 'string',
      filterTableName: 'string',
      modifyTypeEnum: 'string',
      regionId: 'string',
      reserved: 'string',
      resourceGroupId: 'string',
      structureInitialization: 'boolean',
      synchronizationDirection: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

