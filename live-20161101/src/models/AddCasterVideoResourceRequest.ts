// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterVideoResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The start offset of the video file. Unit: milliseconds.
   * >Notice: This parameter takes effect only when the video source type is file video.
   * 
   * 
   * > A value greater than **0** indicates that reading starts from the offset time relative to the first frame.
   * 
   * @example
   * 1000
   */
  beginOffset?: number;
  /**
   * @remarks
   * The production studio ID.
   * 
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the CasterId parameter value returned by the CreateCaster operation.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, navigate to **ApsaraVideo Live console** > **Production Studios** > **Cloud Production Studio** to view the production studio name.
   * 
   * > The production studio name in the production studio list on the Cloud Production Studio page of the ApsaraVideo Live console is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The end offset of the video file. Unit: milliseconds.
   * >Notice: This parameter takes effect only when the video source type is file video.
   * 
   *         
   * - A value greater than **0**: reading ends at the offset time relative to the first frame.
   * - A value less than **0**: reading ends at the offset time relative to the last frame.
   * 
   * @example
   * 10000
   */
  endOffset?: number;
  /**
   * @remarks
   * The fixed delay for the video, which can be used for subtitle synchronization. Unit: ms. Default value: 0. Value range: `[0-5000]`.
   * 
   * @example
   * 0
   */
  fixedDelayDuration?: number;
  /**
   * @remarks
   * The media asset library image material ID.
   * > This parameter is available and required only when the video source type is image.
   * 
   * @example
   * a089175eb5f4427684fc0715159a****
   */
  imageId?: string;
  /**
   * @remarks
   * The image material URL.
   * >This parameter is available only when the video source type is image and the image file has not been imported to the media asset library. JPG and PNG formats are supported. The maximum file size is 10 MB.
   * 
   * @example
   * http://learn.aliyundoc.com/AppName/image.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The ApsaraVideo Live streaming URL.
   * 
   * >Notice:  
   *  
   * -  This parameter is required when the video source type is live stream.
   *  
   * -  Do not include this parameter in the request when the video source type is not live stream.
   * 
   * @example
   * rtmp://guide.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-ac8c628078541d7055a170ec59a5****
   */
  liveStreamUrl?: string;
  /**
   * @remarks
   * The location identifier of the video source. This parameter is required. 
   * 
   * Defines the reference number of a scene in the layout. Each location can be associated with at most one resource. The format must match "RV01~RV12", which is RV + a number in the range of `[01~99]`.
   * 
   * @example
   * RV01
   */
  locationId?: string;
  /**
   * @remarks
   * The media asset library material ID.
   * >Notice: This parameter is available and required only when the video source type is material.
   * 
   * 
   * If you call the [DescribeCasterConfig](https://help.aliyun.com/document_detail/2848011.html) operation to query the production studio configuration, check the UrgentMaterialId parameter value returned by the DescribeCasterConfig operation.
   * 
   * > The UrgentMaterialId value is the media asset library material ID.
   * 
   * @example
   * f080575eb5f4427684fc0715159a****
   */
  materialId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The PTS callback interval. Unit: milliseconds.
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
   * The number of times the video repeats after playback completes. Valid values:
   * >Notice: This parameter takes effect only when the video source type is file video.
   * 
   * 
   * - **0** (default): no repeat.
   * - **-1**: loops indefinitely.
   * 
   * @example
   * 0
   */
  repeatNum?: number;
  /**
   * @remarks
   * The name of the video source.
   * 
   * This parameter is required.
   * 
   * @example
   * test001
   */
  resourceName?: string;
  /**
   * @remarks
   * The video-on-demand file URL.
   * >Notice: This parameter is available only when the video source type is file video and the video file has not been imported to the media asset library.
   * 
   * 
   * >Video-on-demand files are limited to MP4, FLV, and TS formats.
   * 
   * @example
   * http://learn.aliyundoc.com/AppName/StreamName.flv
   */
  vodUrl?: string;
  static names(): { [key: string]: string } {
    return {
      beginOffset: 'BeginOffset',
      casterId: 'CasterId',
      endOffset: 'EndOffset',
      fixedDelayDuration: 'FixedDelayDuration',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      liveStreamUrl: 'LiveStreamUrl',
      locationId: 'LocationId',
      materialId: 'MaterialId',
      ownerId: 'OwnerId',
      ptsCallbackInterval: 'PtsCallbackInterval',
      regionId: 'RegionId',
      repeatNum: 'RepeatNum',
      resourceName: 'ResourceName',
      vodUrl: 'VodUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginOffset: 'number',
      casterId: 'string',
      endOffset: 'number',
      fixedDelayDuration: 'number',
      imageId: 'string',
      imageUrl: 'string',
      liveStreamUrl: 'string',
      locationId: 'string',
      materialId: 'string',
      ownerId: 'number',
      ptsCallbackInterval: 'number',
      regionId: 'string',
      repeatNum: 'number',
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

