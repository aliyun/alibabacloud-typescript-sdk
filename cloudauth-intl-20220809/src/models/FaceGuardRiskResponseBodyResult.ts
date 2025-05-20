// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceGuardRiskResponseBodyResult extends $dara.Model {
  guardRiskScore?: number;
  riskExtends?: string;
  /**
   * @example
   * ROOT,VPN,HOOK
   */
  riskTags?: string;
  /**
   * @example
   * hk573be80f944d95ac812e019e3655a8
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      guardRiskScore: 'GuardRiskScore',
      riskExtends: 'RiskExtends',
      riskTags: 'RiskTags',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guardRiskScore: 'number',
      riskExtends: 'string',
      riskTags: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

