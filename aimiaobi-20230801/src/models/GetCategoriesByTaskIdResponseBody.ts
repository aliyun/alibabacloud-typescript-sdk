// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCategoriesByTaskIdResponseBodyDataChildren extends $dara.Model {
  /**
   * @remarks
   * The name of the sub-classification.
   * 
   * @example
   * 类别1-1
   */
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
  /**
   * @remarks
   * The name of the classification.
   * 
   * @example
   * 类别1
   */
  category?: string;
  /**
   * @remarks
   * A list of sub-classifications.
   */
  children?: GetCategoriesByTaskIdResponseBodyDataChildren[];
  /**
   * @remarks
   * The number of Voice of the Customer (VOC) entries in this classification.
   * 
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
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * A list of classification objects.
   */
  data?: GetCategoriesByTaskIdResponseBodyData[];
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
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: \\`true\\` and \\`false\\`.
   * 
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

