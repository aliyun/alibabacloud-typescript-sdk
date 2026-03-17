// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHanaRestoresResponseBodyHanaRestoreHanaRestores extends $dara.Model {
  backupID?: number;
  backupPrefix?: string;
  checkAccess?: boolean;
  clearLog?: boolean;
  clusterId?: string;
  currentPhase?: number;
  currentProgress?: number;
  databaseName?: string;
  databaseRestoreId?: number;
  endTime?: number;
  logPosition?: number;
  maxPhase?: number;
  maxProgress?: number;
  message?: string;
  mode?: string;
  phase?: string;
  reachedTime?: number;
  recoveryPointInTime?: number;
  restoreId?: string;
  source?: string;
  sourceClusterId?: string;
  startTime?: number;
  state?: string;
  status?: string;
  systemCopy?: boolean;
  useCatalog?: boolean;
  useDelta?: boolean;
  vaultId?: string;
  volumeId?: number;
  static names(): { [key: string]: string } {
    return {
      backupID: 'BackupID',
      backupPrefix: 'BackupPrefix',
      checkAccess: 'CheckAccess',
      clearLog: 'ClearLog',
      clusterId: 'ClusterId',
      currentPhase: 'CurrentPhase',
      currentProgress: 'CurrentProgress',
      databaseName: 'DatabaseName',
      databaseRestoreId: 'DatabaseRestoreId',
      endTime: 'EndTime',
      logPosition: 'LogPosition',
      maxPhase: 'MaxPhase',
      maxProgress: 'MaxProgress',
      message: 'Message',
      mode: 'Mode',
      phase: 'Phase',
      reachedTime: 'ReachedTime',
      recoveryPointInTime: 'RecoveryPointInTime',
      restoreId: 'RestoreId',
      source: 'Source',
      sourceClusterId: 'SourceClusterId',
      startTime: 'StartTime',
      state: 'State',
      status: 'Status',
      systemCopy: 'SystemCopy',
      useCatalog: 'UseCatalog',
      useDelta: 'UseDelta',
      vaultId: 'VaultId',
      volumeId: 'VolumeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupID: 'number',
      backupPrefix: 'string',
      checkAccess: 'boolean',
      clearLog: 'boolean',
      clusterId: 'string',
      currentPhase: 'number',
      currentProgress: 'number',
      databaseName: 'string',
      databaseRestoreId: 'number',
      endTime: 'number',
      logPosition: 'number',
      maxPhase: 'number',
      maxProgress: 'number',
      message: 'string',
      mode: 'string',
      phase: 'string',
      reachedTime: 'number',
      recoveryPointInTime: 'number',
      restoreId: 'string',
      source: 'string',
      sourceClusterId: 'string',
      startTime: 'number',
      state: 'string',
      status: 'string',
      systemCopy: 'boolean',
      useCatalog: 'boolean',
      useDelta: 'boolean',
      vaultId: 'string',
      volumeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRestoresResponseBodyHanaRestore extends $dara.Model {
  hanaRestores?: DescribeHanaRestoresResponseBodyHanaRestoreHanaRestores[];
  static names(): { [key: string]: string } {
    return {
      hanaRestores: 'HanaRestores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hanaRestores: { 'type': 'array', 'itemType': DescribeHanaRestoresResponseBodyHanaRestoreHanaRestores },
    };
  }

  validate() {
    if(Array.isArray(this.hanaRestores)) {
      $dara.Model.validateArray(this.hanaRestores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRestoresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  hanaRestore?: DescribeHanaRestoresResponseBodyHanaRestore;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7DEFC897-8F05-5C05-912C-C9A9510FBFF1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 19
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanaRestore: 'HanaRestore',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanaRestore: DescribeHanaRestoresResponseBodyHanaRestore,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.hanaRestore && typeof (this.hanaRestore as any).validate === 'function') {
      (this.hanaRestore as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

