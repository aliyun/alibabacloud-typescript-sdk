// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCommonBandwidthPackageIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01FDDD49-C4B7-4D2A-A8E5-A93915C450A6
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

