// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFeatureViewResponseBody extends $dara.Model {
  /**
   * @example
   * BF349686-C932-55B5-9B31-DAFA395C0E06
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

