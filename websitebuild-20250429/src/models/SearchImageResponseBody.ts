// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageResponseBodyImageResponseImageList extends $dara.Model {
  descriptiveTones?: string;
  /**
   * @example
   * 1000
   */
  height?: number;
  /**
   * @example
   * normal
   */
  imageCategory?: string;
  imageRatio?: string;
  /**
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
  quantitativePalette?: string;
  tagsFromImage?: string;
  /**
   * @example
   * https://other-general-huadong1.oss-cn-hangzhou.aliyuncs.com/uploadWidget/RollTicket_01.jpeg
   */
  url?: string;
  /**
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
  imageList?: SearchImageResponseBodyImageResponseImageList[];
  /**
   * @example
   * 3
   */
  maxResults?: number;
  /**
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
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @example
   * aliuid:1998006665794443 assumeRole not exist,serviceName:realtimelogpush.dcdnservices.aliyuncs.com
   */
  errorMsg?: string;
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

