// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckTrafficControlTaskExpressionResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  isValie?: boolean;
  /**
   * @example
   * ""
   */
  reason?: string;
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isValie: 'IsValie',
      reason: 'Reason',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValie: 'boolean',
      reason: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

