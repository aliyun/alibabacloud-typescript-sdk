// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportReversedDeductionHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The estimated duration, in minutes.
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
   * 2131
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

export class ExportReversedDeductionHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the response. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response object.
   */
  data?: ExportReversedDeductionHistoryResponseBodyData;
  /**
   * @remarks
   * The description of the response.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * asfasd123
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
      code: 'string',
      data: ExportReversedDeductionHistoryResponseBodyData,
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

