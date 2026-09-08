// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomCallTaggingResponseBodyDataListCallTagList extends $dara.Model {
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
   * Number tag name.
   * 
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
  /**
   * @remarks
   * List of number tags.
   */
  callTagList?: ListCustomCallTaggingResponseBodyDataListCallTagList[];
  /**
   * @remarks
   * Creator.
   * 
   * @example
   * agent
   */
  creator?: string;
  /**
   * @remarks
   * The description of the inbound number mark.
   * 
   * @example
   * 王先生
   */
  description?: string;
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
   * The number of the inbound number mark.
   * 
   * @example
   * 1312121****
   */
  number?: string;
  /**
   * @remarks
   * Last update time.
   * 
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
  /**
   * @remarks
   * The list of inbound number marks.
   */
  list?: ListCustomCallTaggingResponseBodyDataList[];
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total count.
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
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: ListCustomCallTaggingResponseBodyData;
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

