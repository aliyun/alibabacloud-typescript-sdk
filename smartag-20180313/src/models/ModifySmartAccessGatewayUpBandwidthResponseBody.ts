// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySmartAccessGatewayUpBandwidthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE837E9F-BD50-4C2B-9E47-260F9D848480
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

