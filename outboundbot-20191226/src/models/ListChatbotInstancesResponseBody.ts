// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatbotInstancesResponseBodyBots extends $dara.Model {
  /**
   * @remarks
   * Profile picture URL.
   * 
   * @example
   * https://ccrm.wengine.cn/ccrm/system/common/fileDownload/noToken?fileId=975cdeaa064846e3b6004abd9ba1d7c8
   */
  avatar?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2022-01-18T02:36:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * e874fcf0-d2f4-4e62-9377-b6f35fe55210
   */
  instanceId?: string;
  /**
   * @remarks
   * Chatbot description.
   * 
   * @example
   * 这是直播的描述
   */
  introduction?: string;
  /**
   * @remarks
   * Language used by the chatbot, such as zh-cn or en-us.
   * 
   * @example
   * zh-cn
   */
  languageCode?: string;
  /**
   * @remarks
   * Chatbot name.
   * 
   * @example
   * 智能回访2
   */
  name?: string;
  /**
   * @remarks
   * Time zone of the chatbot. See Common Time Zone Codes.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      introduction: 'Introduction',
      languageCode: 'LanguageCode',
      name: 'Name',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      createTime: 'string',
      instanceId: 'string',
      introduction: 'string',
      languageCode: 'string',
      name: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatbotInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Chatbot list details
   */
  bots?: ListChatbotInstancesResponseBodyBots[];
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 5
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bots: 'Bots',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bots: { 'type': 'array', 'itemType': ListChatbotInstancesResponseBodyBots },
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bots)) {
      $dara.Model.validateArray(this.bots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

