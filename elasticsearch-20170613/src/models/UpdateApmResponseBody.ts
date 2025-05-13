// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApmResponseBody extends $dara.Model {
  /**
   * @example
   * 18061926-CC50-5F9B-9600-034C29F1D5B0
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

