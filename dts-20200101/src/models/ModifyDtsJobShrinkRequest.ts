// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDtsJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotence of the request. You can generate a parameter value from your client to ensure that the value is unique across different requests. **ClientToken** supports only ASCII characters and cannot exceed 64 characters in length.
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
   * Specifies whether to perform incremental data migration or incremental data synchronization. Valid values:
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
   * The modified synchronization objects, in the format of a JSON string. For detailed definitions, see [Objects for data migration, synchronization, or change tracking](https://help.aliyun.com/document_detail/209545.html).
   * - The original DbList is overwritten by the new DbList. Make sure that the new DbList contains all the objects to be synchronized. Otherwise, synchronization objects may be lost. Modify the objects with caution.
   * - We recommend that you call the [DescribeDtsJobDetail](https://help.aliyun.com/document_detail/208925.html) operation to query the current synchronization objects in advance, and then specify the modified synchronization objects based on your business requirements. For example, if the current objects are Table A and Table B, and you want to add Table C, you must specify Table A, Table B, and Table C in this parameter.
   * - The DbList parameter supports a maximum of 1 MB of data.
   * - If the DbList contains filter conditions, the total length of the DbList (including the filter conditions) can be up to 1 MB.
   * - For distributed tasks (such as data migration or synchronization tasks whose source is PolarDB-X 1.0), the DbList is split based on physical table shards to generate multiple subtasks. The DbList of each subtask supports a maximum of 1 MB of data.
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
   * The ID of the synchronization task. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the ID.
   * 
   * @example
   * fpx1149rw7p***
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The dedicated field for T+1 business and ETL operators.
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
   * Specifies the method to modify the synchronization task. If you do not specify this parameter, the synchronization objects are modified by default. If you set this parameter to UPDATE_RESERVED, the reserved parameters are modified.
   * 
   * @example
   * UPDATE_RESERVED
   */
  modifyTypeEnum?: string;
  /**
   * @remarks
   * The region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The reserved parameters of DTS. The update method is addition rather than overwrite. The format is a MAP JSON string. You can specify this parameter to implement special requirements, such as whether to automatically start the precheck. The usage is similar to the Reserve parameter. For more information, see [Reserve parameter description](https://help.aliyun.com/document_detail/273111.html).
   * 
   * @example
   * {"definer": false,"syncArchitecture": "oneway","whitelist.dms.online.ddl.enable": false,"destSSL": "0","triggerMode": "manual","sqlparser.dms.original.ddl": true,"whitelist.ghost.online.ddl.enable": false,"privilegeMigration": false,"maxRetryTime": 43200,"srcSSL": "0","autoStartModulesAfterConfig": "none"}
   */
  reserved?: string;
  /**
   * @remarks
   * The ID of the resource group.
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
   * Specifies the synchronization direction. Valid values:
   * - **Forward**: forward synchronization.
   * - **Reverse**: reverse synchronization.
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
   * Specifies whether the task is a zero-ETL task. Valid values:
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

