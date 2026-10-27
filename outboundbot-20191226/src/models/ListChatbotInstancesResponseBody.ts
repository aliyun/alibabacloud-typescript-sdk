// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatbotInstancesResponseBodyBots extends $dara.Model {
  /**
   * @remarks
   * The URL of the avatar.
   * 
   * @example
   * https://ccrm.wengine.cn/ccrm/system/common/fileDownload/noToken?fileId=975cdeaa064846e3b6004abd9ba1d7c8
   */
  avatar?: string;
  /**
   * @remarks
   * The creation time. The time is displayed in UTC in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2022-01-18T02:36:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * e874fcf0-d2f4-4e62-9377-b6f35fe55210
   */
  instanceId?: string;
  /**
   * @remarks
   * The description of the chatbot.
   * 
   * @example
   * This is the description for the live stream
   */
  introduction?: string;
  /**
   * @remarks
   * The language of the chatbot service, such as zh-cn and en-us.
   * 
   * @example
   * zh-cn
   */
  languageCode?: string;
  /**
   * @remarks
   * The name of the chatbot.
   * 
   * @example
   * Smart Callback 2
   */
  name?: string;
  /**
   * @remarks
   * The time zone of the chatbot. For more information, see Public - Time Zone Codes.
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
   * The list of chatbots.
   */
  bots?: ListChatbotInstancesResponseBodyBots[];
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned by the API.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 5
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
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

