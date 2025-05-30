// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryMmsJobResponseBody extends $dara.Model {
  /**
   * @example
   * 78
   */
  data?: number;
  /**
   * @example
   * 7F5DAD1C-9EC2-5FE5-97CF-BCE21B4ABA29
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
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

