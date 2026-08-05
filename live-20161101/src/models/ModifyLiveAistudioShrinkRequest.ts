// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveAIStudioShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * VOD resource ID of the background material, obtained from the VOD console.
   * 
   * @example
   * d0eb493192c771efba644531858c0102
   */
  backgroundResourceId?: string;
  /**
   * @remarks
   * Resource access URL of the background material.
   * 
   * @example
   * https://xxx.com/2.mp4
   */
  backgroundResourceUrl?: string;
  /**
   * @remarks
   * Background material type:
   * - VOD: Video on demand
   * - PIC: Image
   * - LIVE: Live stream
   * 
   * @example
   * VOD
   */
  backgroundType?: string;
  /**
   * @remarks
   * Custom description.
   * 
   * @example
   * custom
   */
  description?: string;
  /**
   * @remarks
   * Preview screen height, unit: px.
   * 
   * The preview screen width x height only supports the following specifications:
   * 
   * - Landscape Smooth 360P 640x360
   * - Portrait Smooth 360P 360x640
   * - Landscape Standard Definition 480P 854x480
   * - Portrait Standard Definition 480P 480x854
   * - Landscape HD 720P 1280x720
   * - Portrait HD 720P 720x1280
   * - Landscape Full HD 1080P 1920x1080
   * - Portrait Full HD 1080P 1080x1920
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * Layout position information of the source stream after matting.
   * 
   * This parameter is required.
   */
  mattingLayoutShrink?: string;
  /**
   * @remarks
   * Matting type:
   * - green: Green screen matting
   * - blue: Blue screen matting
   * - complex: Real-scene matting
   * 
   * This parameter is required.
   * 
   * @example
   * complex
   */
  mattingType?: string;
  /**
   * @remarks
   * Layout position information of the multimedia material.
   */
  mediaLayoutShrink?: string;
  /**
   * @remarks
   * VOD resource ID of the multimedia material, obtained from the VOD console.
   * 
   * @example
   * d0eb493192c771efba644531858c01102
   */
  mediaResourceId?: string;
  /**
   * @remarks
   * Resource access URL of the multimedia material. Either this or the resource ID should be provided.
   * 
   * @example
   * https://xxx.com/1.mp4
   */
  mediaResourceUrl?: string;
  /**
   * @remarks
   * Multimedia material type:
   * - VOD: Video on demand
   * - PIC: Image
   * - LIVE: Live stream
   * 
   * @example
   * VOD
   */
  mediaType?: string;
  ownerId?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Virtual studio template name, same as the StudioName parameter in the create API.
   * 
   * This parameter is required.
   * 
   * @example
   * stu02
   */
  studioName?: string;
  /**
   * @remarks
   * Preview screen width, unit: px.
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

