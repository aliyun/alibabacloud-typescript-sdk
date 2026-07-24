// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKeywordsResponseBodyDataItemsProperties extends $dara.Model {
  /**
   * @remarks
   * The properties.
   * 
   * @example
   * xxx
   */
  attribute?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordsResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-06-03 14:43:03
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2023-06-03 14:43:03
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 112
   */
  id?: number;
  /**
   * @remarks
   * The keyword library ID.
   * 
   * @example
   * custom_xxxx
   */
  keywordLibId?: string;
  /**
   * @remarks
   * The keyword data ID.
   * 
   * @example
   * 4205334
   */
  keywordMd5Id?: number;
  /**
   * @remarks
   * The properties.
   */
  properties?: ListKeywordsResponseBodyDataItemsProperties;
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * 测试词
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      keywordLibId: 'KeywordLibId',
      keywordMd5Id: 'KeywordMd5Id',
      properties: 'Properties',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      keywordLibId: 'string',
      keywordMd5Id: 'number',
      properties: ListKeywordsResponseBodyDataItemsProperties,
      word: 'string',
    };
  }

  validate() {
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data on the current page.
   */
  items?: ListKeywordsResponseBodyDataItems[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': ListKeywordsResponseBodyDataItems },
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListKeywordsResponseBodyData;
  /**
   * @remarks
   * The description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListKeywordsResponseBodyData,
      msg: 'string',
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

