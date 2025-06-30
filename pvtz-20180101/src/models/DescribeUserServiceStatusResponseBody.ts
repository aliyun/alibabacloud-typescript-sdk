// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 99626905-678A-4E8A-984E-6AEB09993996
   */
  requestId?: string;
  /**
   * @remarks
   * Current user\\"s service status:
   * 
   * *  **CLOSED**: Not activated
   * *  **OPENED**: Activated
   * *  **IN_DEBT**: Overdue payment
   * *  **IN_DEBT_OVER_DUE**: Payment overdue
   * 
   * @example
   * OPENED
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

