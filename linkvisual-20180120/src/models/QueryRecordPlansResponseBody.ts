// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecordPlansResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The name of the recording plan.
   * 
   * @example
   * plan1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the recording plan.
   * 
   * @example
   * 6c5a397bc17c4b48ace86f0f0c30****
   */
  planId?: string;
  /**
   * @remarks
   * The ID of the time template associated with the recording plan.
   * 
   * @example
   * 693e244a038f4255bb2f5db32874****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      planId: 'PlanId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      planId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlansResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of returned recording plan templates.
   */
  list?: QueryRecordPlansResponseBodyDataList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @remarks
   * The number of records returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of recording plans returned.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      page: 'Page',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryRecordPlansResponseBodyDataList },
      page: 'number',
      pageCount: 'number',
      pageSize: 'number',
      total: 'number',
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

export class QueryRecordPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The query information.
   */
  data?: QueryRecordPlansResponseBodyData;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * tenant auth error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06DC77A0-4622-42DB-9EE0-25FIOHS82JK1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRecordPlansResponseBodyData,
      errorMessage: 'string',
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

