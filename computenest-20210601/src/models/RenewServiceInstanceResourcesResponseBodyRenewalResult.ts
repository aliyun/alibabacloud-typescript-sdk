// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewServiceInstanceResourcesResponseBodyRenewalResult extends $dara.Model {
  /**
   * @remarks
   * Number of failed renewals.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * Number of successfully renewed resources.
   * 
   * @example
   * 9
   */
  succeeded?: number;
  /**
   * @remarks
   * Number of renewed resources.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      succeeded: 'Succeeded',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      succeeded: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

