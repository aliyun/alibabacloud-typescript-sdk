// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRuleResponseBodyRuleHostsHostAccounts } from "./GetRuleResponseBodyRuleHostsHostAccounts";


export class GetRuleResponseBodyRuleHosts extends $dara.Model {
  /**
   * @remarks
   * The host accounts that the policy authorizes users to manage.
   */
  hostAccounts?: GetRuleResponseBodyRuleHostsHostAccounts[];
  /**
   * @remarks
   * The ID of the host that the policy authorizes users to manage.
   * 
   * @example
   * 52
   */
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccounts: 'HostAccounts',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccounts: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleHostsHostAccounts },
      hostId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostAccounts)) {
      $dara.Model.validateArray(this.hostAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

