// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The URL of the chatbot avatar.
   * 
   * @example
   * /alimefe/meebot/robot/0.0.5/img/xxx-90-97.png
   */
  avatar?: string;
  /**
   * @remarks
   * The UTC time when the chatbot was created.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @remarks
   * The unique identifier of the chatbot.
   * 
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @remarks
   * The description of the chatbot.
   * 
   * @example
   * A chatbot for consumer Q&A
   */
  introduction?: string;
  /**
   * @remarks
   * The language of the chatbot service, such as zh-cn or en-us. For more information, see http://www.lingoes.net/zh/translator/langcode.htm.
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
   * Intelligent Customer Service - Bot C
   */
  name?: string;
  /**
   * @remarks
   * The type of the chatbot.
   * 
   * @example
   * scenario_im
   */
  robotType?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      introduction: 'Introduction',
      languageCode: 'LanguageCode',
      name: 'Name',
      robotType: 'RobotType',
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
      robotType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of chatbots.
   */
  instances?: ListInstanceResponseBodyInstances[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 92B81548-42B9-4B34-924B-4E778AEB412B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstanceResponseBodyInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

