// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundPreCalV2ResponseBodyModuleRefundReasonOptionDTOS extends $dara.Model {
  reason?: string;
  /**
   * @example
   * 2
   */
  reasonType?: number;
  /**
   * @example
   * true
   */
  volunteer?: boolean;
  static names(): { [key: string]: string } {
    return {
      reason: 'reason',
      reasonType: 'reason_type',
      volunteer: 'volunteer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      reasonType: 'number',
      volunteer: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

