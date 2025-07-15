// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLegacyAppraiseLogsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 3786929579
   */
  acid?: string;
  /**
   * @example
   * Outbound
   */
  contactType?: string;
  /**
   * @example
   * 10505
   */
  id?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * {}
   */
  keyMarkRelation?: string;
  note?: string;
  parentNote?: string;
  /**
   * @example
   * 2
   */
  pressKey?: string;
  /**
   * @example
   * 28036411123456****
   */
  ramId?: string;
  /**
   * @example
   * test@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * 2021-12-03T10:15:30
   */
  statisticDate?: string;
  /**
   * @example
   * Launch
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      contactType: 'ContactType',
      id: 'Id',
      instanceId: 'InstanceId',
      keyMarkRelation: 'KeyMarkRelation',
      note: 'Note',
      parentNote: 'ParentNote',
      pressKey: 'PressKey',
      ramId: 'RamId',
      skillGroupId: 'SkillGroupId',
      statisticDate: 'StatisticDate',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      contactType: 'string',
      id: 'number',
      instanceId: 'string',
      keyMarkRelation: 'string',
      note: 'string',
      parentNote: 'string',
      pressKey: 'string',
      ramId: 'string',
      skillGroupId: 'string',
      statisticDate: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyAppraiseLogsResponseBodyData extends $dara.Model {
  list?: ListLegacyAppraiseLogsResponseBodyDataList[];
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
   * 18
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
      list: { 'type': 'array', 'itemType': ListLegacyAppraiseLogsResponseBodyDataList },
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

export class ListLegacyAppraiseLogsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListLegacyAppraiseLogsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * A13BB835-94AA-4E55-8D9E-5EA585CE6555"
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListLegacyAppraiseLogsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

