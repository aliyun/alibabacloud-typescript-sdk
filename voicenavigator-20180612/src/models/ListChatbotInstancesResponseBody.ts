// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatbotInstancesResponseBodyBots extends $dara.Model {
  /**
   * @example
   * https://dss0.ali.com/70cFuHS.jpg
   */
  avatar?: string;
  /**
   * @example
   * 1582266750353
   */
  createTime?: string;
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @example
   * ‘’
   */
  introduction?: string;
  /**
   * @example
   * zh-cn
   */
  languageCode?: string;
  name?: string;
  /**
   * @example
   * UTC+8
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
  bots?: ListChatbotInstancesResponseBodyBots[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bots: 'Bots',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bots: { 'type': 'array', 'itemType': ListChatbotInstancesResponseBodyBots },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

