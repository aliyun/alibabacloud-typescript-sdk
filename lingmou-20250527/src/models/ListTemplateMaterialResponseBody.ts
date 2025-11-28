// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateMaterialResponseBodyData extends $dara.Model {
  /**
   * @example
   * BROADCAST
   */
  bizType?: string;
  /**
   * @example
   * M1Ti7gfj7VGDQgD588hxReiw
   */
  templateId?: string;
  templateName?: string;
  /**
   * @example
   * //daily-avatar-property.oss-cn-beijing.aliyuncs.com/material/INPUT_TRAIN_TEMPLATE_UGC_BODY/Mt.CNYEA3CV25QU2/%E5%BA%95%E6%9D%BF3%E6%9B%BF%E6%8D%A2.mp4?Expires=1764326111&OSSAccessKeyId=LTAI5tBRPnF5JkRCidYA8kw9&Signature=3WU2%2FV2XDaQdt00lkAInK6yr9uk%3D
   */
  templateURL?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      templateId: 'templateId',
      templateName: 'templateName',
      templateURL: 'templateURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      templateId: 'string',
      templateName: 'string',
      templateURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateMaterialResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListTemplateMaterialResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * M1Ti7gfj7VGDQgD588hxReiw
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 7239F9E5-A4DB-55BA-B701-0CE47DBDB0A8
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  size?: number;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  total?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      page: 'page',
      requestId: 'requestId',
      size: 'size',
      success: 'success',
      total: 'total',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListTemplateMaterialResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      page: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
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

