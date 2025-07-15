// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomCallTaggingResponseBodyDataListCallTagList extends $dara.Model {
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * TagA
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomCallTaggingResponseBodyDataList extends $dara.Model {
  callTagList?: ListCustomCallTaggingResponseBodyDataListCallTagList[];
  /**
   * @example
   * agent
   */
  creator?: string;
  description?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 1312121****
   */
  number?: string;
  /**
   * @example
   * 2020-07-05 00:00:00.0
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      callTagList: 'CallTagList',
      creator: 'Creator',
      description: 'Description',
      instanceId: 'InstanceId',
      number: 'Number',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callTagList: { 'type': 'array', 'itemType': ListCustomCallTaggingResponseBodyDataListCallTagList },
      creator: 'string',
      description: 'string',
      instanceId: 'string',
      number: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.callTagList)) {
      $dara.Model.validateArray(this.callTagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomCallTaggingResponseBodyData extends $dara.Model {
  list?: ListCustomCallTaggingResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListCustomCallTaggingResponseBodyDataList },
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

export class ListCustomCallTaggingResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListCustomCallTaggingResponseBodyData;
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
      data: ListCustomCallTaggingResponseBodyData,
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

