// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFeatureEntityResponseBody extends $dara.Model {
  /**
   * @example
   * E23EFF09-58AA-5420-934F-8453AE01548D
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

