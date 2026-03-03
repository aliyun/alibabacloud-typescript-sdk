// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable monthly auto-renewal. The default value is false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  If you enable auto-renewal for an instance for which auto-renewal is enabled, an error is reported.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The renewal duration. Unit: month.
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

