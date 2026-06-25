// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataImageRegionDistributeMapValue } from "./DataImageRegionDistributeMapValue";


export class DescribeImageListResponseBodyDataImageBizTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
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
   * The description.
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
  /**
   * @remarks
   * An array of tag objects.
   */
  imageBizTags?: DescribeImageListResponseBodyDataImageBizTags[];
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * imgc-075cllfeuazh****
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * IMAGE
   */
  imageName?: string;
  /**
   * @remarks
   * The image distribution information by region. The key is the region and the value is the distribution information.
   */
  imageRegionDistributeMap?: { [key: string]: DataImageRegionDistributeMapValue };
  /**
   * @remarks
   * The list of available regions.
   */
  imageRegionList?: string[];
  /**
   * @remarks
   * The image type.
   * 
   * @example
   * System
   */
  imageType?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 20241204102337
   */
  imageVersion?: string;
  /**
   * @remarks
   * The language.
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
   * @example
   * CPU
   */
  renderingType?: string;
  /**
   * @remarks
   * The image status.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The operating system type.
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
   * The returned data.
   */
  data?: DescribeImageListResponseBodyData[];
  /**
   * @remarks
   * The token that is used to start the next query. An empty value indicates that all data has been returned.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 620740FF-492F-5956-B1BA-361E966C0269
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

