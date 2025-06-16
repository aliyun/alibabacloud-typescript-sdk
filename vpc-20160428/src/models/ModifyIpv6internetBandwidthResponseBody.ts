// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpv6InternetBandwidthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D560AF68-4CE8-4A5C-B3FE-469F558094D0
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

