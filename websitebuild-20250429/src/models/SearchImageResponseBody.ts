// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageResponseBodyImageResponseImageList extends $dara.Model {
  /**
   * @remarks
   * Descriptive hues detected in the Image
   * 
   * @example
   * 冷色调 蓝色
   */
  descriptiveTones?: string;
  /**
   * @remarks
   * Image height
   * 
   * @example
   * 1000
   */
  height?: number;
  /**
   * @remarks
   * Image categorization. Valid values:  
   * - normal: Illustrations or article images.  
   * - banner: Background images or image carousels.  
   * - goods: Product or service images.
   * 
   * @example
   * normal
   */
  imageCategory?: string;
  /**
   * @remarks
   * Aspect ratio
   * 
   * @example
   * 16:9
   */
  imageRatio?: string;
  /**
   * @remarks
   * Image UUID
   * 
   * @example
   * 70687446-821c-4ebd-9be6-b57dc0a3500a
   */
  imageUuid?: string;
  /**
   * @remarks
   * oss key
   * 
   * @example
   * 1ad5/c728/cb40/2410/e01d/b24c/9acd/7d51/1ad5c728cb402410e01db24c9acd7d51
   */
  ossKey?: string;
  /**
   * @remarks
   * Quantized color palette (HEX, LAB) extracted by the algorithm
   * 
   * @example
   * [{"hex": "#3a3f58", "rgb": {"r": 58, "g": 63, "b": 88 }, "lab": {"l": 27.81, "a": 2.95, "b": -16.52 }, "percentage": 0.4521 }, {"hex": "#c8a16a", "rgb": {"r": 200, "g": 161, "b": 106 }, "lab": {"l": 69.35, "a": 11.23, "b": 35.18 }, "percentage": 0.2355 }, {"hex": "#f1e8da", "rgb": {"r": 241, "g": 232, "b": 218 }, "lab": {"l": 93.17, "a": 1.76, "b": 7.91 }, "percentage": 0.1873 } ]
   */
  quantitativePalette?: string;
  /**
   * @remarks
   * Image tags
   * 
   * @example
   * 日出、奔跑
   */
  tagsFromImage?: string;
  /**
   * @remarks
   * Temporary access URL of the image
   * 
   * @example
   * https://other-general-huadong1.oss-cn-hangzhou.aliyuncs.com/uploadWidget/RollTicket_01.jpeg
   */
  url?: string;
  /**
   * @remarks
   * Image width
   * 
   * @example
   * 154
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      descriptiveTones: 'DescriptiveTones',
      height: 'Height',
      imageCategory: 'ImageCategory',
      imageRatio: 'ImageRatio',
      imageUuid: 'ImageUuid',
      ossKey: 'OssKey',
      quantitativePalette: 'QuantitativePalette',
      tagsFromImage: 'TagsFromImage',
      url: 'Url',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      descriptiveTones: 'string',
      height: 'number',
      imageCategory: 'string',
      imageRatio: 'string',
      imageUuid: 'string',
      ossKey: 'string',
      quantitativePalette: 'string',
      tagsFromImage: 'string',
      url: 'string',
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

export class SearchImageResponseBodyImageResponse extends $dara.Model {
  /**
   * @remarks
   * Image List
   */
  imageList?: SearchImageResponseBodyImageResponseImageList[];
  /**
   * @remarks
   * Number of results per query.
   * 
   * Value range: 10–100. Default Value: 20.
   * 
   * @example
   * 3
   */
  maxResults?: number;
  /**
   * @remarks
   * Token indicating the start of the next query. It is empty when there is no next query.
   * 
   * @example
   * 2c6b65b6f9d625d4e2514a628bde8eb2e0b5e8707e68181f
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      imageList: 'ImageList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageList: { 'type': 'array', 'itemType': SearchImageResponseBodyImageResponseImageList },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageList)) {
      $dara.Model.validateArray(this.imageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code. The ErrorCode field is not returned if the request succeeded. If the request failed, the ErrorCode field is returned. For more information, see the error code list in this topic.
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * error message.
   * 
   * @example
   * aliuid:1998006665794443 assumeRole not exist,serviceName:realtimelogpush.dcdnservices.aliyuncs.com
   */
  errorMsg?: string;
  /**
   * @remarks
   * Image search Result
   */
  imageResponse?: SearchImageResponseBodyImageResponse;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      imageResponse: 'ImageResponse',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      imageResponse: SearchImageResponseBodyImageResponse,
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.imageResponse && typeof (this.imageResponse as any).validate === 'function') {
      (this.imageResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

