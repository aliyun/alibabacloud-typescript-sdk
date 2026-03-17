// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagCurrentDnsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address of the primary DNS server.
   * 
   * @example
   * 223.XX.XX.5
   */
  masterDns?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0937DEA0-AB4B-42F4-9314-07B97D30282B
   */
  requestId?: string;
  /**
   * @remarks
   * The IP address of the secondary DNS server.
   * 
   * @example
   * 114.XX.XX.114
   */
  slaveDns?: string;
  static names(): { [key: string]: string } {
    return {
      masterDns: 'MasterDns',
      requestId: 'RequestId',
      slaveDns: 'SlaveDns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterDns: 'string',
      requestId: 'string',
      slaveDns: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

