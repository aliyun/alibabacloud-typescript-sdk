// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDtsJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform full data migration or initial full data synchronization. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Specifies whether to perform incremental data migration or synchronization. Valid values:
   * 
   * - **false**: no.
   * - **true**: yes.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * The modified synchronization objects, in JSON format. For more information about the definition, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * - The original DbList is overwritten by the new DbList. Make sure that the new DbList contains all the objects that need to be synchronized. Otherwise, synchronization objects may be lost. Modify this parameter with caution.
   * - Call [DescribeDtsJobDetail](https://help.aliyun.com/document_detail/208925.html) to query the current synchronization objects before you modify them based on your business requirements. For example, if the current objects are tables A and B, and you want to add table C, specify tables A, B, and C in this parameter.
   * - The maximum size of DbList is 1 MB.
   * - If DbList contains filter conditions, the total length of DbList (including filter conditions) cannot exceed 1 MB.
   * - For distributed tasks (such as migration or synchronization tasks whose source is PolarDB-X 1.0), DbList is split based on physical shards and multiple subtasks are generated. The maximum size of DbList for each subtask is 1 MB.
   * 
   * @example
   * {"dtstest":{"name":"dtstest","all":true}}
   */
  dbListShrink?: string;
  /**
   * @remarks
   * The instance ID of the data synchronization instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsbi6e22ay243****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the synchronization task. You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the task ID.
   * 
   * @example
   * fpx1149rw7p***
   */
  dtsJobId?: string;
  /**
   * @remarks
   * A field dedicated to T+1 business scenarios. This is an ETL operator and a business-specific field.
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
   * The OSS URL of the synchronization file.
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
   * The method used to modify the synchronization task. If this parameter is not specified, the synchronization objects are modified by default. Set this parameter to UPDATE_RESERVED to modify reserved parameters.
   * 
   * @example
   * UPDATE_RESERVED
   */
  modifyTypeEnum?: string;
  /**
   * @remarks
   * The region in which the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The reserved parameters of DTS. The update method is append rather than overwrite. The value is in the MAP JSON format. You can specify this parameter to meet special requirements, such as whether to automatically start a precheck. The usage is similar to that of the Reserve parameter. For details, see [Reserve parameter description](https://help.aliyun.com/document_detail/273111.html).
   * 
   * @example
   * {"definer": false,"syncArchitecture": "oneway","whitelist.dms.online.ddl.enable": false,"destSSL": "0","triggerMode": "manual","sqlparser.dms.original.ddl": true,"whitelist.ghost.online.ddl.enable": false,"privilegeMigration": false,"maxRetryTime": 43200,"srcSSL": "0","autoStartModulesAfterConfig": "none"}
   */
  reserved?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to perform schema migration or initial schema synchronization. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > - Default value: **Forward**.
   * - This parameter is required only when the synchronization topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * Specifies whether this is a seamless integration (zero-ETL) node. Valid values:
   * - **true**: yes.
   * - **false**: no.
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

