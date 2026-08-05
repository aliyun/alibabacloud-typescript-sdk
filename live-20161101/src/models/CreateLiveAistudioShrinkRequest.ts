// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveAIStudioShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The video-on-demand resource ID of the background material. Obtain this value from the ApsaraVideo VOD console.
   * 
   * @example
   * d0eb493192c771efba644531858c0102
   */
  backgroundResourceId?: string;
  /**
   * @remarks
   * The access URL of the background material. Specify either this parameter or the resource ID.
   * 
   * @example
   * https://xxx.com/1.mp4
   */
  backgroundResourceUrl?: string;
  /**
   * @remarks
   * The type of the background material. Valid values:
   * - VOD: video-on-demand video.
   * - PIC: image.
   * - LIVE: live stream.
   * 
   * @example
   * VOD
   */
  backgroundType?: string;
  /**
   * @remarks
   * The custom description.
   * 
   * @example
   * template 1080
   */
  description?: string;
  /**
   * @remarks
   * The height of the preview screen. Unit: px.
   * 
   * The width × height of the preview screen supports only the following specifications:
   * 
   * - Landscape low definition 360P: 640 × 360
   * - Portrait low definition 360P: 360 × 640
   * - Landscape standard definition 480P: 854 × 480
   * - Portrait standard definition 480P: 480 × 854
   * - Landscape high definition 720P: 1280 × 720
   * - Portrait high definition 720P: 720 × 1280
   * - Landscape ultra-high definition 1080P: 1920 × 1080
   * - Portrait ultra-high definition 1080P: 1080 × 1920.
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * The layout position information of the source stream after image matting.
   * 
   * This parameter is required.
   */
  mattingLayoutShrink?: string;
  /**
   * @remarks
   * The image matting type. Valid values:
   * - green: green screen matting.
   * - blue: blue screen matting.
   * - complex: real-scene matting.
   * 
   * This parameter is required.
   * 
   * @example
   * complex
   */
  mattingType?: string;
  /**
   * @remarks
   * The layout position information of the multimedia material.
   */
  mediaLayoutShrink?: string;
  /**
   * @remarks
   * The video-on-demand resource ID of the multimedia material. Obtain this value from the ApsaraVideo VOD console.
   * 
   * @example
   * d0eb493192c771efba644531858c0102
   */
  mediaResourceId?: string;
  /**
   * @remarks
   * The access URL of the multimedia material. Specify either this parameter or the resource ID.
   * 
   * @example
   * https://xxx.com/2.mp4
   */
  mediaResourceUrl?: string;
  /**
   * @remarks
   * The type of the multimedia material. Valid values:
   * - VOD: video-on-demand video.
   * - PIC: image.
   * - LIVE: live stream.
   * 
   * @example
   * VOD
   */
  mediaType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the virtual studio template. The name must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * stu02
   */
  studioName?: string;
  /**
   * @remarks
   * The width of the preview screen. Unit: px.
   * 
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      backgroundResourceId: 'BackgroundResourceId',
      backgroundResourceUrl: 'BackgroundResourceUrl',
      backgroundType: 'BackgroundType',
      description: 'Description',
      height: 'Height',
      mattingLayoutShrink: 'MattingLayout',
      mattingType: 'MattingType',
      mediaLayoutShrink: 'MediaLayout',
      mediaResourceId: 'MediaResourceId',
      mediaResourceUrl: 'MediaResourceUrl',
      mediaType: 'MediaType',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      studioName: 'StudioName',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundResourceId: 'string',
      backgroundResourceUrl: 'string',
      backgroundType: 'string',
      description: 'string',
      height: 'number',
      mattingLayoutShrink: 'string',
      mattingType: 'string',
      mediaLayoutShrink: 'string',
      mediaResourceId: 'string',
      mediaResourceUrl: 'string',
      mediaType: 'string',
      ownerId: 'number',
      regionId: 'string',
      studioName: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

