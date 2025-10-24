// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSnapshotJobResponseBodySnapshotJobInput extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket that stores the object.
   * 
   * @example
   * example
   */
  bucket?: string;
  /**
   * @remarks
   * The region in which the OSS bucket resides.
   * 
   * @example
   * example-location\\"
   */
  location?: string;
  /**
   * @remarks
   * The OSS object that is used as the input file.
   * 
   * @example
   * example.flv
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

export class SubmitSnapshotJobResponseBodySnapshotJobMNSMessageResult extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the message. This parameter is not returned if the job fails.
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

export class SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigOutputFile extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket that stores the output snapshot.
   * 
   * @example
   * example
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the OSS bucket for storing the output snapshot resides.
   * 
   * @example
   * example-location
   */
  location?: string;
  /**
   * @remarks
   * The OSS object that is generated as the output file of the snapshot job.
   * 
   * @example
   * test.png
   */
  object?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the specified RAM role. Format: acs:ram::$accountID:role/$roleName.
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

export class SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOut extends $dara.Model {
  /**
   * @remarks
   * The height of a single image. The default value is the height of the output snapshot.
   * 
   * @example
   * 100
   */
  cellHeight?: string;
  /**
   * @remarks
   * The step for selecting a single image.
   * 
   * @example
   * 3
   */
  cellSelStep?: string;
  /**
   * @remarks
   * The width of a single image. The default value is the width of the output snapshot.
   * 
   * @example
   * 100
   */
  cellWidth?: string;
  /**
   * @remarks
   * The background color.
   * 
   * *   Default value: **black**.
   * *   You can set the Color parameter to a **color keyword** or **random** in the request.
   * 
   * > If you want to set the background color to black, you can specify the color keyword in one of the following three formats: Black, black, and #000000.
   * 
   * @example
   * black
   */
  color?: string;
  /**
   * @remarks
   * The number of columns that the tiled image contains. Default value: **10**.
   * 
   * @example
   * 10
   */
  columns?: string;
  /**
   * @remarks
   * Indicates whether the single images are retained. Valid values:
   * 
   * *   **true**: The single images are retained.
   * *   **false**: The single images are not retained.
   * *   Default value: **true**.
   * 
   * @example
   * false
   */
  isKeepCellPic?: string;
  /**
   * @remarks
   * The number of rows that the tiled image contains. Default value: **10**.
   * 
   * @example
   * 10
   */
  lines?: string;
  /**
   * @remarks
   * The margin width of the tiled image.
   * 
   * *   Default value: **0**.
   * *   Unit: pixel.
   * 
   * @example
   * 5
   */
  margin?: string;
  /**
   * @remarks
   * The distance between two consecutive single images in the tiled image.
   * 
   * *   Default value: **0**.
   * *   Unit: pixel.
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

export class SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOutputFile extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket that stores the object.
   * 
   * @example
   * example
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the region in which the OSS bucket that stores the object is located.
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

export class SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTimeArray extends $dara.Model {
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

export class SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfig extends $dara.Model {
  /**
   * @remarks
   * The type of the snapshot. Default value: **Normal**. Valid values:
   * 
   * *   **normal**: normal frames.
   * *   **intra**: I-frames (keyframes).
   * 
   * > If the FrameType parameter is set to intra in the request, only keyframes are captured. If no keyframe is found at the specified point in time, the keyframe closest to the specified point in time is captured. Keyframes are captured faster than normal frames if the same snapshot rules are applied.
   * 
   * @example
   * intra
   */
  frameType?: string;
  /**
   * @remarks
   * The height of the output snapshot.
   * 
   * @example
   * 8
   */
  height?: string;
  /**
   * @remarks
   * The interval for capturing snapshots.
   * 
   * *   If this parameter is specified in the request, snapshots are captured at intervals. The value must be greater than 0 in the request.
   * *   Unit: seconds.
   * *   Default value: **10**.
   * 
   * @example
   * 20
   */
  interval?: string;
  /**
   * @remarks
   * The number of snapshots. If the Num parameter is set in the request, snapshots are captured at intervals.
   * 
   * @example
   * 10
   */
  num?: string;
  /**
   * @remarks
   * The information about the output file of the snapshot job.
   */
  outputFile?: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigOutputFile;
  /**
   * @remarks
   * The tiling configurations.
   */
  tileOut?: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOut;
  /**
   * @remarks
   * The information about the output file of the tiling job.
   */
  tileOutputFile?: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOutputFile;
  /**
   * @remarks
   * The start time for capturing snapshots. Unit: milliseconds.
   * 
   * @example
   * 5
   */
  time?: string;
  timeArray?: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTimeArray;
  /**
   * @remarks
   * The width of the output snapshot.
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
      outputFile: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigOutputFile,
      tileOut: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOut,
      tileOutputFile: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOutputFile,
      time: 'string',
      timeArray: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTimeArray,
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

export class SubmitSnapshotJobResponseBodySnapshotJob extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * ResourceContentBad
   */
  code?: string;
  /**
   * @remarks
   * The number of snapshots that are captured.
   * 
   * @example
   * 1
   */
  count?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2021-05-19T03:11:48Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the snapshot job.
   * 
   * @example
   * f4e3b9ba9f3840c39d6e288056f0****
   */
  id?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  input?: SubmitSnapshotJobResponseBodySnapshotJobInput;
  /**
   * @remarks
   * The message sent by MNS to notify the user of the job result.
   */
  MNSMessageResult?: SubmitSnapshotJobResponseBodySnapshotJobMNSMessageResult;
  /**
   * @remarks
   * The error message returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  message?: string;
  /**
   * @remarks
   * The ID of the MPS queue to which the snapshot job is submitted.
   * 
   * @example
   * dd3dae411e704030b921e52698e5****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The snapshot configurations.
   */
  snapshotConfig?: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfig;
  /**
   * @remarks
   * The status of the snapshot job. Valid values:
   * 
   * *   **Submitted**: The job is submitted.
   * *   **Snapshoting**: The job is being processed.
   * *   **Success**: The job is successful.
   * *   **Fail**: The job fails.
   * 
   * @example
   * Snapshoting
   */
  state?: string;
  /**
   * @remarks
   * The number of single images that are contained in the tiled image.
   * 
   * @example
   * 5
   */
  tileCount?: string;
  /**
   * @remarks
   * The custom data.
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
      input: SubmitSnapshotJobResponseBodySnapshotJobInput,
      MNSMessageResult: SubmitSnapshotJobResponseBodySnapshotJobMNSMessageResult,
      message: 'string',
      pipelineId: 'string',
      snapshotConfig: SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfig,
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

export class SubmitSnapshotJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 19B6D8C5-A5DD-467A-B435-29D393C71E2D
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the snapshot job.
   */
  snapshotJob?: SubmitSnapshotJobResponseBodySnapshotJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotJob: 'SnapshotJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotJob: SubmitSnapshotJobResponseBodySnapshotJob,
    };
  }

  validate() {
    if(this.snapshotJob && typeof (this.snapshotJob as any).validate === 'function') {
      (this.snapshotJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

