// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchEnrollAccountsRequestAccounts } from "./BatchEnrollAccountsRequestAccounts";
import { BatchEnrollAccountsRequestBaselineItems } from "./BatchEnrollAccountsRequestBaselineItems";


export class BatchEnrollAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The resource accounts.
   */
  accounts?: BatchEnrollAccountsRequestAccounts[];
  /**
   * @remarks
   * The baseline ID.
   * 
   * If this parameter is left empty, the default baseline is used.
   * 
   * @example
   * afb-bp1durvn3lgqe28v****
   */
  baselineId?: string;
  /**
   * @remarks
   * The baseline items.
   * 
   * If this parameter is specified, the configurations of the baseline items are merged with the baseline applied to the specified account. The configurations of the same baseline items are subject to the configurations of this parameter. We recommend that you leave this parameter empty and configure the `BaselineId` parameter to specify an account baseline and apply the configurations of the account baseline to the account.
   */
  baselineItems?: BatchEnrollAccountsRequestBaselineItems[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      baselineId: 'BaselineId',
      baselineItems: 'BaselineItems',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': BatchEnrollAccountsRequestAccounts },
      baselineId: 'string',
      baselineItems: { 'type': 'array', 'itemType': BatchEnrollAccountsRequestBaselineItems },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accounts)) {
      $dara.Model.validateArray(this.accounts);
    }
    if(Array.isArray(this.baselineItems)) {
      $dara.Model.validateArray(this.baselineItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

