// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAggregateRemediationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the operation succeeded. Valid values:
   * 
   * - true: The operation succeeded.
   * 
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C7817373-78CB-4F9A-8AFA-E7A88E9D64A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

