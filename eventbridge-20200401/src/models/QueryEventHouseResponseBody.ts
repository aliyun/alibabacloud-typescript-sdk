// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Row } from "./Row";


export class QueryEventHouseResponseBodyData extends $dara.Model {
  rows?: Row[];
  /**
   * @example
   * 18
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      rows: 'Rows',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rows: { 'type': 'array', 'itemType': Row },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventHouseResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: QueryEventHouseResponseBodyData;
  /**
   * @example
   * Remote error. requestId: [xxxx], error code: [xxx], message: [The target in event rule is invalid! Endpoint is xxx
   */
  message?: string;
  /**
   * @example
   * f2099962-1628-45f1-9782-2bf6daad823f
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryEventHouseResponseBodyData,
      message: 'string',
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

