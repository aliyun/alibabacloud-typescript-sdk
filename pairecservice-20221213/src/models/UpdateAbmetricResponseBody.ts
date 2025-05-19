// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateABMetricResponseBody extends $dara.Model {
  /**
   * @example
   * 6CF1E160-3F36-5E73-A170-C75504F05BBC
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

