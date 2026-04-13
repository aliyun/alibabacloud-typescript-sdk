// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTableResponseBodyData extends $dara.Model {
  /**
   * @example
   * table_b6ddc67e7df14db38b74ef5e2e0fe24e_12792097
   */
  tableId?: string;
  static names(): { [key: string]: string } {
    return {
      tableId: 'TableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTableResponseBody extends $dara.Model {
  /**
   * @example
   * Index.Forbidden
   */
  code?: string;
  data?: AddTableResponseBodyData;
  /**
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 778C0B3B-03C1-5FC1-A947-36EDD13606AB
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddTableResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
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

