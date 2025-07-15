// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterVideoResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The offset of the position where the system starts to read the video source. Unit: milliseconds.
   * 
   * **
   * 
   * **Important** This parameter takes effect only if the video source is a file.
   * 
   * > A value greater than **0** specifies an offset from the first frame.
   * 
   * @example
   * 1000
   */
  beginOffset?: number;
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * *   If the production studio was created by calling the [CreateCaster](https://help.aliyun.com/document_detail/69338.html) operation, check the value of the response parameter CasterId to obtain the ID.
   * *   If the production studio was created by using the ApsaraVideo Live console, obtain the ID on the **Production Studio Management** page. To go to the page, log on to the **ApsaraVideo Live console** and click **Production Studios** in the left-side navigation pane.
   * 
   * > You can find the ID of the production studio in the Instance Name column.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The offset of the position where the system stops reading the video source. Unit: milliseconds.
   * 
   * **
   * 
   * **Important** This parameter takes effect only if the video source is a file.
   * 
   * *   A value greater than **0** specifies an offset from the first frame.
   * *   A value less than **0** specifies an offset from the last frame.
   * 
   * @example
   * 10000
   */
  endOffset?: number;
  /**
   * @remarks
   * The fixed delay of the video layer. This parameter is used to synchronize the video with subtitles. Unit: milliseconds. Default value: 0. Valid values: `0 to 5000`.
   * 
   * @example
   * 0
   */
  fixedDelayDuration?: number;
  /**
   * @remarks
   * ID of the media library image material. 
   * >This parameter is only available and must be provided when the video source type is an image.
   * 
   * @example
   * a089175eb5f4427684fc0715159a****
   */
  imageId?: string;
  /**
   * @remarks
   * Image material URL. 
   * >This parameter is available only when the video source type is an image and the image file has not been imported into the material library. Supports uploading images in jpg, png formats, with a maximum file size of 10MB.
   * 
   * @example
   * http://learn.aliyundoc.com/AppName/image.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The streaming URL.
   * 
   * **
   * 
   * **Important** This parameter is required if the video source is a live stream.
   * 
   * > Do not specify this parameter in the request if the video source is not a live stream.
   * 
   * @example
   * rtmp://guide.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-ac8c628078541d7055a170ec59a5****
   */
  liveStreamUrl?: string;
  /**
   * @remarks
   * The ID that is used to identify the position of the video source.
   * 
   * Define the reference numbers in the layout. Each reference number is associated with only one resource. The value of this parameter must be in the RV[Number] format, where Number is `01 to 99`.
   * 
   * @example
   * RV01
   */
  locationId?: string;
  /**
   * @remarks
   * The ID of the material from the media library.
   * 
   * **
   * 
   * **Important** This parameter takes effect and is required only if the video source is a material.
   * 
   * If you query the configurations of the production studio by calling the [DescribeCasterConfig](https://help.aliyun.com/document_detail/60259.html) operation, obtain the value of the response parameter UrgentMaterialId.
   * 
   * > The value of the UrgentMaterialId parameter is the ID of the material from the media library.
   * 
   * @example
   * f080575eb5f4427684fc0715159a****
   */
  materialId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The interval between presentation timestamp (PTS) callbacks. Unit: milliseconds.
   * 
   * @example
   * 2000
   */
  ptsCallbackInterval?: number;
  regionId?: string;
  /**
   * @remarks
   * The number of playbacks after the first playback is complete. Valid values:
   * 
   * **
   * 
   * **Important** This parameter takes effect only if the video source is a file.
   * 
   * *   **0**: specifies that the video source is played only once. This is the default value.
   * *   **-1**: specifies that the video source is played in loop mode.
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
   * The URL of the VOD file.
   * 
   * **
   * 
   * **Important** This parameter takes effect only if the video source is a file that is not from the media library.
   * 
   * > The VOD file must be in the MP4, FLV, or TS format.
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

