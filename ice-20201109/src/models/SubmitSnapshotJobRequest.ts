// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSnapshotJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The input file. If Type is set to OSS, the URL of an OSS object is returned. If Type is set to Media, the ID of a media asset is returned. The URL of an OSS object can be in one of the following formats:
   * 
   * 1.  oss://bucket/object
   * 2.  http(s)://bucket.oss-[RegionId].aliyuncs.com/object In the URL, bucket specifies an OSS bucket that resides in the same region as the job, and object specifies the object URL in OSS.
   * 
   * >  Before you use the OSS bucket in the URL, you must add the bucket on the [Storage Management](https://help.aliyun.com/document_detail/609918.html) page of the Intelligent Media Services (IMS) console.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the input file. Valid values:
   * 
   * 1.  OSS: an Object Storage Service (OSS) object.
   * 2.  Media: a media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * Media
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobRequestOutput extends $dara.Model {
  /**
   * @remarks
   * The output file. If Type is set to OSS, the URL of an OSS object is returned. If Type is set to Media, the ID of a media asset is returned. The URL of an OSS object can be in one of the following formats:
   * 
   * 1.  oss://bucket/object
   * 2.  http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   * 
   * In the URL, bucket specifies an OSS bucket that resides in the same region as the job, and object specifies the object URL in OSS. If multiple static snapshots were captured, the object must contain the "{Count}" placeholder. In the case of a sprite, the object must contain the "{TileCount}" placeholder. The suffix of the WebVTT snapshot objects must be ".vtt".
   * 
   * >  Before you use the OSS bucket in the URL, you must add the bucket on the [Storage Management](https://help.aliyun.com/document_detail/609918.html) page of the IMS console.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/output-{Count}.jpg
   */
  media?: string;
  /**
   * @remarks
   * The type of the output file. Valid values:
   * 
   * 1.  OSS: an OSS object.
   * 2.  Media: a media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobRequestScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraVideo Media Processing (MPS) queue that is used to run the job.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobRequestTemplateConfigOverwriteParamsSpriteSnapshotConfig extends $dara.Model {
  /**
   * @remarks
   * The height of a single snapshot before tiling. The default value is the height of the output snapshot.
   * 
   * @example
   * 480
   */
  cellHeight?: number;
  /**
   * @remarks
   * The width of a single snapshot before tiling. The default value is the width of the output snapshot.
   * 
   * @example
   * 720
   */
  cellWidth?: number;
  /**
   * @remarks
   * The background color.
   * 
   * @example
   * #000000
   */
  color?: string;
  /**
   * @remarks
   * The number of columns that the image sprite contains.
   * 
   * @example
   * 20
   */
  columns?: number;
  /**
   * @remarks
   * The number of rows that the image sprite contains.
   * 
   * @example
   * 20
   */
  lines?: number;
  /**
   * @remarks
   * The width of the frame. Default value: 0. Unit: pixels.
   * 
   * @example
   * 20
   */
  margin?: number;
  /**
   * @remarks
   * The spacing between two adjacent snapshots. Default value: 0. Unit: pixels.
   * 
   * @example
   * 20
   */
  padding?: number;
  static names(): { [key: string]: string } {
    return {
      cellHeight: 'CellHeight',
      cellWidth: 'CellWidth',
      color: 'Color',
      columns: 'Columns',
      lines: 'Lines',
      margin: 'Margin',
      padding: 'Padding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cellHeight: 'number',
      cellWidth: 'number',
      color: 'string',
      columns: 'number',
      lines: 'number',
      margin: 'number',
      padding: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobRequestTemplateConfigOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * The threshold that is used to filter out black frames for the first snapshot to be captured. This feature is available if you request the system to capture multiple snapshots.
   * 
   * @example
   * 30
   */
  blackLevel?: number;
  /**
   * @remarks
   * The number of snapshots.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The type of the frame.
   * 
   * @example
   * intra
   */
  frameType?: string;
  /**
   * @remarks
   * The height of a captured snapshot.
   * 
   * @example
   * 480
   */
  height?: number;
  /**
   * @remarks
   * The interval at which snapshots are captured.
   * 
   * @example
   * 10
   */
  interval?: number;
  /**
   * @remarks
   * The WebVTT snapshot configuration that specifies whether to merge the output snapshots.
   * 
   * @example
   * true
   */
  isSptFrag?: boolean;
  /**
   * @remarks
   * The color value threshold that determines whether a pixel is black.
   * 
   * @example
   * 70
   */
  pixelBlackThreshold?: number;
  /**
   * @remarks
   * The configuration of the sprite snapshot.
   */
  spriteSnapshotConfig?: SubmitSnapshotJobRequestTemplateConfigOverwriteParamsSpriteSnapshotConfig;
  /**
   * @remarks
   * The point in time at which the system starts to capture snapshots in the input video.
   * 
   * @example
   * 1000
   */
  time?: number;
  /**
   * @remarks
   * The snapshot type. Valid values:
   * 
   * @example
   * Sprite
   */
  type?: string;
  /**
   * @remarks
   * The width of a captured snapshot.
   * 
   * @example
   * 720
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      blackLevel: 'BlackLevel',
      count: 'Count',
      frameType: 'FrameType',
      height: 'Height',
      interval: 'Interval',
      isSptFrag: 'IsSptFrag',
      pixelBlackThreshold: 'PixelBlackThreshold',
      spriteSnapshotConfig: 'SpriteSnapshotConfig',
      time: 'Time',
      type: 'Type',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackLevel: 'number',
      count: 'number',
      frameType: 'string',
      height: 'number',
      interval: 'number',
      isSptFrag: 'boolean',
      pixelBlackThreshold: 'number',
      spriteSnapshotConfig: SubmitSnapshotJobRequestTemplateConfigOverwriteParamsSpriteSnapshotConfig,
      time: 'number',
      type: 'string',
      width: 'number',
    };
  }

  validate() {
    if(this.spriteSnapshotConfig && typeof (this.spriteSnapshotConfig as any).validate === 'function') {
      (this.spriteSnapshotConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobRequestTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters.
   */
  overwriteParams?: SubmitSnapshotJobRequestTemplateConfigOverwriteParams;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: SubmitSnapshotJobRequestTemplateConfigOverwriteParams,
      templateId: 'string',
    };
  }

  validate() {
    if(this.overwriteParams && typeof (this.overwriteParams as any).validate === 'function') {
      (this.overwriteParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSnapshotJobRequest extends $dara.Model {
  /**
   * @remarks
   * The snapshot input.
   * 
   * This parameter is required.
   */
  input?: SubmitSnapshotJobRequestInput;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * SampleJob
   */
  name?: string;
  /**
   * @remarks
   * The snapshot output.
   * 
   * This parameter is required.
   */
  output?: SubmitSnapshotJobRequestOutput;
  /**
   * @remarks
   * The scheduling settings.
   */
  scheduleConfig?: SubmitSnapshotJobRequestScheduleConfig;
  /**
   * @remarks
   * The snapshot template configuration.
   * 
   * This parameter is required.
   */
  templateConfig?: SubmitSnapshotJobRequestTemplateConfig;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"test parameter": "test value"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      name: 'Name',
      output: 'Output',
      scheduleConfig: 'ScheduleConfig',
      templateConfig: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SubmitSnapshotJobRequestInput,
      name: 'string',
      output: SubmitSnapshotJobRequestOutput,
      scheduleConfig: SubmitSnapshotJobRequestScheduleConfig,
      templateConfig: SubmitSnapshotJobRequestTemplateConfig,
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    if(this.templateConfig && typeof (this.templateConfig as any).validate === 'function') {
      (this.templateConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

