// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportCustomerQuotaRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The estimated time required, in minutes.
   * 
   * @example
   * 1
   */
  cost?: number;
  /**
   * @remarks
   * The ID of the export task.
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
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: ExportCustomerQuotaRecordResponseBodyData;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * Id of the request
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

