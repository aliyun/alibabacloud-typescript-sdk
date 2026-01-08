// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWhatsappConversionApiResponseBodyData extends $dara.Model {
  /**
   * @example
   * 111
   */
  datasetId?: string;
  /**
   * @example
   * 7832312
   */
  pageId?: string;
  /**
   * @example
   * aaa
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
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetWhatsappConversionApiResponseBodyData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
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

