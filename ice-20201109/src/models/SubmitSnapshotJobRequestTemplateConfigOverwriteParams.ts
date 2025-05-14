// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitSnapshotJobRequestTemplateConfigOverwriteParamsSpriteSnapshotConfig } from "./SubmitSnapshotJobRequestTemplateConfigOverwriteParamsSpriteSnapshotConfig";


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

