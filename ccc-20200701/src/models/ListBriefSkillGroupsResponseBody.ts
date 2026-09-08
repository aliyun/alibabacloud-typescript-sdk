// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBriefSkillGroupsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Description of the skill group.
   * 
   * @example
   * 云联络中心的测试技能组。
   */
  description?: string;
  /**
   * @remarks
   * The display name of the skill group.
   * 
   * @example
   * 测试技能组
   */
  displayName?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The media type. The default value is AUDIO. Other valid values include CHAT and VIDEO.
   * 
   * @example
   * VIDEO
   */
  mediaType?: string;
  /**
   * @remarks
   * Quantity of phone numbers associated with the skill group.
   * 
   * @example
   * 1
   */
  phoneNumberCount?: number;
  /**
   * @remarks
   * The skill group ID.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * Name of the skill group.
   * 
   * @example
   * skillgroup
   */
  skillGroupName?: string;
  /**
   * @remarks
   * The number of agents associated with the skill group.
   * 
   * @example
   * 10
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      phoneNumberCount: 'PhoneNumberCount',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      mediaType: 'string',
      phoneNumberCount: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      userCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBriefSkillGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of skill group summary information.
   */
  list?: ListBriefSkillGroupsResponseBodyDataList[];
  /**
   * @remarks
   * Page number, ranging from 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListBriefSkillGroupsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBriefSkillGroupsResponseBody extends $dara.Model {
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
   * Data.
   */
  data?: ListBriefSkillGroupsResponseBodyData;
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
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 3969FC68-CEC2-4398-B76A-60D2F7EDEBAF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListBriefSkillGroupsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

