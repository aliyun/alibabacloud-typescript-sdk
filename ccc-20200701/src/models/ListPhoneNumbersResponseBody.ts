// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPhoneNumbersResponseBodyDataListSkillGroups extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * skillgroup
   */
  name?: string;
  /**
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
   * @example
   * true
   */
  active?: boolean;
  city?: string;
  /**
   * @example
   * a3fb6c62-9b49-4942-ae5b-cf2abd4123ek
   */
  contactFlowId?: string;
  contactFlowName?: string;
  /**
   * @example
   * 1617958538000
   */
  createTime?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 08330011****
   */
  number?: string;
  /**
   * @example
   * alicom
   */
  provider?: string;
  province?: string;
  skillGroups?: ListPhoneNumbersResponseBodyDataListSkillGroups[];
  /**
   * @example
   * M1
   */
  tags?: string;
  /**
   * @example
   * Bidirection
   */
  usage?: string;
  /**
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
  list?: ListPhoneNumbersResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListPhoneNumbersResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
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

