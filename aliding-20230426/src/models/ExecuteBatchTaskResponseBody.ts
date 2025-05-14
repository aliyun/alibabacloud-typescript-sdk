// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteBatchTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  failNumber?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  successNumber?: number;
  /**
   * @example
   * 3
   */
  total?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      failNumber: 'failNumber',
      requestId: 'requestId',
      successNumber: 'successNumber',
      total: 'total',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failNumber: 'number',
      requestId: 'string',
      successNumber: 'number',
      total: 'number',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

