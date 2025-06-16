// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertBandwidthPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth instance.
   * 
   * @example
   * bwp-s6lmotmkkf567b****
   */
  convertInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 455AC20C-7061-446A-BDBD-B3BEE0856304
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      convertInstanceId: 'ConvertInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convertInstanceId: 'string',
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

