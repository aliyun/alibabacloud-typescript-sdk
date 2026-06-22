// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAudienceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Meta ad account ID.
   * 
   * @example
   * 339**
   */
  adAccountId?: string;
  /**
   * @remarks
   * The time when the audience was created.
   * 
   * @example
   * 1720356898
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the custom audience.
   * 
   * @example
   * 339**
   */
  customAudienceId?: string;
  /**
   * @remarks
   * The name of the custom audience.
   * 
   * @example
   * custom audience name
   */
  customAudienceName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The Page ID for Messenger.
   * 
   * @example
   * 239**
   */
  pageId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * None
   */
  status?: string;
  /**
   * @remarks
   * The number of tokens.
   * 
   * @example
   * 70
   */
  tokenTotal?: number;
  /**
   * @remarks
   * The token type.
   * 
   * @example
   * custom
   */
  tokenType?: string;
  /**
   * @remarks
   * The time when the audience was last updated.
   * 
   * @example
   * 51
   */
  updateTime?: number;
  /**
   * @remarks
   * The upload type.
   * 
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
  /**
   * @remarks
   * Details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - A value of OK indicates that the request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListCustomAudienceResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39**
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
   * 
   * - **true**: successful.
   * 
   * - **false**: failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
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

