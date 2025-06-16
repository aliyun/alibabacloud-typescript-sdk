// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIpv6InternetBandwidthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E07E0FE6-5C21-405F-AF82-7613AA81EF92
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

