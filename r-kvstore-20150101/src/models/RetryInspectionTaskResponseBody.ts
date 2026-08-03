// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryInspectionTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 794120D1-E0CF-4713-BAE4-EBAEA04506AF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

