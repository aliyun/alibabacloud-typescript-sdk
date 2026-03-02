// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSettledsRequest extends $dara.Model {
  /**
   * @example
   * 273803534812230281
   */
  accountId?: string;
  /**
   * @example
   * 223352752411587433
   */
  applicant?: string;
  enterpriseName?: string;
  /**
   * @example
   * 3
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      applicant: 'applicant',
      enterpriseName: 'enterpriseName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      applicant: 'string',
      enterpriseName: 'string',
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

