// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSyntheticDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of results.
   */
  items?: { [key: string]: any }[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * null
   */
  taskCreateTime?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      page: 'Page',
      pageSize: 'PageSize',
      taskCreateTime: 'TaskCreateTime',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      page: 'number',
      pageSize: 'number',
      taskCreateTime: 'number',
      total: 'number',
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

export class ListSyntheticDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: ListSyntheticDetailResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * null
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 70675725-8F11-4817-8106-CFE0AD71****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListSyntheticDetailResponseBodyData,
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

