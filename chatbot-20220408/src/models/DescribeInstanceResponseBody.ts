// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyCategories extends $dara.Model {
  abilityType?: string;
  /**
   * @example
   * 30000066832
   */
  categoryId?: number;
  /**
   * @example
   * 杭州市防疫政策
   */
  name?: string;
  /**
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
   * @example
   * /alimefe/meebot/robot/0.0.5/img/xxx-90-97.png
   */
  avatar?: string;
  categories?: DescribeInstanceResponseBodyCategories[];
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @example
   * PUBLISHED
   */
  editStatus?: string;
  /**
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @example
   * 用于C端问答的机器人
   */
  introduction?: string;
  /**
   * @example
   * zh-cn
   */
  languageCode?: string;
  /**
   * @example
   * 智能客服-小C
   */
  name?: string;
  /**
   * @example
   * 907AA5F2-0521-49AB-80AB-1ADEFAB2B901
   */
  requestId?: string;
  /**
   * @example
   * scenario_im
   */
  robotType?: string;
  /**
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

