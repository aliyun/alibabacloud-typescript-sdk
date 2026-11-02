// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSnapshotJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The input media.
   * 
   * - If Type is set to OSS, enter the OSS URL.
   * 
   * - If Type is set to Media, enter the media asset ID.
   * 
   * The OSS URL must follow these rules:
   * 
   * 1. oss://bucket/object
   * 
   * 2. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   * In the URLs, bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
   * 
   * > The OSS bucket in the URL must be added to the IMS [storage management](https://help.aliyun.com/document_detail/609918.html) before it can be used.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object.mp4
   */
  media?: string;
  /**
   * @remarks
   * The input type. Valid values:
   * 
   * - OSS: the URL of an OSS object.
   * 
   * - Media: the ID of a media asset.
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
   * The output media.
   * 
   * - If Type is set to OSS, enter the OSS URL.
   * 
   * - If Type is set to Media, enter the media asset ID.
   * 
   * The OSS URL must follow these rules:
   * 
   * 1. oss://bucket/object
   * 
   * 2. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
   * 
   * In the URLs, bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
   * 
   * - When capturing multiple static snapshots, the object must contain the "{Count}" placeholder.
   * 
   * - When capturing a sprite snapshot, the object must contain the "{TileCount}" placeholder.
   * 
   * - For WebVTT snapshots, the object suffix must be ".vtt".
   * 
   * > The OSS bucket in the URL must be added to the IMS [storage management](https://help.aliyun.com/document_detail/609918.html) before it can be used.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/output-{Count}.jpg
   */
  media?: string;
  /**
   * @remarks
   * The input type. Valid values:
   * 
   * - OSS: the URL of an OSS object.
   * 
   * - Media: the ID of a media asset.
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
   * The ID of the pipeline.
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
   * The height of a single image. Default value: the height of the snapshot output resolution.
   * 
   * @example
   * 480
   */
  cellHeight?: number;
  /**
   * @remarks
   * The width of a single image. Default value: the width of the snapshot output resolution.
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
   * The number of columns for image stitching.
   * 
   * @example
   * 20
   */
  columns?: number;
  /**
   * @remarks
   * The number of rows for image stitching.
   * 
   * @example
   * 20
   */
  lines?: number;
  /**
   * @remarks
   * The margin width. Default value: 0. Unit: pixels.
   * 
   * @example
   * 20
   */
  margin?: number;
  /**
   * @remarks
   * The spacing between images. Default value: 0. Unit: pixels.
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
   * The threshold for filtering black screen images in the first frame of multi-frame snapshots.
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
   * The frame type.
   * 
   * @example
   * intra
   */
  frameType?: string;
  /**
   * @remarks
   * The height of the output image.
   * 
   * @example
   * 480
   */
  height?: number;
  /**
   * @remarks
   * The snapshot interval. Unit: seconds.
   * 
   * @example
   * 10
   */
  interval?: number;
  /**
   * @remarks
   * The WebVTT snapshot configuration. Specifies whether to stitch the output.
   * 
   * @example
   * true
   */
  isSptFrag?: boolean;
  /**
   * @remarks
   * The threshold for determining whether a pixel is a black pixel.
   * 
   * @example
   * 70
   */
  pixelBlackThreshold?: number;
  /**
   * @remarks
   * The sprite snapshot configuration.
   */
  spriteSnapshotConfig?: SubmitSnapshotJobRequestTemplateConfigOverwriteParamsSpriteSnapshotConfig;
  /**
   * @remarks
   * The start time of the snapshot. Unit: milliseconds.
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
   * The width of the output image.
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
   * The override parameters.
   */
  overwriteParams?: SubmitSnapshotJobRequestTemplateConfigOverwriteParams;
  /**
   * @remarks
   * The ID of the template.
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
   * The custom user data.
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

