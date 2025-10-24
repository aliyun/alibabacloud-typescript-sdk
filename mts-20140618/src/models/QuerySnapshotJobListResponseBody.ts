// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySnapshotJobListResponseBodyNonExistSnapshotJobIds extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobInput extends $dara.Model {
  /**
   * @remarks
   * The ID of the snapshot job.
   * 
   * @example
   * example
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the MPS queue to which the snapshot job was submitted.
   * 
   * @example
   * example-location
   */
  location?: string;
  /**
   * @remarks
   * The error code returned when the job fails. This parameter is not returned if the job is successfully processed.
   * 
   * @example
   * example.flv
   */
  object?: string;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * acs:ram::1:role/testrole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobMNSMessageResult extends $dara.Model {
  /**
   * @remarks
   * The number of snapshots that were taken.
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * The OSS bucket that stores the input file.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the region in which the input OSS bucket is located.
   * 
   * @example
   * 799454621135656C7F815F198A76****
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigOutputFile extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket that stores the output file.
   * 
   * @example
   * example
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the region in which the output OSS bucket is located.
   * 
   * @example
   * example-location
   */
  location?: string;
  /**
   * @remarks
   * The OSS object that is generated as the output file of the tiling job.
   * 
   * @example
   * example.png
   */
  object?: string;
  /**
   * @remarks
   * The ARN of the specified RAM role. Format: acs:ram::$accountID:role/$roleName.
   * 
   * @example
   * acs:ram::1:role/testrole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOut extends $dara.Model {
  /**
   * @remarks
   * The interval for taking snapshots.
   * 
   * *   If this Interval parameter is specified in the request, snapshots are taken at intervals. The value must be greater than 0.
   * *   Unit: seconds.
   * *   Default value: **10**.
   * 
   * @example
   * 8
   */
  cellHeight?: string;
  /**
   * @remarks
   * The number of rows that the tiled image can contain. Default value: **10**.
   * 
   * @example
   * 3
   */
  cellSelStep?: string;
  /**
   * @remarks
   * The type of the snapshot. Valid values:
   * 
   * *   **normal**: normal frames.
   * *   **intra**: I-frames.
   * *   Default value: **intra**.
   * 
   * @example
   * 8
   */
  cellWidth?: string;
  /**
   * @remarks
   * Indicates whether the single images are retained. Default value: **true**.
   * 
   * @example
   * black
   */
  color?: string;
  /**
   * @remarks
   * The height of the output snapshot.
   * 
   * @example
   * 10
   */
  columns?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) output file of the snapshot job.
   * 
   * @example
   * false
   */
  isKeepCellPic?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the specified RAM role. Format: acs:ram::$accountID:role/$roleName.
   * 
   * @example
   * 10
   */
  lines?: string;
  /**
   * @remarks
   * The width of the output snapshot.
   * 
   * @example
   * 0
   */
  margin?: string;
  /**
   * @remarks
   * The number of columns that the tiled image can contain. Default value: **10**.
   * 
   * @example
   * 0
   */
  padding?: string;
  static names(): { [key: string]: string } {
    return {
      cellHeight: 'CellHeight',
      cellSelStep: 'CellSelStep',
      cellWidth: 'CellWidth',
      color: 'Color',
      columns: 'Columns',
      isKeepCellPic: 'IsKeepCellPic',
      lines: 'Lines',
      margin: 'Margin',
      padding: 'Padding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cellHeight: 'string',
      cellSelStep: 'string',
      cellWidth: 'string',
      color: 'string',
      columns: 'string',
      isKeepCellPic: 'string',
      lines: 'string',
      margin: 'string',
      padding: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOutputFile extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the job fails. This parameter is not returned if the job is successfully processed.
   * 
   * @example
   * example
   */
  bucket?: string;
  /**
   * @remarks
   * The error message returned when the job fails. This parameter is not returned if the job is successfully processed.
   * 
   * @example
   * example-location
   */
  location?: string;
  /**
   * @remarks
   * The ID of the message. This parameter is not returned if the job fails.
   * 
   * @example
   * example.png
   */
  object?: string;
  /**
   * @remarks
   * The message sent by MNS to notify the user of the job result.
   * 
   * @example
   * acs:ram::1:role/testrole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTimeArray extends $dara.Model {
  timePointList?: number[];
  static names(): { [key: string]: string } {
    return {
      timePointList: 'TimePointList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timePointList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.timePointList)) {
      $dara.Model.validateArray(this.timePointList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the region in which the output OSS bucket is located.
   * 
   * @example
   * intra
   */
  frameType?: string;
  /**
   * @remarks
   * The number of snapshots to take. If the Num parameter is set in the request, snapshots are taken at intervals.
   * 
   * @example
   * 8
   */
  height?: string;
  /**
   * @remarks
   * The OSS object that is generated as the output file of the snapshot job.
   * 
   * @example
   * 10
   */
  interval?: string;
  /**
   * @remarks
   * The status of the snapshot job. 
   * 
   * - **Submitted**: The job was submitted.
   * - **Snapshoting**: The job is being processed.
   * - **Success**: The job was successfully processed.
   * - **Fail**: The job failed.
   * 
   * @example
   * 10
   */
  num?: string;
  /**
   * @remarks
   * The OSS output file of the tiling job.
   */
  outputFile?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigOutputFile;
  /**
   * @remarks
   * The margin width of the tiled image.
   * 
   * *   Default value: **0**.
   * *   Unit: pixel.
   */
  tileOut?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOut;
  /**
   * @remarks
   * The error message returned when the job fails. This parameter is not returned if the job is successfully processed.
   */
  tileOutputFile?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOutputFile;
  /**
   * @remarks
   * The width of a single image. The default value is the width of the output snapshot.
   * 
   * @example
   * 4
   */
  time?: string;
  timeArray?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTimeArray;
  /**
   * @remarks
   * The OSS bucket that stores the output file.
   * 
   * @example
   * 8
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      frameType: 'FrameType',
      height: 'Height',
      interval: 'Interval',
      num: 'Num',
      outputFile: 'OutputFile',
      tileOut: 'TileOut',
      tileOutputFile: 'TileOutputFile',
      time: 'Time',
      timeArray: 'TimeArray',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameType: 'string',
      height: 'string',
      interval: 'string',
      num: 'string',
      outputFile: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigOutputFile,
      tileOut: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOut,
      tileOutputFile: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOutputFile,
      time: 'string',
      timeArray: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTimeArray,
      width: 'string',
    };
  }

  validate() {
    if(this.outputFile && typeof (this.outputFile as any).validate === 'function') {
      (this.outputFile as any).validate();
    }
    if(this.tileOut && typeof (this.tileOut as any).validate === 'function') {
      (this.tileOut as any).validate();
    }
    if(this.tileOutputFile && typeof (this.tileOutputFile as any).validate === 'function') {
      (this.tileOutputFile as any).validate();
    }
    if(this.timeArray && typeof (this.timeArray as any).validate === 'function') {
      (this.timeArray as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJob extends $dara.Model {
  /**
   * @remarks
   * You can call this operation to query up to 10 snapshot jobs at a time.
   * 
   * 
   * ## Limits on QPS
   * 
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limit](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1
   */
  count?: string;
  /**
   * @remarks
   * The stride of a single image.
   * 
   * @example
   * 2021-06-30T12:34:29Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The OSS output file of the tiling job.
   * 
   * @example
   * cc6cbef8e8d5481ca536f5d2a466****
   */
  id?: string;
  /**
   * @remarks
   * The number of snapshots that are contained in the tiled image.
   */
  input?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobInput;
  /**
   * @remarks
   * The OSS object that is used as the input file.
   */
  MNSMessageResult?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobMNSMessageResult;
  /**
   * @remarks
   * The ARN of the specified RAM role. Format: acs:ram::$accountID:role/$roleName.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  message?: string;
  /**
   * @remarks
   * The start time for taking snapshots. Unit: milliseconds.
   * 
   * @example
   * b11c171cced04565b1f38f1ecc39****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The height of a single image. The default value is the height of the output snapshot.
   */
  snapshotConfig?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfig;
  /**
   * @remarks
   * The information about the job input.
   * 
   * @example
   * Snapshoting
   */
  state?: string;
  /**
   * @remarks
   * The snapshot job IDs that do not exist. This parameter is not returned if all specified snapshot jobs are found.
   * 
   * @example
   * 7
   */
  tileCount?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of the query results. The value is a 32-bit UUID. If the returned query results cannot be displayed within one page, this parameter is returned. The value of this parameter is updated for each query.
   * 
   * @example
   * testid-001
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      creationTime: 'CreationTime',
      id: 'Id',
      input: 'Input',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      pipelineId: 'PipelineId',
      snapshotConfig: 'SnapshotConfig',
      state: 'State',
      tileCount: 'TileCount',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      creationTime: 'string',
      id: 'string',
      input: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobInput,
      MNSMessageResult: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobMNSMessageResult,
      message: 'string',
      pipelineId: 'string',
      snapshotConfig: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfig,
      state: 'string',
      tileCount: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.MNSMessageResult && typeof (this.MNSMessageResult as any).validate === 'function') {
      (this.MNSMessageResult as any).validate();
    }
    if(this.snapshotConfig && typeof (this.snapshotConfig as any).validate === 'function') {
      (this.snapshotConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBodySnapshotJobList extends $dara.Model {
  snapshotJob?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJob[];
  static names(): { [key: string]: string } {
    return {
      snapshotJob: 'SnapshotJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotJob: { 'type': 'array', 'itemType': QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJob },
    };
  }

  validate() {
    if(Array.isArray(this.snapshotJob)) {
      $dara.Model.validateArray(this.snapshotJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySnapshotJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The OSS object that is used as the input file.
   * 
   * @example
   * b11c171cced04565b1f38f1ecc39****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The OSS object that is generated as the output file of the tiling job.
   */
  nonExistSnapshotJobIds?: QuerySnapshotJobListResponseBodyNonExistSnapshotJobIds;
  /**
   * @remarks
   * The ID of the snapshot job.
   * 
   * @example
   * 34BCAB31-2833-43A7-9FBD-B34302AB23EQ
   */
  requestId?: string;
  /**
   * @remarks
   * The distance between images.
   * 
   * *   Default value: **0**.
   * *   Unit: pixel.
   */
  snapshotJobList?: QuerySnapshotJobListResponseBodySnapshotJobList;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      nonExistSnapshotJobIds: 'NonExistSnapshotJobIds',
      requestId: 'RequestId',
      snapshotJobList: 'SnapshotJobList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      nonExistSnapshotJobIds: QuerySnapshotJobListResponseBodyNonExistSnapshotJobIds,
      requestId: 'string',
      snapshotJobList: QuerySnapshotJobListResponseBodySnapshotJobList,
    };
  }

  validate() {
    if(this.nonExistSnapshotJobIds && typeof (this.nonExistSnapshotJobIds as any).validate === 'function') {
      (this.nonExistSnapshotJobIds as any).validate();
    }
    if(this.snapshotJobList && typeof (this.snapshotJobList as any).validate === 'function') {
      (this.snapshotJobList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

