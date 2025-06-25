// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostAccountsForHostShareKeyResponseBodyHostAccounts extends $dara.Model {
  /**
   * @remarks
   * The name of the host account.
   * 
   * @example
   * root1234
   */
  hostAccountName?: string;
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * 1113
   */
  hostId?: string;
  /**
   * @remarks
   * The ID of the host account.
   * 
   * @example
   * 1235
   */
  hostsAccountId?: string;
  /**
   * @remarks
   * The O\\&M protocol.
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      hostsAccountId: 'HostsAccountId',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountName: 'string',
      hostId: 'string',
      hostsAccountId: 'string',
      protocolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

