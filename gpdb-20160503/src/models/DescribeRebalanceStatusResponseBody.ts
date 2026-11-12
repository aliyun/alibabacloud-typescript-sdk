// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRebalanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F5B5023-94EA-5D5D-AB72-B7B356BA****
   */
  requestId?: string;
  /**
   * @remarks
   * The rebalance status of the instance. Valid values: Balanced and Imbalanced.
   * 
   * @example
   * Init
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

