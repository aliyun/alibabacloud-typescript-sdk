// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterVideoResourcesResponseBodyVideoResourcesVideoResource extends $dara.Model {
  /**
   * @remarks
   * The offset of the position where the system starts to read the video resource. This parameter takes effect only if the input source is a video file. Unit: milliseconds.
   * 
   * A value **greater than 0** indicates an offset from the first frame.
   * 
   * @example
   * 1000
   */
  beginOffset?: number;
  /**
   * @remarks
   * The offset of the position where the system stops reading the video file. This parameter takes effect only if the input source is a video file. Unit: milliseconds.
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
   * The source URL.
   * 
   * @example
   * http://guide.aliyundoc.com/example.org
   */
  flvUrl?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * a089175eb5f4427684fc0715159a****
   */
  imageId?: string;
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * http://learn.aliyundoc.com/AppName/image.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The URL of the live stream.
   * 
   * @example
   * rtmp://abcLive/appName/b5447c21fcfe444c9e9b6f7ba208****
   */
  liveStreamUrl?: string;
  /**
   * @remarks
   * The position of the video resource.
   * 
   * @example
   * RV01
   */
  locationId?: string;
  /**
   * @remarks
   * The material ID.
   * 
   * @example
   * d2c429cd907742ee8f6e76465ad3****
   */
  materialId?: string;
  /**
   * @remarks
   * The interval between presentation timestamp (PTS) callbacks. If you set the value to 0, the PTS callback is disabled. This parameter is returned only when the video resource is a video-on-demand (VOD) file.
   * 
   * @example
   * 0
   */
  ptsCallbackInterval?: number;
  /**
   * @remarks
   * The number of playback times after the first playback is complete. This parameter takes effect only when the input source is a video file. Valid values:
   * 
   * *   **0** (default): The video file is played only once.
   * *   **-1**: The video file is played in loop mode.
   * 
   * @example
   * 0
   */
  repeatNum?: number;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * b5f8c837-ceeb-424f-b30b-68e94e86****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * resource-Name1
   */
  resourceName?: string;
  /**
   * @remarks
   * The URL of the VOD file.
   * 
   * This parameter is returned only when the video resource is an MP4, FLV, or TS file that is not from the media library.
   * 
   * @example
   * http://developer.aliyundoc.com/caster1.flv
   */
  vodUrl?: string;
  static names(): { [key: string]: string } {
    return {
      beginOffset: 'BeginOffset',
      endOffset: 'EndOffset',
      flvUrl: 'FlvUrl',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      liveStreamUrl: 'LiveStreamUrl',
      locationId: 'LocationId',
      materialId: 'MaterialId',
      ptsCallbackInterval: 'PtsCallbackInterval',
      repeatNum: 'RepeatNum',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      vodUrl: 'VodUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginOffset: 'number',
      endOffset: 'number',
      flvUrl: 'string',
      imageId: 'string',
      imageUrl: 'string',
      liveStreamUrl: 'string',
      locationId: 'string',
      materialId: 'string',
      ptsCallbackInterval: 'number',
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

export class DescribeCasterVideoResourcesResponseBodyVideoResources extends $dara.Model {
  videoResource?: DescribeCasterVideoResourcesResponseBodyVideoResourcesVideoResource[];
  static names(): { [key: string]: string } {
    return {
      videoResource: 'VideoResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoResource: { 'type': 'array', 'itemType': DescribeCasterVideoResourcesResponseBodyVideoResourcesVideoResource },
    };
  }

  validate() {
    if(Array.isArray(this.videoResource)) {
      $dara.Model.validateArray(this.videoResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterVideoResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CF60DB6A-7FD6-426E-9288-122CC1A52FA7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  total?: number;
  /**
   * @remarks
   * The input sources.
   */
  videoResources?: DescribeCasterVideoResourcesResponseBodyVideoResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      videoResources: 'VideoResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      videoResources: DescribeCasterVideoResourcesResponseBodyVideoResources,
    };
  }

  validate() {
    if(this.videoResources && typeof (this.videoResources as any).validate === 'function') {
      (this.videoResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

