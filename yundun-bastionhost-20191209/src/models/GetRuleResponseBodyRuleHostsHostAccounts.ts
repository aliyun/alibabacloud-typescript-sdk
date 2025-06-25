// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuleResponseBodyRuleHostsHostAccounts extends $dara.Model {
  /**
   * @remarks
   * The ID of the host account that the policy authorizes users to manage.
   * 
   * @example
   * 9
   */
  hostAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountId: 'HostAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

