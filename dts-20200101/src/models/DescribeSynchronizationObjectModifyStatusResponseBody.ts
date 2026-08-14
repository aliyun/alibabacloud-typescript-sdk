// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynchronizationObjectModifyStatusResponseBodyDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when initial full data synchronization failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of initial full data synchronization, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of records that have been synchronized during initial full data synchronization.
   * 
   * @example
   * 39754
   */
  progress?: string;
  /**
   * @remarks
   * The status of the synchronization object change. Valid values: -**notstarted**: not started. -**migrating**: synchronizing. -**failed**: synchronization failed. -**finaciallocked**: financial lock.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponseBodyDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The synchronization latency of incremental data synchronization, in seconds.
   * 
   * @example
   * 0
   */
  delay?: string;
  /**
   * @remarks
   * The error message returned when incremental data synchronization failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of incremental data synchronization, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The status of the synchronization object change. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Prechecking**: running the precheck.
   * - **PrecheckFailed**: the precheck failed.
   * - **Migrating**: synchronizing.
   * - **Failed**: synchronization failed.
   * - **Finished**: synchronization completed.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'string',
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatusDetail extends $dara.Model {
  /**
   * @remarks
   * The check result. Valid values:
   * 
   * - Success: The precheck item was passed.
   * - Failed: The precheck item was not passed.
   * 
   * @example
   * Success
   */
  checkStatus?: string;
  /**
   * @remarks
   * The error message returned when the precheck item was not passed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The precheck item.
   * 
   * @example
   * CHECK_CONN_SRC
   */
  itemName?: string;
  /**
   * @remarks
   * The method to fix the precheck failure.
   * > This parameter is returned only when the value of the **CheckStatus** parameter is Failed.
   * 
   * @example
   * CHECK_ERROR_DEST_CONN_REPAIR2
   */
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      errorMessage: 'ErrorMessage',
      itemName: 'ItemName',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      errorMessage: 'string',
      itemName: 'string',
      repairMethod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The execution details of each precheck item.
   */
  detail?: DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatusDetail[];
  /**
   * @remarks
   * The precheck progress, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The precheck status.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatusDetail },
      percent: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when initial schema synchronization failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of initial schema synchronization, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of tables for which initial schema synchronization has been completed.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The initial schema synchronization status. Valid values: NotStarted: not started. Migrating: initializing. Failed: initialization failed. Finished: initialization completed.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationObjectModifyStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The initial full data synchronization status.
   */
  dataInitializationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyDataInitializationStatus;
  /**
   * @remarks
   * The incremental data synchronization status.
   * > This parameter set and its response parameters will be discontinued.
   */
  dataSynchronizationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyDataSynchronizationStatus;
  /**
   * @remarks
   * The error code returned when the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when the call failed.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The error message returned when the task to modify synchronization objects failed.
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
   * The request ID.
   * 
   * @example
   * B38C644B-4395-4F6F-86E3-592F26BE****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the synchronization object change. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Prechecking**: running the precheck.
   * - **PrecheckFailed**: the precheck failed.
   * - **Migrating**: synchronizing.
   * - **Failed**: synchronization failed.
   * - **Finished**: synchronization completed.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The initial schema synchronization status.
   */
  structureInitializationStatus?: DescribeSynchronizationObjectModifyStatusResponseBodyStructureInitializationStatus;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

