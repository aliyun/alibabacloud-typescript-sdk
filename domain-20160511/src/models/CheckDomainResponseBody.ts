// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDomainResponseBody extends $dara.Model {
  avail?: number;
  feeCommand?: string;
  feeCurrency?: string;
  feeFee?: string;
  feePeriod?: number;
  name?: string;
  reason?: string;
  requestId?: string;
  rmbFee?: string;
  static names(): { [key: string]: string } {
    return {
      avail: 'Avail',
      feeCommand: 'FeeCommand',
      feeCurrency: 'FeeCurrency',
      feeFee: 'FeeFee',
      feePeriod: 'FeePeriod',
      name: 'Name',
      reason: 'Reason',
      requestId: 'RequestId',
      rmbFee: 'RmbFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avail: 'number',
      feeCommand: 'string',
      feeCurrency: 'string',
      feeFee: 'string',
      feePeriod: 'number',
      name: 'string',
      reason: 'string',
      requestId: 'string',
      rmbFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

