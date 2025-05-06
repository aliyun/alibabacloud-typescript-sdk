// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregatorResponseBodyAggregatorAggregatorAccounts extends $dara.Model {
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 171322098523****
   */
  accountId?: number;
  /**
   * @remarks
   * The display name of the member.
   * 
   * @example
   * Alice
   * 
   * **if can be null:**
   * false
   */
  accountName?: string;
  /**
   * @remarks
   * The resource directory to which the member belongs. Valid value: ResourceDirectory. ResourceDirectory indicates that the member belongs to a resource directory.
   * 
   * @example
   * ResourceDirectory
   */
  accountType?: string;
  /**
   * @remarks
   * The status of the configuration recorder for the member. Valid values:
   * 
   * *   REGISTRABLE: The configuration recorder is not registered.
   * *   BUILDING: The configuration recorder is being deployed.
   * *   REGISTERED: The configuration recorder is registered.
   * *   REBUILDING: The configuration recorder is being redeployed.
   * 
   * @example
   * REGISTERED
   */
  recorderStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      accountType: 'AccountType',
      recorderStatus: 'RecorderStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
      accountType: 'string',
      recorderStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

