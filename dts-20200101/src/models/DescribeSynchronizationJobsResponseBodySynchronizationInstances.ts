// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus } from "./DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus";
import { DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus } from "./DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus";
import { DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint } from "./DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint";
import { DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance } from "./DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance";
import { DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus } from "./DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus";
import { DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint } from "./DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint";
import { DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus } from "./DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus";
import { DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects } from "./DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects";
import { DescribeSynchronizationJobsResponseBodySynchronizationInstancesTags } from "./DescribeSynchronizationJobsResponseBodySynchronizationInstancesTags";


export class DescribeSynchronizationJobsResponseBodySynchronizationInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the data synchronization task was created. The time is displayed in the *yyyy-MM-dd* *HH:mm:ss*.0 format (UTC+8).
   * 
   * @example
   * 2021-06-28 17:34:53.0
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether full data synchronization is performed. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  dataInitialization?: string;
  /**
   * @remarks
   * The status of full data synchronization.
   */
  dataInitializationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data synchronization.
   * 
   * >  This parameter and its sub-parameters are no longer available.
   */
  dataSynchronizationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus;
  /**
   * @remarks
   * The synchronization latency, in seconds.
   * 
   * @example
   * 0
   */
  delay?: string;
  /**
   * @remarks
   * The connection settings of the destination instance.
   */
  destinationEndpoint?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint;
  /**
   * @remarks
   * The error message returned if data synchronization failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the data synchronization instance expires. The time is displayed in the *yyyy-MM-dd*T*HH:mm:ss*Z format in UTC.
   * 
   * >  This parameter is returned only if the return value of the **PayType** parameter is **PrePaid**.
   * 
   * @example
   * 2021-07-07T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the instance was created. The time is displayed in the *yyyy-MM-dd*T*HH:mm:ss*Z format in UTC.
   * 
   * @example
   * 2021-06-28T09:36:32Z
   */
  instanceCreateTime?: string;
  /**
   * @remarks
   * The time when the data synchronization task was created. The time is displayed in the *yyyy-MM-dd*T*HH:mm:ss*Z format in UTC.
   * 
   * @example
   * 2021-06-28T09:34:53Z
   */
  jobCreateTime?: string;
  /**
   * @remarks
   * The billing method of the data synchronization instance. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance of the data synchronization instance.
   */
  performance?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus;
  /**
   * @remarks
   * The connection settings of the source instance.
   */
  sourceEndpoint?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint;
  /**
   * @remarks
   * The status of the data synchronization task. Valid values:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Prechecking**: The task is being prechecked.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **Initializing**: The task is performing initial synchronization.
   * *   **InitializeFailed**: Initial synchronization failed.
   * *   **Synchronizing**: The task is synchronizing data.
   * *   **Failed**: The task failed to synchronize data.
   * *   **Suspending**: The task is paused.
   * *   **Modifying**: The objects in the task are being modified.
   * *   **Finished**: The task is completed.
   * 
   * @example
   * synchronizing
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether schema synchronization is performed. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  structureInitialization?: string;
  /**
   * @remarks
   * The status of schema synchronization.
   */
  structureInitializationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The specification of the data synchronization instance.
   * 
   * @example
   * large
   */
  synchronizationJobClass?: string;
  /**
   * @remarks
   * The ID of the data synchronization instance.
   * 
   * @example
   * dtsexjk1alb116****
   */
  synchronizationJobId?: string;
  /**
   * @remarks
   * The name of the data synchronization task.
   * 
   * @example
   * dtstest
   */
  synchronizationJobName?: string;
  /**
   * @remarks
   * The objects that are synchronized by the task.
   */
  synchronizationObjects?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects[];
  /**
   * @remarks
   * The collection of tags.
   */
  tags?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataInitialization: 'DataInitialization',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      delay: 'Delay',
      destinationEndpoint: 'DestinationEndpoint',
      errorMessage: 'ErrorMessage',
      expireTime: 'ExpireTime',
      instanceCreateTime: 'InstanceCreateTime',
      jobCreateTime: 'JobCreateTime',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitialization: 'StructureInitialization',
      structureInitializationStatus: 'StructureInitializationStatus',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobClass: 'SynchronizationJobClass',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationJobName: 'SynchronizationJobName',
      synchronizationObjects: 'SynchronizationObjects',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataInitialization: 'string',
      dataInitializationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus,
      dataSynchronizationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus,
      delay: 'string',
      destinationEndpoint: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint,
      errorMessage: 'string',
      expireTime: 'string',
      instanceCreateTime: 'string',
      jobCreateTime: 'string',
      payType: 'string',
      performance: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance,
      precheckStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus,
      sourceEndpoint: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint,
      status: 'string',
      structureInitialization: 'string',
      structureInitializationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus,
      synchronizationDirection: 'string',
      synchronizationJobClass: 'string',
      synchronizationJobId: 'string',
      synchronizationJobName: 'string',
      synchronizationObjects: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects },
      tags: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesTags },
    };
  }

  validate() {
    if(this.dataInitializationStatus && typeof (this.dataInitializationStatus as any).validate === 'function') {
      (this.dataInitializationStatus as any).validate();
    }
    if(this.dataSynchronizationStatus && typeof (this.dataSynchronizationStatus as any).validate === 'function') {
      (this.dataSynchronizationStatus as any).validate();
    }
    if(this.destinationEndpoint && typeof (this.destinationEndpoint as any).validate === 'function') {
      (this.destinationEndpoint as any).validate();
    }
    if(this.performance && typeof (this.performance as any).validate === 'function') {
      (this.performance as any).validate();
    }
    if(this.precheckStatus && typeof (this.precheckStatus as any).validate === 'function') {
      (this.precheckStatus as any).validate();
    }
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    if(this.structureInitializationStatus && typeof (this.structureInitializationStatus as any).validate === 'function') {
      (this.structureInitializationStatus as any).validate();
    }
    if(Array.isArray(this.synchronizationObjects)) {
      $dara.Model.validateArray(this.synchronizationObjects);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

