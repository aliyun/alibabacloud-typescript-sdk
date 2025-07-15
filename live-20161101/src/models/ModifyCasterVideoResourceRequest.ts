// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCasterVideoResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The offset of the position where the system starts to read the video resource.
   * 
   * This parameter takes effect only when the video resource is a video file. Unit: milliseconds.
   * 
   * >  A value greater than 0 indicates an offset from the first frame.
   * 
   * @example
   * 0
   */
  beginOffset?: number;
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * If you create a production studio through the [CreateCaster](~~69338#doc-api-live-CreateCaster~~ "Creates a production studio.") interface, check the value of the CasterId parameter in the response.
   * 
   * If you create a production studio through the ApsaraVideo Live Console, log in to the console, then check the ID of the production studio through the following path:
   * 
   * Production Studios > Production Studio Management
   * 
   * >  The CasterId is reflected in the Name column on the Production Studio Management page.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * This parameter takes effect only when the video resource is a video file. Unit: milliseconds.
   * 
   * *   A value greater than **0** indicates an offset from the first frame.
   * *   A value smaller than **0** indicates an offset from the last frame.
   * 
   * @example
   * 10000
   */
  endOffset?: number;
  /**
   * @remarks
   * ID of the media library image material.
   * > This parameter is only available and must be provided when the video source type is an image.
   * 
   * @example
   * a089175eb5f4427684fc0715159a****
   */
  imageId?: string;
  /**
   * @remarks
   * Image material URL. 
   * >This parameter is only available when the video source type is an image and the image file has not been imported into the material library. Supports uploading images in jpg, png formats, with a maximum file size of 10MB.
   * 
   * @example
   * http://learn.aliyundoc.com/AppName/image.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The URL of the live stream.
   * 
   * This parameter takes effect and is required only when the video resource is a live stream.
   * 
   * @example
   * rtmp://guide.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-ac8c628078541d7055a170ec59a5****
   */
  liveStreamUrl?: string;
  /**
   * @remarks
   * The ID of the material.
   * 
   * @example
   * f080575eb5f4427684fc0715159a****
   */
  materialId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The interval between presentation timestamp (PTS) callbacks. Unit: milliseconds. This parameter takes effect only when the video resource is a VOD file.
   * 
   * @example
   * 2000
   */
  ptsCallbackInterval?: number;
  regionId?: string;
  /**
   * @remarks
   * The number of playback times after the first playback is complete. This parameter takes effect only when the video resource is a file. Valid values:
   * 
   * *   **0**: indicates that the video is played only once. This is the default value.
   * *   **-1**: indicates that the video is played in loop mode.
   * 
   * @example
   * 0
   */
  repeatNum?: number;
  /**
   * @remarks
   * The ID of the video resource. It is reflected in the ResourceId parameter when you call the [AddCasterVideoResource](~~60250#doc-api-live-AddCasterVideoResource~~ "Adds a video resource to a production studio.") operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 05ab713c-676e-49c0-96ce-cc408da1****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the video resource.
   * 
   * @example
   * test001
   */
  resourceName?: string;
  /**
   * @remarks
   * The URL of the video-on-demand (VOD) file. This parameter takes effect only when the video resource is a video file that is not from the media library.
   * 
   * >  The VOD file must be in the MP4, FLV, or TS format.
   * 
   * @example
   * http://developer.aliyundoc.com/AppName/StreamName.flv
   */
  vodUrl?: string;
  static names(): { [key: string]: string } {
    return {
      beginOffset: 'BeginOffset',
      casterId: 'CasterId',
      endOffset: 'EndOffset',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      liveStreamUrl: 'LiveStreamUrl',
      materialId: 'MaterialId',
      ownerId: 'OwnerId',
      ptsCallbackInterval: 'PtsCallbackInterval',
      regionId: 'RegionId',
      repeatNum: 'RepeatNum',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      vodUrl: 'VodUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginOffset: 'number',
      casterId: 'string',
      endOffset: 'number',
      imageId: 'string',
      imageUrl: 'string',
      liveStreamUrl: 'string',
      materialId: 'string',
      ownerId: 'number',
      ptsCallbackInterval: 'number',
      regionId: 'string',
      repeatNum: 'number',
      resourceId: 'string',
      resourceName: 'string',
      vodUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

