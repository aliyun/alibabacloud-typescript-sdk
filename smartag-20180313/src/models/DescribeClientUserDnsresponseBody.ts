// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientUserDNSResponseBody extends $dara.Model {
  /**
   * @remarks
   * The primary and secondary DNS configurations used when the client of the Smart Access Gateway app instance connects to a private network.
   */
  appDNS?: string[];
  /**
   * @remarks
   * The primary and secondary DNS configurations used when the client of the Smart Access Gateway app instance disconnects from a private network.
   */
  recoveredDNS?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 894AA8BD-0627-45B1-AA18-9CE1D50DA9D0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appDNS: 'AppDNS',
      recoveredDNS: 'RecoveredDNS',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDNS: { 'type': 'array', 'itemType': 'string' },
      recoveredDNS: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appDNS)) {
      $dara.Model.validateArray(this.appDNS);
    }
    if(Array.isArray(this.recoveredDNS)) {
      $dara.Model.validateArray(this.recoveredDNS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

