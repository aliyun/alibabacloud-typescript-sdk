// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportReversedDeductionHistoryResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  cost?: number;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: ExportReversedDeductionHistoryResponseBodyData;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
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

