// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEnrolledAccountResponseBodyProgress extends $dara.Model {
  /**
   * @remarks
   * The name of the baseline item.
   * 
   * @example
   * ACS-BP_ACCOUNT_FACTORY_VPC
   */
  name?: string;
  /**
   * @remarks
   * The status of applying the baseline to the account. Valid values:
   * 
   * *   Pending: The baseline is pending to be applied to the account.
   * *   Running: The baseline is being applied to the account.
   * *   Finished: : The baseline is applied to the account.
   * *   Failed: : The baseline fails to be applied to the account.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

