// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactFlowsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 78128960-bb00-4ddc-8e82-923a8c5bd22d
   */
  contactFlowId?: string;
  /**
   * @example
   * 2021-03-05 17:35:45.0
   */
  createdTime?: string;
  definition?: string;
  /**
   * @example
   * 1.0
   */
  description?: string;
  /**
   * @example
   * db07c0bb-6b1f-47d2-b37e-2451c617562d
   */
  draftId?: string;
  /**
   * @example
   * ccc-test
   */
  editor?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  name?: string;
  numberList?: string[];
  /**
   * @example
   * true
   */
  published?: boolean;
  /**
   * @example
   * MAIN_FLOW
   */
  type?: string;
  /**
   * @example
   * 2021-03-08 15:34:49.0
   */
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      createdTime: 'CreatedTime',
      definition: 'Definition',
      description: 'Description',
      draftId: 'DraftId',
      editor: 'Editor',
      instanceId: 'InstanceId',
      name: 'Name',
      numberList: 'NumberList',
      published: 'Published',
      type: 'Type',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      createdTime: 'string',
      definition: 'string',
      description: 'string',
      draftId: 'string',
      editor: 'string',
      instanceId: 'string',
      name: 'string',
      numberList: { 'type': 'array', 'itemType': 'string' },
      published: 'boolean',
      type: 'string',
      updatedTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.numberList)) {
      $dara.Model.validateArray(this.numberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponseBodyData extends $dara.Model {
  list?: ListContactFlowsResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListContactFlowsResponseBodyDataList },
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

export class ListContactFlowsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListContactFlowsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
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
      data: ListContactFlowsResponseBodyData,
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

