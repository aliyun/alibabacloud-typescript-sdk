// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceDatabaseInfo } from "./GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceDatabaseInfo";
import { GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceVersionInfo } from "./GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceVersionInfo";
import { GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTableInfoList } from "./GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTableInfoList";
import { GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetDatabaseInfo } from "./GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetDatabaseInfo";
import { GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetVersionInfo } from "./GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetVersionInfo";


export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetail extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to skip errors. Valid values:
   * 
   * *   **true**: skips the error and continues to execute SQL statements.
   * *   **false**: stops executing SQL statements.
   * 
   * @example
   * false
   */
  ignoreError?: boolean;
  /**
   * @remarks
   * The information about the source database.
   */
  sourceDatabaseInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceDatabaseInfo;
  /**
   * @remarks
   * The schema version of the source database. Valid values:
   * 
   * *   **DATASOURCE**: the default latest version of the system
   * *   **VERSION**: a previous schema version that you manually specify
   * 
   * @example
   * VERSION
   */
  sourceType?: string;
  /**
   * @remarks
   * The version information about the source instance.
   * 
   * > This parameter is displayed only when the value of the **SourceType** parameter is **VERSION**.
   */
  sourceVersionInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceVersionInfo;
  /**
   * @remarks
   * The information about the table whose schema you want to synchronize.
   */
  tableInfoList?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTableInfoList[];
  /**
   * @remarks
   * The information about the destination database.
   */
  targetDatabaseInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetDatabaseInfo;
  /**
   * @remarks
   * The schema version of the destination database. Valid values:
   * 
   * *   **DATASOURCE**: the default latest version of the system
   * *   **VERSION**: a previous schema version that you manually specify
   * 
   * @example
   * DATASOURCE
   */
  targetType?: string;
  /**
   * @remarks
   * The version information about the destination instance.
   * 
   * > This parameter is displayed only when the value of the **SourceType** parameter is **VERSION**.
   */
  targetVersionInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetVersionInfo;
  static names(): { [key: string]: string } {
    return {
      ignoreError: 'IgnoreError',
      sourceDatabaseInfo: 'SourceDatabaseInfo',
      sourceType: 'SourceType',
      sourceVersionInfo: 'SourceVersionInfo',
      tableInfoList: 'TableInfoList',
      targetDatabaseInfo: 'TargetDatabaseInfo',
      targetType: 'TargetType',
      targetVersionInfo: 'TargetVersionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreError: 'boolean',
      sourceDatabaseInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceDatabaseInfo,
      sourceType: 'string',
      sourceVersionInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceVersionInfo,
      tableInfoList: { 'type': 'array', 'itemType': GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTableInfoList },
      targetDatabaseInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetDatabaseInfo,
      targetType: 'string',
      targetVersionInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetVersionInfo,
    };
  }

  validate() {
    if(this.sourceDatabaseInfo && typeof (this.sourceDatabaseInfo as any).validate === 'function') {
      (this.sourceDatabaseInfo as any).validate();
    }
    if(this.sourceVersionInfo && typeof (this.sourceVersionInfo as any).validate === 'function') {
      (this.sourceVersionInfo as any).validate();
    }
    if(Array.isArray(this.tableInfoList)) {
      $dara.Model.validateArray(this.tableInfoList);
    }
    if(this.targetDatabaseInfo && typeof (this.targetDatabaseInfo as any).validate === 'function') {
      (this.targetDatabaseInfo as any).validate();
    }
    if(this.targetVersionInfo && typeof (this.targetVersionInfo as any).validate === 'function') {
      (this.targetVersionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

