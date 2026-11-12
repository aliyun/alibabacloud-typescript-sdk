// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageDistributeInfoResponseBodyDataImageRegionDistributeList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the image belongs. The account ID for a system image is 0.
   * 
   * @example
   * 123456789
   */
  aliUid?: number;
  /**
   * @remarks
   * The ID of the ECS image corresponding to the region.
   * 
   * @example
   * m-bp1example****
   */
  ecsImageId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-04-25 15:13:57
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last update time.
   * 
   * @example
   * 2025-04-25 15:13:57
   */
  gmtModified?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * imgc-xxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The processing information reported by the region distribution task.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The distribution progress of the image in the region, expressed as a percentage.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The ID of the region to which the image is distributed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The region distribution status.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The logical ID of the image on the unit side, which can be different from the central image ID.
   * 
   * @example
   * m-1bdedef****
   */
  unitImageId?: string;
  /**
   * @remarks
   * The image version ID.
   * 
   * @example
   * iv-xxx
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      ecsImageId: 'EcsImageId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageId: 'ImageId',
      message: 'Message',
      progress: 'Progress',
      regionId: 'RegionId',
      status: 'Status',
      unitImageId: 'UnitImageId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      ecsImageId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageId: 'string',
      message: 'string',
      progress: 'string',
      regionId: 'string',
      status: 'string',
      unitImageId: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDistributeInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of region distribution information for the image version.
   */
  imageRegionDistributeList?: GetImageDistributeInfoResponseBodyDataImageRegionDistributeList[];
  /**
   * @remarks
   * The list of region IDs supported by the image.
   */
  imageRegionList?: string[];
  /**
   * @remarks
   * The source of the image. For example, center indicates the central image service.
   * 
   * @example
   * center
   */
  imageSource?: string;
  static names(): { [key: string]: string } {
    return {
      imageRegionDistributeList: 'ImageRegionDistributeList',
      imageRegionList: 'ImageRegionList',
      imageSource: 'ImageSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageRegionDistributeList: { 'type': 'array', 'itemType': GetImageDistributeInfoResponseBodyDataImageRegionDistributeList },
      imageRegionList: { 'type': 'array', 'itemType': 'string' },
      imageSource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageRegionDistributeList)) {
      $dara.Model.validateArray(this.imageRegionDistributeList);
    }
    if(Array.isArray(this.imageRegionList)) {
      $dara.Model.validateArray(this.imageRegionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDistributeInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code of the API. A value of 200 indicates success. If the call fails, the corresponding error code is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The image information returned by the query.
   */
  data?: GetImageDistributeInfoResponseBodyData;
  /**
   * @remarks
   * The processing information returned by the API.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot the request.
   * 
   * @example
   * 8737D130-BFD0-5D51-96F6-C08EB1139A25
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values: true: Successful. false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetImageDistributeInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

