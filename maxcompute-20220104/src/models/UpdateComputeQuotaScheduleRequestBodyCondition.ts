// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeQuotaScheduleRequestBodyCondition extends $dara.Model {
  /**
   * @remarks
   * The start time when the quota plan takes effect.
   * 
   * This parameter is required.
   * 
   * @example
   * 10:00
   */
  at?: string;
  static names(): { [key: string]: string } {
    return {
      at: 'at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      at: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

