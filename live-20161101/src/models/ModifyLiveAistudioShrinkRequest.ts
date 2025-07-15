// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveAIStudioShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the background material in ApsaraVideo VOD. You can obtain the ID from the ApsaraVideo VOD console.
   * 
   * @example
   * d0eb493192c771efba644531858c0102
   */
  backgroundResourceId?: string;
  /**
   * @remarks
   * The URL of the background material.
   * 
   * @example
   * https://xxx.com/2.mp4
   */
  backgroundResourceUrl?: string;
  /**
   * @remarks
   * The type of the background material. Valid values:
   * 
   * *   VOD: a video in ApsaraVideo VOD
   * *   PIC: an image
   * *   LIVE: a live stream
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
   * custom
   */
  description?: string;
  /**
   * @remarks
   * The preview height. Unit: pixels.
   * 
   * The following preview specifications (width × height) are supported:
   * 
   * *   Landscape low definition 360p (640×360)
   * *   Portrait low definition 360p (360×640)
   * *   Landscape standard definition 480p (854×480)
   * *   Portrait standard definition 480p (480×854)
   * *   Landscape high definition 720p (1280×720)
   * *   Portrait high definition 720p (720×1280)
   * *   Landscape ultra-high definition 1080p (1920×1080)
   * *   Portrait ultra-high definition 1080p (1080×1920)
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * The layout information of the chroma-keyed material.
   * 
   * This parameter is required.
   */
  mattingLayoutShrink?: string;
  /**
   * @remarks
   * The type of chroma key. Valid values:
   * 
   * *   green: green-screen chroma key
   * *   blue: blue-screen chroma key
   * *   complex: background replacement
   * 
   * This parameter is required.
   * 
   * @example
   * complex
   */
  mattingType?: string;
  /**
   * @remarks
   * The layout information of the multimedia material.
   */
  mediaLayoutShrink?: string;
  /**
   * @remarks
   * The ID of the multimedia material in ApsaraVideo VOD. You can obtain the ID from the ApsaraVideo VOD console.
   * 
   * @example
   * d0eb493192c771efba644531858c01102
   */
  mediaResourceId?: string;
  /**
   * @remarks
   * The URL of the multimedia material. Specify either this parameter or the MediaResourceId parameter.
   * 
   * @example
   * https://xxx.com/1.mp4
   */
  mediaResourceUrl?: string;
  /**
   * @remarks
   * The type of the multimedia material. Valid values:
   * 
   * *   VOD: a video in ApsaraVideo VOD
   * *   PIC: an image
   * *   LIVE: a live stream
   * 
   * @example
   * VOD
   */
  mediaType?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the virtual studio template. The name is the same as the value of the StudioName parameter that was specified when you called the CreateLiveAIStudio operation to create the virtual studio template.
   * 
   * This parameter is required.
   * 
   * @example
   * stu02
   */
  studioName?: string;
  /**
   * @remarks
   * The preview width. Unit: pixels.
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

