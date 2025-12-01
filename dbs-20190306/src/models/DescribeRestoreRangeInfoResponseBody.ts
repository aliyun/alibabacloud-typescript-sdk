// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupListFullBackupDetail extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * qecnsxkd****
   */
  backupSetId?: string;
  /**
   * @remarks
   * The end time of the full backup task. Example: 1646760308000.
   * 
   * @example
   * 1646760308000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the full backup task. Example: 1646760282000.
   * 
   * @example
   * 1646760282000
   */
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
   * @remarks
   * The beginning of the time range to which you can restore data.
   * 
   * @example
   * 1646760282000
   */
  beginTimestampForRestore?: number;
  /**
   * @remarks
   * The end of the time range to which you can restore data.
   * 
   * @example
   * 1646760308000
   */
  endTimestampForRestore?: number;
  /**
   * @remarks
   * If the value of the RangeType parameter is point, this parameter is returned. The value of this parameter describes information about all backup points in the time range.
   */
  fullBackupList?: DescribeRestoreRangeInfoResponseBodyItemsDBSRecoverRangeFullBackupList;
  /**
   * @remarks
   * The type of the time range to which you can restore data.
   * 
   * *   **point**: The time range contains discrete points in time at which full backups were performed.
   * *   **range**: The time range is a period of time for which continuous backup is performed. You can specify a random point in time in the time range to restore data.
   * 
   * @example
   * point
   */
  rangeType?: string;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * @example
   * rm-bp106x9tk2c91****
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The location of the database.
   * 
   * @example
   * rds
   */
  sourceEndpointInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The information about the time ranges to which you can restore data.
   */
  items?: DescribeRestoreRangeInfoResponseBodyItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E2BD9DFC-6760-5F49-97C5-DA739E29****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
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

