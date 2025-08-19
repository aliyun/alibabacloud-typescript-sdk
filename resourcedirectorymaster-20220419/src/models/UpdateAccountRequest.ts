// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. The system checks items such as whether the member status can be modified and whether security information is configured for the member. If the request does not pass the dry run, an error code is returned.
   * *   false (default): performs a dry run and performs the actual request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The new type of the member. Valid values:
   * 
   * *   ResourceAccount: resource account
   * *   CloudAccount: cloud account
   * 
   * > You can specify either `NewDisplayName` or `NewAccountType`.
   * 
   * @example
   * ResourceAccount
   */
  newAccountType?: string;
  /**
   * @remarks
   * The new display name of the member.
   * 
   * > You can specify either `NewDisplayName` or `NewAccountType`.
   * 
   * @example
   * admin
   */
  newDisplayName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      dryRun: 'DryRun',
      newAccountType: 'NewAccountType',
      newDisplayName: 'NewDisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      dryRun: 'boolean',
      newAccountType: 'string',
      newDisplayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

