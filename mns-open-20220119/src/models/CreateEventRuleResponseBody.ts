// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * rule-xsXDW
   */
  data?: string;
  /**
   * @example
   * operation success
   */
  message?: string;
  /**
   * @example
   * 06273500-249F-5863-121D-74D51123****
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
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
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

