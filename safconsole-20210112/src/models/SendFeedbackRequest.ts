// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendFeedbackRequest extends $dara.Model {
  reason?: string;
  /**
   * @remarks
   * Sample labels. User-defined, separated by commas.
   * 
   * @example
   * OTHERS
   */
  riskLabel?: string;
  /**
   * @remarks
   * Sample type. For phone number type samples, input PHONE; for email type samples, input EMAIL; for account type samples, input ACCOUNT.
   * 
   * This parameter is required.
   * 
   * @example
   * PHONE
   */
  sampleType?: string;
  /**
   * @remarks
   * Sample value.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000000000
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      riskLabel: 'RiskLabel',
      sampleType: 'SampleType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      riskLabel: 'string',
      sampleType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

