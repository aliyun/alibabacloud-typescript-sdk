// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DTS dedicated cluster.
   * 
   * @example
   * dtscluster_atyl3b5214uk***
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The type of the source database instance.
   * 
   * @example
   * RDS
   */
  destProductType?: string;
  /**
   * @remarks
   * The environment label of the DTS instance. Valid values:
   * - **normal**: normal
   * - **online**: online
   * 
   * @example
   * normal
   */
  dtsBisLabel?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking instance.
   * > Separate multiple instance IDs with commas (,). Make sure that the **JobType** parameter is set as expected.
   * 
   * @example
   * dtsi03e3zty16i****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking task.
   * 
   * > Separate multiple task IDs with commas (,). Make sure that the **JobType** parameter is set as expected.
   * 
   * @example
   * qa110wq5r93hb49
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The DTS task ID.
   * > In most cases, you do not need to set this parameter.
   * 
   * @example
   * pk13r731m****
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the source or destination database instance that corresponds to the **InstanceType** request parameter.
   * 
   * @example
   * rm-bp1966yuut4w3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the source or destination database instance.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The task type of the DTS instance. Valid values:
   * - **MIGRATION**: data migration (default).
   * - **SYNC**: data synchronization.
   * - **SUBSCRIBE**: change tracking.
   * 
   * @example
   * MIGRATION
   */
  jobType?: string;
  /**
   * @remarks
   * The sort criterion when the response contains multiple DTS instances. Valid values:
   * 
   * - **CreateTime**: sorts by task creation time.
   * - **FinishTime**: sorts by task completion time.
   * - **duLimit** (dedicated cluster tasks): sorts by the upper limit of DU usage for DTS tasks. This value is supported only for dedicated clusters.
   * 
   * > You can also specify **OrderDirection** to set the sort order to ascending or descending.
   * 
   * @example
   * CreateTime
   */
  orderColumn?: string;
  /**
   * @remarks
   * The sort order of instances. Valid values:
   * 
   * - **ASC**: ascending order. This is the default value.
   * - **DESC**: descending order.
   * 
   * @example
   * ASC
   */
  orderDirection?: string;
  ownerId?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page. Valid values: **10**, **20**, and **30**. Default value: **20**. Maximum value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The specific content of the query condition.
   * > Specify **Type** in advance to define the query condition.
   * 
   * @example
   * dtspk3f13r731m****
   */
  params?: string;
  /**
   * @remarks
   * The region in which the DTS instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Deprecated parameter.
   * 
   * @example
   * 无
   */
  regionId?: string;
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
   * The type of the destination database instance.
   * 
   * @example
   * RDS
   */
  srcProductType?: string;
  /**
   * @remarks
   * The instance status of the DTS instance. Valid values:
   * 
   * Data migration task statuses:
   * - **NotStarted**: not started.
   * - **Prechecking**: running a precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **PreCheckPass**: precheck passed.
   * - **NotConfigured**: not configured.
   * - **Migrating**: migrating.
   * - **Suspending**: paused.
   * - **MigrationFailed**: migration failed.
   * - **Finished**: completed.
   * - **Retrying**: retrying.
   * - **Upgrade**: upgrading.
   * - **Locked**: locked.
   * - **Downgrade**: downgrading.
   * 
   * Data synchronization task statuses:
   * - **NotStarted**: not started.
   * - **Prechecking**: running a precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **PreCheckPass**: precheck passed.
   * - **NotConfigured**: not configured.
   * - **Initializing**: performing initial synchronization.
   * - **InitializeFailed**: initial synchronization failed.
   * - **Synchronizing**: synchronizing.
   * - **Failed**: synchronization failed.
   * - **Suspending**: paused.
   * - **Modifying**: modifying synchronization objects.
   * - **Finished**: completed.
   * - **Retrying**: retrying.
   * - **Upgrade**: upgrading.
   * - **Locked**: locked.
   * - **Downgrade**: downgrading.
   * 
   * Change tracking task statuses:
   * - **NotConfigured**: not configured.
   * - **NotStarted**: not started.
   * - **Prechecking**: running a precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **PreCheckPass**: precheck passed.
   * - **Starting**: starting.
   * - **Normal**: normal.
   * - **Retrying**: retrying.
   * - **Abnormal**: abnormal.
   * - **Upgrade**: upgrading.
   * - **Locked**: locked.
   * - **Downgrade**: downgrading.
   * 
   * @example
   * Migrating
   */
  status?: string;
  /**
   * @remarks
   * The tag-based search condition in JSON format.
   * > You can call the **ListTagResources** operation to query tag keys and values.
   * 
   * @example
   * [     {         \\"key\\": \\"testK\\",         \\"value\\": \\"testV\\"     }  ]
   */
  tags?: string;
  /**
   * @remarks
   * The conditional query parameter. Valid values:
   * 
   * - **instance**: queries by DTS instance ID.
   * - **name**: queries by DTS instance name. Fuzzy match is supported.
   * - **srcRds**: queries by the ID of the source instance (ApsaraDB RDS).
   * - **rds**: queries by the ID of the destination instance (ApsaraDB RDS).
   * 
   * > Specify the **Params** parameter to provide the specific content of the query condition.
   * 
   * @example
   * instance
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to exclude task objects from the response (not return the **DbObject** parameter). Valid values:
   * 
   * - **true**: excludes **DbObject** from the response.
   * - **false**: includes **DbObject** in the response, which can improve the response speed.
   * 
   * @example
   * true
   */
  withoutDbList?: boolean;
  /**
   * @remarks
   * Specifies whether the node is a seamless integration (Zero-ETL) node. Valid values:
   * 
   * - **false**: No.
   * - **true**: Yes.
   * 
   * @example
   * false
   */
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterId: 'DedicatedClusterId',
      destProductType: 'DestProductType',
      dtsBisLabel: 'DtsBisLabel',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      jobType: 'JobType',
      orderColumn: 'OrderColumn',
      orderDirection: 'OrderDirection',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      params: 'Params',
      region: 'Region',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      srcProductType: 'SrcProductType',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
      withoutDbList: 'WithoutDbList',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterId: 'string',
      destProductType: 'string',
      dtsBisLabel: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      groupId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      jobType: 'string',
      orderColumn: 'string',
      orderDirection: 'string',
      ownerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      params: 'string',
      region: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      srcProductType: 'string',
      status: 'string',
      tags: 'string',
      type: 'string',
      withoutDbList: 'boolean',
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

