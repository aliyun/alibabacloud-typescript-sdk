// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupMachineStatusResponseBodyBackupMachineStatusErrorList extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * TARGET_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * FAILED
   */
  errorStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorStatus: 'ErrorStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupMachineStatusResponseBodyBackupMachineStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware agent.
   * 
   * @example
   * c-000dbefaw9f7gnbw****
   */
  clientId?: string;
  /**
   * @remarks
   * The status of the anti-ransomware agent. Valid values:
   * 
   * *   **ONLINE**: normal
   * *   **CLIENT_CONNECTION_ERROR**: abnormal
   * *   **UNINSTALLING**: being uninstalled
   * *   **UNINSTALL_FAILED**: failed to be uninstalled
   * *   **UPGRADING**: being upgraded
   * *   **UPGRADE_FAILED**: failed to be upgraded
   * 
   * @example
   * ONLINE
   */
  clientStatus?: string;
  /**
   * @remarks
   * The version of the anti-ransomware agent.
   * 
   * @example
   * 2.11.0
   */
  clientVersion?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * CLIENT_CONNECTION_ERROR
   */
  errorCode?: string;
  /**
   * @remarks
   * An array that consists of the error information reported by the backup server.
   */
  errorList?: DescribeBackupMachineStatusResponseBodyBackupMachineStatusErrorList[];
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * i-2zeaqkb80vloxjcj****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the server resides.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The number of backup versions.
   * 
   * @example
   * 7
   */
  savedBackupCount?: number;
  /**
   * @remarks
   * The status of the anti-ransomware service. Valid values:
   * *   **SERVICE_EXCEPTION**: Service exception
   * *   **RESTORING**: Restoring
   * *   **BACKING_UP**: Backup in process
   * 
   * @example
   * RESTORING
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The status of the anti-ransomware agent. Valid values:
   * 
   * *   **NOT_INSTALLED**: not installed
   * *   **CLIENT_CONNECTION_ERROR**: abnormal
   * *   **ACTIVATED**: normal
   * 
   * @example
   * ACTIVATED
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * eb2c782e-64f2-4590-a86c-d90164df****
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the backup vault in which the backup data is stored.
   * 
   * @example
   * v-0005i2qh5fcr6seo****
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientStatus: 'ClientStatus',
      clientVersion: 'ClientVersion',
      errorCode: 'ErrorCode',
      errorList: 'ErrorList',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      savedBackupCount: 'SavedBackupCount',
      serviceStatus: 'ServiceStatus',
      status: 'Status',
      uuid: 'Uuid',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientStatus: 'string',
      clientVersion: 'string',
      errorCode: 'string',
      errorList: { 'type': 'array', 'itemType': DescribeBackupMachineStatusResponseBodyBackupMachineStatusErrorList },
      instanceId: 'string',
      regionId: 'string',
      savedBackupCount: 'number',
      serviceStatus: 'string',
      status: 'string',
      uuid: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorList)) {
      $dara.Model.validateArray(this.errorList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupMachineStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup status of the server.
   */
  backupMachineStatus?: DescribeBackupMachineStatusResponseBodyBackupMachineStatus;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupMachineStatus: 'BackupMachineStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMachineStatus: DescribeBackupMachineStatusResponseBodyBackupMachineStatus,
      requestId: 'string',
    };
  }

  validate() {
    if(this.backupMachineStatus && typeof (this.backupMachineStatus as any).validate === 'function') {
      (this.backupMachineStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

