// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportCustomerQuotaRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Estimated duration, in minutes.
   * 
   * @example
   * 1
   */
  cost?: number;
  /**
   * @remarks
   * ID of Export task
   * 
   * @example
   * 1231
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      cost: 'Cost',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportCustomerQuotaRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * Code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data
   */
  data?: ExportCustomerQuotaRecordResponseBodyData;
  /**
   * @remarks
   * Description
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * ID of the Request
   * 
   * @example
   * 210bc4b416874189683843905d9f9a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ExportCustomerQuotaRecordResponseBodyData,
      msg: 'string',
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

