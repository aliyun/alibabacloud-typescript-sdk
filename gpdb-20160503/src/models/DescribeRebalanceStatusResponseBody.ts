// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRebalanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C6122AD-2FCC-50B3-873A-37B68775****
   */
  requestId?: string;
  /**
   * @remarks
   * The rebalance status of the instance. Valid values: Balanced and Imbalanced.
   * 
   * @example
   * Balanced
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

