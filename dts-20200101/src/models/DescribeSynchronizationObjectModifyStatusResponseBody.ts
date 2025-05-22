// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSynchronizationObjectModifyStatusResponseBodyDataInitializationStatus } from "./DescribeSynchronizationObjectModifyStatusResponseBodyDataInitializationStatus";
import { DescribeSynchronizationObjectModifyStatusResponseBodyDataSynchronizationStatus } from "./DescribeSynchronizationObjectModifyStatusResponseBodyDataSynchronizationStatus";
import { DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatus } from "./DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatus";
import { DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus } from "./DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus";


export class DescribeSynchronizationObjectModifyStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of full data synchronization.
   */
  dataInitializationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data synchronization.
   * 
   * >  This parameter and its sub-parameters will be removed in the future.
   */
  dataSynchronizationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyDataSynchronizationStatus;
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
   * The error message returned if the task failed to modify the objects to be synchronized.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatus;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B38C644B-4395-4F6F-86E3-592F26BE****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the task that changes the objects to be synchronized. Valid values:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Prechecking**: The task is being prechecked.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **Migrating**: The task is running.
   * *   **Failed**: The task failed.
   * *   **Finished**: The task is completed.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The status of schema synchronization.
   */
  structureInitializationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      errorMessage: 'ErrorMessage',
      precheckStatus: 'PrecheckStatus',
      requestId: 'RequestId',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationStatus: DescribeSynchronizationObjectModifyStatusResponseBodyDataInitializationStatus,
      dataSynchronizationStatus: DescribeSynchronizationObjectModifyStatusResponseBodyDataSynchronizationStatus,
      errCode: 'string',
      errMessage: 'string',
      errorMessage: 'string',
      precheckStatus: DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatus,
      requestId: 'string',
      status: 'string',
      structureInitializationStatus: DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus,
      success: 'string',
    };
  }

  validate() {
    if(this.dataInitializationStatus && typeof (this.dataInitializationStatus as any).validate === 'function') {
      (this.dataInitializationStatus as any).validate();
    }
    if(this.dataSynchronizationStatus && typeof (this.dataSynchronizationStatus as any).validate === 'function') {
      (this.dataSynchronizationStatus as any).validate();
    }
    if(this.precheckStatus && typeof (this.precheckStatus as any).validate === 'function') {
      (this.precheckStatus as any).validate();
    }
    if(this.structureInitializationStatus && typeof (this.structureInitializationStatus as any).validate === 'function') {
      (this.structureInitializationStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

