// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCategoriesByTaskIdResponseBodyDataChildren extends $dara.Model {
  category?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesByTaskIdResponseBodyData extends $dara.Model {
  category?: string;
  children?: GetCategoriesByTaskIdResponseBodyDataChildren[];
  /**
   * @example
   * 2
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      children: 'Children',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      children: { 'type': 'array', 'itemType': GetCategoriesByTaskIdResponseBodyDataChildren },
      count: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesByTaskIdResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetCategoriesByTaskIdResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
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
      data: { 'type': 'array', 'itemType': GetCategoriesByTaskIdResponseBodyData },
      httpStatusCode: 'number',
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

