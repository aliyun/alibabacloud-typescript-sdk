// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelCommonBandwidthPackageIpBandwidthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 63D187BF-A30A-4DD6-B68D-FF182C96D8A2
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

