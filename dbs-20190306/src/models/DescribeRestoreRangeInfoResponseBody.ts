// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupListFullBackupDetail extends $dara.Model {
  backupSetId?: string;
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupList extends $dara.Model {
  fullBackupDetail?: DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupListFullBackupDetail[];
  static names(): { [key: string]: string } {
    return {
      fullBackupDetail: 'FullBackupDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullBackupDetail: { 'type': 'array', 'itemType': DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupListFullBackupDetail },
    };
  }

  validate() {
    if(Array.isArray(this.fullBackupDetail)) {
      $dara.Model.validateArray(this.fullBackupDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRange extends $dara.Model {
  /**
   * @example
   * 127.0.0.1
   */
  backupSourceHost?: string;
  /**
   * @example
   * rm-testxx
   */
  backupSourceInstanceId?: string;
  /**
   * @example
   * rds
   */
  backupSourceInstanceType?: string;
  /**
   * @example
   * 3306
   */
  backupSourcePort?: string;
  beginTimestampForRestore?: number;
  endTimestampForRestore?: number;
  fullBackupList?: DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupList;
  rangeType?: string;
  sourceEndpointInstanceID?: string;
  sourceEndpointInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      backupSourceHost: 'BackupSourceHost',
      backupSourceInstanceId: 'BackupSourceInstanceId',
      backupSourceInstanceType: 'BackupSourceInstanceType',
      backupSourcePort: 'BackupSourcePort',
      beginTimestampForRestore: 'BeginTimestampForRestore',
      endTimestampForRestore: 'EndTimestampForRestore',
      fullBackupList: 'FullBackupList',
      rangeType: 'RangeType',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSourceHost: 'string',
      backupSourceInstanceId: 'string',
      backupSourceInstanceType: 'string',
      backupSourcePort: 'string',
      beginTimestampForRestore: 'number',
      endTimestampForRestore: 'number',
      fullBackupList: DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupList,
      rangeType: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
    };
  }

  validate() {
    if(this.fullBackupList && typeof (this.fullBackupList as any).validate === 'function') {
      (this.fullBackupList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreRangeInfoResponseBodyItems extends $dara.Model {
  DBSRecoverRange?: DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRange[];
  static names(): { [key: string]: string } {
    return {
      DBSRecoverRange: 'DBSRecoverRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBSRecoverRange: { 'type': 'array', 'itemType': DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRange },
    };
  }

  validate() {
    if(Array.isArray(this.DBSRecoverRange)) {
      $dara.Model.validateArray(this.DBSRecoverRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreRangeInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  items?: DescribeRestoreRangeInfoResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E2BD9DFC-6760-5F49-97C5-DA739E29****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:
   * 
   * - **true**: The request succeeded.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      items: DescribeRestoreRangeInfoResponseBodyItems,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

