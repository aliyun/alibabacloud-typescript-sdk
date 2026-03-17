// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientUserDNSResponseBody extends $dara.Model {
  /**
   * @remarks
   * The active and standby DNS servers that the SAG app instance uses when it connects to private networks.
   */
  appDNS?: string[];
  /**
   * @remarks
   * The active and standby DNS servers that the SAG app instance uses when it disconnects from private networks.
   */
  recoveredDNS?: string[];
  /**
   * @remarks
   * The ID of the request.
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

