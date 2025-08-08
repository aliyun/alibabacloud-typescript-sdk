// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineGroupDetailReportResponseBodyDataColumns extends $dara.Model {
  /**
   * @example
   * skillGroupName
   */
  key?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportResponseBodyData extends $dara.Model {
  columns?: GetHotlineGroupDetailReportResponseBodyDataColumns[];
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  rows?: { [key: string]: any }[];
  /**
   * @example
   * 9
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      page: 'Page',
      pageSize: 'PageSize',
      rows: 'Rows',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetHotlineGroupDetailReportResponseBodyDataColumns },
      page: 'number',
      pageSize: 'number',
      rows: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetHotlineGroupDetailReportResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * Public
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotlineGroupDetailReportResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

