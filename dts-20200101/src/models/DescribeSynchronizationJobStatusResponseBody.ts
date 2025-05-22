// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus } from "./DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus";
import { DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus } from "./DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus";
import { DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint } from "./DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint";
import { DescribeSynchronizationJobStatusResponseBodyPerformance } from "./DescribeSynchronizationJobStatusResponseBodyPerformance";
import { DescribeSynchronizationJobStatusResponseBodyPrecheckStatus } from "./DescribeSynchronizationJobStatusResponseBodyPrecheckStatus";
import { DescribeSynchronizationJobStatusResponseBodySourceEndpoint } from "./DescribeSynchronizationJobStatusResponseBodySourceEndpoint";
import { DescribeSynchronizationJobStatusResponseBodyStructureInitializationStatus } from "./DescribeSynchronizationJobStatusResponseBodyStructureInitializationStatus";
import { DescribeSynchronizationJobStatusResponseBodySynchronizationObjects } from "./DescribeSynchronizationJobStatusResponseBodySynchronizationObjects";


export class DescribeSynchronizationJobStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp generated when the latest data record was synchronized.
   * 
   * >  You can use a search engine to obtain a UNIX timestamp converter.
   * 
   * @example
   * 1610616144
   */
  checkpoint?: string;
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
  dataInitializationStatus?: DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data synchronization.
   */
  dataSynchronizationStatus?: DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus;
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
   * The synchronization delay, in milliseconds.
   * 
   * @example
   * 506
   */
  delayMillis?: number;
  /**
   * @remarks
   * The connection settings of the destination instance.
   */
  destinationEndpoint?: DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
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
   * 2021-03-07T16:00:00Z
   */
  expireTime?: string;
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
  performance?: DescribeSynchronizationJobStatusResponseBodyPerformance;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeSynchronizationJobStatusResponseBodyPrecheckStatus;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DACDF659-AFC6-4DC8-ADB8-4569419A4****
   */
  requestId?: string;
  /**
   * @remarks
   * The connection settings of the source instance.
   */
  sourceEndpoint?: DescribeSynchronizationJobStatusResponseBodySourceEndpoint;
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
  structureInitializationStatus?: DescribeSynchronizationJobStatusResponseBodyStructureInitializationStatus;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: string;
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
  synchronizationObjects?: DescribeSynchronizationJobStatusResponseBodySynchronizationObjects[];
  /**
   * @example
   * exjk1alb116****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      dataInitialization: 'DataInitialization',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      delay: 'Delay',
      delayMillis: 'DelayMillis',
      destinationEndpoint: 'DestinationEndpoint',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      errorMessage: 'ErrorMessage',
      expireTime: 'ExpireTime',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      requestId: 'RequestId',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitialization: 'StructureInitialization',
      structureInitializationStatus: 'StructureInitializationStatus',
      success: 'Success',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobClass: 'SynchronizationJobClass',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationJobName: 'SynchronizationJobName',
      synchronizationObjects: 'SynchronizationObjects',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      dataInitialization: 'string',
      dataInitializationStatus: DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus,
      dataSynchronizationStatus: DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus,
      delay: 'string',
      delayMillis: 'number',
      destinationEndpoint: DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint,
      errCode: 'string',
      errMessage: 'string',
      errorMessage: 'string',
      expireTime: 'string',
      payType: 'string',
      performance: DescribeSynchronizationJobStatusResponseBodyPerformance,
      precheckStatus: DescribeSynchronizationJobStatusResponseBodyPrecheckStatus,
      requestId: 'string',
      sourceEndpoint: DescribeSynchronizationJobStatusResponseBodySourceEndpoint,
      status: 'string',
      structureInitialization: 'string',
      structureInitializationStatus: DescribeSynchronizationJobStatusResponseBodyStructureInitializationStatus,
      success: 'string',
      synchronizationDirection: 'string',
      synchronizationJobClass: 'string',
      synchronizationJobId: 'string',
      synchronizationJobName: 'string',
      synchronizationObjects: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodySynchronizationObjects },
      taskId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

