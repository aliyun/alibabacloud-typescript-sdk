// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigOutputFile } from "./SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigOutputFile";
import { SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOut } from "./SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOut";
import { SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOutputFile } from "./SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOutputFile";
import { SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTimeArray } from "./SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTimeArray";


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

