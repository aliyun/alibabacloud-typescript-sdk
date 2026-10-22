// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyCategories extends $dara.Model {
  /**
   * @remarks
   * The ability type of the category, such as FAQ (frequently asked questions) or MRC (document).
   * 
   * @example
   * FAQ
   */
  abilityType?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 30000066832
   */
  categoryId?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * Pandemic Prevention Policy
   */
  name?: string;
  /**
   * @remarks
   * The parent category ID. A value of -1 indicates the root directory.
   * 
   * @example
   * -1
   */
  parentCategoryId?: number;
  static names(): { [key: string]: string } {
    return {
      abilityType: 'AbilityType',
      categoryId: 'CategoryId',
      name: 'Name',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abilityType: 'string',
      categoryId: 'number',
      name: 'string',
      parentCategoryId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $dara.Model {
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
   * The list of categories.
   */
  categories?: DescribeInstanceResponseBodyCategories[];
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
   * The status of the chatbot.
   * 
   * @example
   * PUBLISHED
   */
  editStatus?: string;
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
   * The remarks of the chatbot.
   * 
   * @example
   * A chatbot for consumer Q&A
   */
  introduction?: string;
  /**
   * @remarks
   * The language of the chatbot service, such as zh-cn or en-us.
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
   * The request ID.
   * 
   * @example
   * 907AA5F2-0521-49AB-80AB-1ADEFAB2B901
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the chatbot.
   * 
   * @example
   * scenario_im
   */
  robotType?: string;
  /**
   * @remarks
   * The time zone of the chatbot. For more information, see the common time zone codes.
   * 
   * @example
   * Asia/Chongqing
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      categories: 'Categories',
      createTime: 'CreateTime',
      editStatus: 'EditStatus',
      instanceId: 'InstanceId',
      introduction: 'Introduction',
      languageCode: 'LanguageCode',
      name: 'Name',
      requestId: 'RequestId',
      robotType: 'RobotType',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      categories: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyCategories },
      createTime: 'string',
      editStatus: 'string',
      instanceId: 'string',
      introduction: 'string',
      languageCode: 'string',
      name: 'string',
      requestId: 'string',
      robotType: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

