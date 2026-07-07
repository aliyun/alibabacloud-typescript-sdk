// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmDisburseResult extends $dara.Model {
  /**
   * @remarks
   * API Request requestId
   * 
   * @example
   * 841471F6-5D61-1331-8C38-2****B55
   */
  requestId?: string;
  /**
   * @remarks
   * Return Result of Confirm Delivery
   * 
   * @example
   * success
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

