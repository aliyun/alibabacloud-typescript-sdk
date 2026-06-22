// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWhatsappConversionApiResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  datasetId?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  pageId?: string;
  /**
   * @example
   * 示例值
   */
  pageName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      pageId: 'PageId',
      pageName: 'PageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      pageId: 'string',
      pageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhatsappConversionApiResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  code?: string;
  data?: GetWhatsappConversionApiResponseBodyData[];
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': GetWhatsappConversionApiResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

