// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DTS dedicated cluster on which the task runs.
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
   * The environment tag of the DTS instance. Valid values:
   * 
   * - **normal**
   * - **online**
   * 
   * @example
   * normal
   */
  dtsBisLabel?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking instance.
   * 
   * @example
   * dtsi03e3zty16i****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking task.
   * 
   * @example
   * qa110wq5r93hb49
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The ID of the parent task.
   * 
   * >  In most cases, you do not need to specify this parameter.
   * 
   * @example
   * pk13r731m****
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the source or target database instance corresponding to the request parameter **InstanceType**.
   * 
   * @example
   * rm-bp1966yuut4w3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the source or target database instance.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The type of the DTS task. Valid values:
   * 
   * *   **MIGRATION**: data migration. This is the default value.
   * *   **SYNC**: data synchronization.
   * *   **SUBSCRIBE**: change tracking.
   * 
   * @example
   * MIGRATION
   */
  jobType?: string;
  /**
   * @remarks
   * The basis on which the returned DTS tasks are sorted. Valid values:
   * 
   * *   **CreateTime**: sorts the DTS tasks based on the points in time when the DTS tasks are created.
   * *   **FinishTime**: sorts the DTS tasks based on the points in time when the DTS tasks are complete.
   * *   **duLimit** sorts the DTS tasks based on the upper limits on DTS Units (DUs) that the DTS tasks can use. This option applies only to the DTS tasks that are run on a DTS dedicated cluster.
   * 
   * >  You can also set the **OrderDirection** parameter to specify whether to sort the DTS tasks in ascending or descending order.
   * 
   * @example
   * CreateTime
   */
  orderColumn?: string;
  /**
   * @remarks
   * The order in which the returned DTS tasks are sorted. Valid values:
   * 
   * *   **ASC**: sorts the DTS tasks in ascending order. This is the default value.
   * *   **DESC**: sorts the DTS tasks in descending order.
   * 
   * @example
   * ASC
   */
  orderDirection?: string;
  ownerId?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **20**, **30**, **50**, and **100**. Default value: **20**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The content of the query condition.
   * 
   * >  You must set the **Type** parameter to specify the type of the query condition.
   * 
   * @example
   * dtspk3f13r731m****
   */
  params?: string;
  /**
   * @remarks
   * The ID of the region in which the DTS instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * Valid values:
   * 
   * *   cn-hangzhou
   * *   cn-shanghai
   * *   cn-beijing
   * *   cn-guangzhou
   * *   cn-shenzhen
   * *   cn-chengdu
   * *   cn-heyuan
   * *   cn-hongkong
   * *   cn-qingdao
   * *   cn-zhangbei
   * *   cn-zhangjiakou
   * *   us-east-1
   * *   us-west-1
   * *   cn-hangzhou-finance
   * *   cn-shanghai-finance
   * *   cn-shanghai-finance-1
   * *   cn-shenzhen-finance
   * *   cn-shenzhen-finance-1
   * *   cn-beijing-finance-1
   * *   cn-huhehaote
   * *   cn-north-2-gov-1
   * *   eu-central-1
   * *   eu-west-1
   * *   me-central-1
   * *   me-east-1
   * *   ap-northeast-1
   * *   ap-northeast-2
   * *   ap-southeast-1
   * *   ap-southeast-2
   * *   ap-southeast-3
   * *   ap-southeast-5
   * *   ap-southeast-6
   * *   ap-southeast-7
   * *   cn-wulanchabu
   * *   cn-zhengzhou-jva
   * *   cn-wuhan-lr
   * 
   * @example
   * cn-hangzhou
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
   * The state of the DTS task.
   * 
   * Valid values for a data migration task:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Prechecking**: The task is being prechecked.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **PreCheckPass**: The task passed the precheck.
   * *   **NotConfigured**: The task is not configured.
   * *   **Migrating**: The task is in progress.
   * *   **Suspending**: The task is paused.
   * *   **MigrationFailed**: The task failed.
   * *   **Finished**: The task is complete.
   * *   **Retrying**: The task is being retried.
   * *   **Upgrade**: The task is being upgraded.
   * *   **Locked**: The task is locked.
   * *   **Downgrade**: The task is being downgraded.
   * 
   * Valid values for a data synchronization task:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Prechecking**: The task is being prechecked.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **PreCheckPass**: The task passed the precheck.
   * *   **NotConfigured**: The task is not configured.
   * *   **Initializing**: The task is being initialized.
   * *   **InitializeFailed**: Initialization failed.
   * *   **Synchronizing**: The task is in progress.
   * *   **Failed**: The task failed.
   * *   **Suspending**: The task is paused.
   * *   **Modifying**: The objects in the task are being modified.
   * *   **Finished**: The task is complete.
   * *   **Retrying**: The task is being retried.
   * *   **Upgrade**: The task is being upgraded.
   * *   **Locked**: The task is locked.
   * *   **Downgrade**: The task is being downgraded.
   * 
   * Valid values for a change tracking task:
   * 
   * *   **NotConfigured**: The task is not configured.
   * *   **NotStarted**: The task is not started.
   * *   **Prechecking**: The task is being prechecked.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **PreCheckPass**: The task passed the precheck.
   * *   **Starting**: The task is being started.
   * *   **Normal**: The task is running as expected.
   * *   **Retrying**: The task is being retried.
   * *   **Abnormal**: The task is not running as expected.
   * *   **Upgrade**: The task is being upgraded.
   * *   **Locked**: The task is locked.
   * *   **Downgrade**: The task is being downgraded.
   * 
   * @example
   * Migrating
   */
  status?: string;
  /**
   * @remarks
   * The tags of the DTS task to be queried. Specify tags in the JSON format.
   * 
   * >  You can call the **ListTagResources** operation to query the tag key and tag value.
   * 
   * @example
   * [     {         \\"key\\": \\"testK\\",         \\"value\\": \\"testV\\"     }  ]
   */
  tags?: string;
  /**
   * @remarks
   * The type of the query condition. Valid values:
   * 
   * *   **instance**: queries DTS tasks based on the ID of a DTS instance.
   * *   **name**: queries DTS tasks based on the name of a DTS instance. Fuzzy match is supported.
   * *   **srcRds**: queries DTS tasks based on the ID of an ApsaraDB RDS instance. The ApsaraDB RDS instance is the source instance of a DTS task.
   * *   **rds**: queries DTS tasks based on the ID of an ApsaraDB RDS instance. The ApsaraDB RDS instance is the destination instance of a DTS task.
   * 
   * >  You must set the **Params** parameter to specify the content of the query condition.
   * 
   * @example
   * instance
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to skip the **DbObject** parameter in the response. The DbObject parameter specifies the objects of the data migration, data synchronization, or change tracking task. Valid values:
   * 
   * - **true**: does not return **DbObject**.
   * - **false**: returns **DbObject**. If you set this parameter to false, the response time is shortened.
   * 
   * @example
   * true
   */
  withoutDbList?: boolean;
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

