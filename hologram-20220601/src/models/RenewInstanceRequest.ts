// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable monthly auto-renewal. By default, monthly auto-renewal is disabled. Valid values:
   * - true: enables monthly auto-renewal.
   * - false: does not enable monthly auto-renewal.
   * 
   * > If you enable auto-renewal for an instance that already has auto-renewal enabled, an error is reported.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The renewal period. Unit: months.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'autoRenew',
      duration: 'duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

