// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAudienceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 339**
   */
  adAccountId?: string;
  /**
   * @example
   * 1720356898
   */
  createTime?: number;
  /**
   * @example
   * 339**
   */
  customAudienceId?: string;
  /**
   * @example
   * custom audience name
   */
  customAudienceName?: string;
  /**
   * @example
   * desc
   */
  description?: string;
  /**
   * @example
   * 239**
   */
  pageId?: string;
  /**
   * @example
   * NONE
   */
  status?: string;
  /**
   * @example
   * 70
   */
  tokenTotal?: number;
  /**
   * @example
   * custom
   */
  tokenType?: string;
  /**
   * @example
   * 51
   */
  updateTime?: number;
  /**
   * @example
   * excel
   */
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      adAccountId: 'AdAccountId',
      createTime: 'CreateTime',
      customAudienceId: 'CustomAudienceId',
      customAudienceName: 'CustomAudienceName',
      description: 'Description',
      pageId: 'PageId',
      status: 'Status',
      tokenTotal: 'TokenTotal',
      tokenType: 'TokenType',
      updateTime: 'UpdateTime',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adAccountId: 'string',
      createTime: 'number',
      customAudienceId: 'string',
      customAudienceName: 'string',
      description: 'string',
      pageId: 'string',
      status: 'string',
      tokenTotal: 'number',
      tokenType: 'string',
      updateTime: 'number',
      uploadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAudienceResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListCustomAudienceResponseBodyData[];
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 39**
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 69
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCustomAudienceResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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

