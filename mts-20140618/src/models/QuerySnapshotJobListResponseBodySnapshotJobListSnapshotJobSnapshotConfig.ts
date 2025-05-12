// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigOutputFile } from "./QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigOutputFile";
import { QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOut } from "./QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOut";
import { QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOutputFile } from "./QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOutputFile";
import { QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTimeArray } from "./QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTimeArray";


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

