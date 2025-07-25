// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataImageRegionDistributeMapValue } from "./DataImageRegionDistributeMapValue";


export class DescribeImageListResponseBodyDataImageBizTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 117819727354****
   */
  aliUid?: number;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2024-02-01 10:56:36
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the image was last modified.
   * 
   * @example
   * 2024-02-01 10:56:36
   */
  gmtModified?: string;
  imageBizTags?: DescribeImageListResponseBodyDataImageBizTags[];
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * imgc-075cllfeuazh****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * IMAGE
   */
  imageName?: string;
  /**
   * @remarks
   * The region where the image is distributed. The key is the region and the value is the distribution information.
   */
  imageRegionDistributeMap?: { [key: string]: DataImageRegionDistributeMapValue };
  /**
   * @remarks
   * The list of regions.
   */
  imageRegionList?: string[];
  /**
   * @remarks
   * The type of the image.
   * 
   * Valid values:
   * 
   * *   User: custom images.
   * *   System: system images.
   * 
   * @example
   * System
   */
  imageType?: string;
  imageVersion?: string;
  /**
   * @remarks
   * The language of the image.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The time when the image was published.
   * 
   * @example
   * 2024-07-25 10:06:45
   */
  releaseTime?: string;
  /**
   * @remarks
   * The rendering type.
   * 
   * Valid values:
   * 
   * *   GPURemote
   * *   CPU
   * *   GPULocal
   * 
   * @example
   * CPU
   */
  renderingType?: string;
  /**
   * @remarks
   * The state of the image.
   * 
   * Valid values:
   * 
   * *   AVAILABLE: The image is available.
   * *   DELETE: The image is deleted.
   * *   INIT: The image is being initialized.
   * *   CREATE_FAILED: The image failed to be created.
   * *   CREATING: The image is being created.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The OS type of the image.
   * 
   * @example
   * Android 12
   */
  systemType?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageBizTags: 'ImageBizTags',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageRegionDistributeMap: 'ImageRegionDistributeMap',
      imageRegionList: 'ImageRegionList',
      imageType: 'ImageType',
      imageVersion: 'ImageVersion',
      language: 'Language',
      releaseTime: 'ReleaseTime',
      renderingType: 'RenderingType',
      status: 'Status',
      systemType: 'SystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageBizTags: { 'type': 'array', 'itemType': DescribeImageListResponseBodyDataImageBizTags },
      imageId: 'string',
      imageName: 'string',
      imageRegionDistributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataImageRegionDistributeMapValue },
      imageRegionList: { 'type': 'array', 'itemType': 'string' },
      imageType: 'string',
      imageVersion: 'string',
      language: 'string',
      releaseTime: 'string',
      renderingType: 'string',
      status: 'string',
      systemType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageBizTags)) {
      $dara.Model.validateArray(this.imageBizTags);
    }
    if(this.imageRegionDistributeMap) {
      $dara.Model.validateMap(this.imageRegionDistributeMap);
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

export class DescribeImageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The images.
   */
  data?: DescribeImageListResponseBodyData[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 620740FF-492F-5956-B1BA-361E966C0269
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeImageListResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

