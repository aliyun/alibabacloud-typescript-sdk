// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Channel type of the skill group.
   * 
   * @example
   * 2
   */
  channelType?: number;
  /**
   * @remarks
   * Skill group description.
   * 
   * @example
   * 自动化技能组
   */
  description?: string;
  /**
   * @remarks
   * Display name of the skill group.
   * 
   * @example
   * 自动化技能组
   */
  displayName?: string;
  /**
   * @remarks
   * Name of the skill group.
   * 
   * @example
   * 自动化技能组
   */
  name?: string;
  /**
   * @remarks
   * Skill group ID.
   * 
   * @example
   * 123456
   */
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      description: 'string',
      displayName: 'string',
      name: 'string',
      skillGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A value of "Success" indicates that the request succeeded.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Skill group information.
   */
  data?: ListSkillGroupResponseBodyData[];
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded. Valid values:
   * - **true**: Succeeded.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListSkillGroupResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

