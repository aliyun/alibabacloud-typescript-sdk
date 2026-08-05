// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCasterVideoResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The start offset of the video file. Unit: milliseconds.
   * 
   * >Notice: 
   * 
   * This parameter is valid only if the video source is a video file.
   * 
   * 
   * 
   * > A value greater than 0 specifies the start time to read the file. The time is an offset from the first frame.
   * 
   * @example
   * 0
   */
  beginOffset?: number;
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you create a production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, use the CasterId returned in the response.
   * 
   * - If you create a production studio in the console, find the ID on the **Cloud Production Studio** page. To go to this page, choose **LIVE Console** > **Production Studio**.
   * 
   * > The name of the production studio in the list on the Cloud Production Studio page is its ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * This parameter is valid only for video files. Unit: milliseconds.
   * 
   * - If the value is greater than **0**, it specifies the end time to read the file. The time is an offset from the first frame.
   * 
   * - If the value is less than **0**, it specifies the end time to read the file. The time is an offset from the last frame.
   * 
   * @example
   * 10000
   */
  endOffset?: number;
  /**
   * @remarks
   * The ID of the image material in the media asset library.
   * 
   * > This parameter is required only if the video source is an image.
   * 
   * @example
   * a089175eb5f4427684fc0715159a****
   */
  imageId?: string;
  /**
   * @remarks
   * The URL of the image material.
   * 
   * > This parameter is available only if the video source is an image that has not been imported to the material library. The image must be in JPG or PNG format, and its size cannot exceed 10 MB.
   * 
   * @example
   * http://learn.aliyundoc.com/AppName/image.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The URL of the live stream.
   * 
   * >Notice: 
   * 
   * This parameter is required only if the video source is a live stream.
   * 
   * @example
   * rtmp://guide.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-ac8c628078541d7055a170ec59a5****
   */
  liveStreamUrl?: string;
  /**
   * @remarks
   * The material ID.
   * 
   * @example
   * f080575eb5f4427684fc0715159a****
   */
  materialId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The Presentation Time Stamp (PTS) callback interval. Unit: milliseconds. This parameter is valid only for VOD materials.
   * 
   * @example
   * 2000
   */
  ptsCallbackInterval?: number;
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
   * This parameter is valid only for video files. It specifies the number of times to loop the video after playback is complete.
   * 
   * - **0** (default): The video does not loop.
   * 
   * - **-1**: The video loops indefinitely.
   * 
   * @example
   * 0
   */
  repeatNum?: number;
  /**
   * @remarks
   * The resource ID. If you add a video source to the production studio by calling the [AddCasterVideoResource](https://help.aliyun.com/document_detail/2848020.html) operation, use the ResourceId returned in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 05ab713c-676e-49c0-96ce-cc408da1****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the video source.
   * 
   * @example
   * test001
   */
  resourceName?: string;
  /**
   * @remarks
   * The URL of the video on demand (VOD) file.
   * 
   * >Notice: 
   * 
   * This parameter is available only if the video source is a video file that has not been imported to the material library.
   * 
   * 
   * 
   * > VOD files must be in MP4, FLV, or TS format.
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

