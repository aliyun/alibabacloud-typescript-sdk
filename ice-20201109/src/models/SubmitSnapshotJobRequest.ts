// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSnapshotJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The input media asset.
   * 
   * - If `Type` is `OSS`, specify the OSS URL of the input file.
   * 
   * - If `Type` is `Media`, specify the ID of the media asset.
   * 
   * The OSS URL must be in one of the following formats:
   * 
   * 1. `oss://bucket/object`
   * 
   * 2. `http(s)://bucket.oss-[RegionId].aliyuncs.com/object`
   *    <br>In these formats, `bucket` is the name of an OSS bucket located in the same region as the current project, and `object` is the file path.<br>
   * 
   * > The OSS bucket specified in the URL must be added to IMS [storage management](https://help.aliyun.com/document_detail/609918.html) before use.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the input. Valid values:
   * 
   * - `OSS`: an OSS file URL.
   * 
   * - `Media`: a media asset ID.
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
   * The output media asset.
   * 
   * - If `Type` is `OSS`, specify the OSS URL for the output file.
   * 
   * - If `Type` is `Media`, specify the ID of the output media asset.
   * 
   * The OSS URL must be in one of the following formats:
   * 
   * 1. `oss://bucket/object`
   * 
   * 2. `http(s)://bucket.oss-[RegionId].aliyuncs.com/object`
   * 
   * In these formats, `bucket` is the name of an OSS bucket located in the same region as the current project, and `object` is the file path.
   * 
   * - When capturing multiple static snapshots, the `object` must contain the `{Count}` placeholder.
   * 
   * - When capturing a sprite, the `object` must contain the `{TileCount}` placeholder.
   * 
   * - For WebVTT snapshots, the filename in the `object` path must end with `.vtt`.
   * 
   * > The OSS bucket specified in the URL must be added to IMS [storage management](https://help.aliyun.com/document_detail/609918.html) before use.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/output-{Count}.jpg
   */
  media?: string;
  /**
   * @remarks
   * The type of the output. Valid values:
   * 
   * - `OSS`: an OSS file URL.
   * 
   * - `Media`: a media asset ID.
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
   * The pipeline ID.
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
   * The height of each tile. Default: the height of the output snapshot.
   * 
   * @example
   * 480
   */
  cellHeight?: number;
  /**
   * @remarks
   * The width of each tile. Default: the width of the output snapshot.
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
   * The number of columns in the sprite grid.
   * 
   * @example
   * 20
   */
  columns?: number;
  /**
   * @remarks
   * The number of rows in the sprite grid.
   * 
   * @example
   * 20
   */
  lines?: number;
  /**
   * @remarks
   * The margin around the sprite, in pixels. Default value: 0.
   * 
   * @example
   * 20
   */
  margin?: number;
  /**
   * @remarks
   * The padding between tiles, in pixels. Default value: 0.
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
   * The threshold for detecting and filtering black content in the first frame. This applies only to multi-frame snapshots.
   * 
   * @example
   * 30
   */
  blackLevel?: number;
  /**
   * @remarks
   * The number of snapshots to capture.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The frame type.
   * 
   * @example
   * intra
   */
  frameType?: string;
  /**
   * @remarks
   * The output image height.
   * 
   * @example
   * 480
   */
  height?: number;
  /**
   * @remarks
   * The interval between snapshots.
   * 
   * @example
   * 10
   */
  interval?: number;
  /**
   * @remarks
   * Specifies whether to stitch snapshots into a single sprite. This applies only to WebVTT snapshots.
   * 
   * @example
   * true
   */
  isSptFrag?: boolean;
  /**
   * @remarks
   * The threshold for determining whether a pixel is black.
   * 
   * @example
   * 70
   */
  pixelBlackThreshold?: number;
  /**
   * @remarks
   * The sprite configuration.
   */
  spriteSnapshotConfig?: SubmitSnapshotJobRequestTemplateConfigOverwriteParamsSpriteSnapshotConfig;
  /**
   * @remarks
   * The start time for capturing snapshots.
   * 
   * @example
   * 1000
   */
  time?: number;
  /**
   * @remarks
   * The snapshot type.
   * 
   * @example
   * Sprite
   */
  type?: string;
  /**
   * @remarks
   * The output image width.
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
   * Parameters used to override settings in the specified template.
   */
  overwriteParams?: SubmitSnapshotJobRequestTemplateConfigOverwriteParams;
  /**
   * @remarks
   * The snapshot template ID.
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
   * The input for the snapshot job.
   * 
   * This parameter is required.
   */
  input?: SubmitSnapshotJobRequestInput;
  /**
   * @remarks
   * The name of the snapshot job.
   * 
   * @example
   * SampleJob
   */
  name?: string;
  /**
   * @remarks
   * The output destination for the snapshot job.
   * 
   * This parameter is required.
   */
  output?: SubmitSnapshotJobRequestOutput;
  /**
   * @remarks
   * The scheduling configuration.
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
   * Custom user data, passed as a JSON-formatted string.
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

