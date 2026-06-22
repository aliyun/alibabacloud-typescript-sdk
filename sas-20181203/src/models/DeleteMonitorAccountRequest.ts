// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMonitorAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member account that you want to delete from the Security Center monitoring account list.
   * 
   * > You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the list of member accounts IDs that are managed by Security Center.
   * 
   * This parameter is required.
   * 
   * @example
   * 1840517068******
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

