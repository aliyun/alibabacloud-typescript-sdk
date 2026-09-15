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
   * The error status information.
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
   * The ID of the anti-ransomware client.
   * 
   * @example
   * c-000dbefaw9f7gnbw****
   */
  clientId?: string;
  /**
   * @remarks
   * The service status. Valid values:
   * 
   * - **ONLINE**: Normal.
   * - **CLIENT_CONNECTION_ERROR**: The client connection is abnormal.
   * - **UNINSTALLING**: Uninstalling.
   * - **UNINSTALL_FAILED**: Uninstallation failed.
   * - **UPGRADING**: Upgrading.
   * - **UPGRADE_FAILED**: Upgrade failed.
   * - **INSTALLING**: The client is being installed. This status typically appears after the policy is bound to a server for the first time.
   * 
   * @example
   * ONLINE
   */
  clientStatus?: string;
  /**
   * @remarks
   * The version number of the anti-ransomware client.
   * 
   * @example
   * 2.11.0
   */
  clientVersion?: string;
  /**
   * @remarks
   * The error code returned for an abnormal status.
   * 
   * @example
   * CLIENT_CONNECTION_ERROR
   */
  errorCode?: string;
  /**
   * @remarks
   * The list of error messages reported by the backup server.
   */
  errorList?: DescribeBackupMachineStatusResponseBodyBackupMachineStatusErrorList[];
  /**
   * @remarks
   * The ID of the server instance.
   * 
   * @example
   * i-2zeaqkb80vloxjcj****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the server.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The number of restorable versions.
   * 
   * @example
   * 7
   */
  savedBackupCount?: number;
  /**
   * @remarks
   * The service status. Valid values:
   * - **SERVICE_EXCEPTION**: Service exception.
   * - **RESTORING**: Restoring.
   * - **BACKING_UP**: Backing up.
   * 
   * @example
   * RESTORING
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The status of the anti-ransomware client. Valid values:
   * - **NOT_INSTALLED**: Not installed.
   * - **CLIENT_CONNECTION_ERROR**: The client status is abnormal.
   * - **ACTIVATED**: Normal.
   * - **INSTALLING**: The client is being installed. This status typically appears after the policy is bound to a server for the first time.
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
   * The ID of the vault where backup data is stored.
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
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
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

