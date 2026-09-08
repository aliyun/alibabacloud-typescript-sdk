// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPhoneNumbersResponseBodyDataListSkillGroups extends $dara.Model {
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
   * The instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the skill group.
   * 
   * @example
   * skillgroup
   */
  name?: string;
  /**
   * @remarks
   * The skill group ID.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      instanceId: 'string',
      name: 'string',
      skillGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the number is active.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The city where the number is registered.
   * 
   * @example
   * 乐山
   */
  city?: string;
  /**
   * @remarks
   * The IVR contact flow ID associated with the phone number.
   * 
   * @example
   * a3fb6c62-9b49-4942-ae5b-cf2abd4123ek
   */
  contactFlowId?: string;
  /**
   * @remarks
   * Name of the IVR contact flow associated with the number.
   * 
   * @example
   * 默认联系流
   */
  contactFlowName?: string;
  /**
   * @remarks
   * The number creation time, which is the time when the number was associated with the instance, in Unix timestamp format with millisecond precision.
   * 
   * @example
   * 1617958538000
   */
  createTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Number.
   * 
   * @example
   * 08330011****
   */
  number?: string;
  /**
   * @remarks
   * Number provider name.
   * 
   * @example
   * alicom
   */
  provider?: string;
  /**
   * @remarks
   * The province where the number is registered.
   * 
   * @example
   * 四川
   */
  province?: string;
  /**
   * @remarks
   * The list of skill groups associated with the number.
   */
  skillGroups?: ListPhoneNumbersResponseBodyDataListSkillGroups[];
  /**
   * @remarks
   * Business tags for the number, primarily used for labeling and extended business purposes. Ordinary customers do not need to concern themselves with this.
   * 
   * @example
   * M1
   */
  tags?: string;
  /**
   * @remarks
   * The usage of the phone number.
   * 
   * @example
   * Bidirection
   */
  usage?: string;
  /**
   * @remarks
   * Agent ID. If this parameter is not empty, the number is dedicated to the agent.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      city: 'City',
      contactFlowId: 'ContactFlowId',
      contactFlowName: 'ContactFlowName',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      number: 'Number',
      provider: 'Provider',
      province: 'Province',
      skillGroups: 'SkillGroups',
      tags: 'Tags',
      usage: 'Usage',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      city: 'string',
      contactFlowId: 'string',
      contactFlowName: 'string',
      createTime: 'string',
      instanceId: 'string',
      number: 'string',
      provider: 'string',
      province: 'string',
      skillGroups: { 'type': 'array', 'itemType': ListPhoneNumbersResponseBodyDataListSkillGroups },
      tags: 'string',
      usage: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.skillGroups)) {
      $dara.Model.validateArray(this.skillGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The phone number list.
   */
  list?: ListPhoneNumbersResponseBodyDataList[];
  /**
   * @remarks
   * The page number, ranging from 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size, ranging from 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 1
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
      list: { 'type': 'array', 'itemType': ListPhoneNumbersResponseBodyDataList },
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

export class ListPhoneNumbersResponseBody extends $dara.Model {
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
   * Data.
   */
  data?: ListPhoneNumbersResponseBodyData;
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
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BA03159C-E808-4FF1-B27E-A61B6E888D7F
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
      data: ListPhoneNumbersResponseBodyData,
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

