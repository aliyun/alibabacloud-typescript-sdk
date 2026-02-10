// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterVideoResourcesResponseBodyVideoResourcesVideoResource extends $dara.Model {
  beginOffset?: number;
  endOffset?: number;
  flvUrl?: string;
  imageId?: string;
  imageUrl?: string;
  liveStreamUrl?: string;
  locationId?: string;
  materialId?: string;
  ptsCallbackInterval?: number;
  repeatNum?: number;
  resourceId?: string;
  resourceName?: string;
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

