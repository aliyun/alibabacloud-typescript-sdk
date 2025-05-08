// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBucketLifecycleResponseBodyRuleExpiration extends $dara.Model {
  /**
   * @remarks
   * The expiration date.
   * 
   * @example
   * yyy-MM-DDThh:mm:ssZ
   */
  createdBeforeDate?: string;
  /**
   * @remarks
   * The validity period, in days.
   * 
   * @example
   * 5
   */
  days?: string;
  static names(): { [key: string]: string } {
    return {
      createdBeforeDate: 'CreatedBeforeDate',
      days: 'Days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBeforeDate: 'string',
      days: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

