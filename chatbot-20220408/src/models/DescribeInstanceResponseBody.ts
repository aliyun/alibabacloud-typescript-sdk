// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyCategories extends $dara.Model {
  /**
   * @remarks
   * The ability type of the category, such as FAQ or MRC.
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
   * The category name.
   * 
   * @example
   * 杭州市防疫政策
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
   * The URL of the robot\\"s avatar.
   * 
   * @example
   * /alimefe/meebot/robot/0.0.5/img/xxx-90-97.png
   */
  avatar?: string;
  /**
   * @remarks
   * A list of categories.
   */
  categories?: DescribeInstanceResponseBodyCategories[];
  /**
   * @remarks
   * The UTC time when the robot was created.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @remarks
   * The status of the robot.
   * 
   * @example
   * PUBLISHED
   */
  editStatus?: string;
  /**
   * @remarks
   * The unique identifier of the robot instance.
   * 
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @remarks
   * The robot\\"s introduction.
   * 
   * @example
   * 用于C端问答的机器人
   */
  introduction?: string;
  /**
   * @remarks
   * The language of the robot, such as zh-cn and en-us.
   * 
   * @example
   * zh-cn
   */
  languageCode?: string;
  /**
   * @remarks
   * The robot name.
   * 
   * @example
   * 智能客服-小C
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
   * The robot type.
   * 
   * @example
   * scenario_im
   */
  robotType?: string;
  /**
   * @remarks
   * The time zone of the robot. For more information, see Time zone codes.
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

