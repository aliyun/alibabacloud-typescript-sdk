// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseAccountQueryLoginSettingsResponseBodyDataRiskControlDto extends $dara.Model {
  protectLevel?: string;
  riskControlEnabled?: boolean;
  verifyDetail?: string;
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      protectLevel: 'ProtectLevel',
      riskControlEnabled: 'RiskControlEnabled',
      verifyDetail: 'VerifyDetail',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectLevel: 'string',
      riskControlEnabled: 'boolean',
      verifyDetail: 'string',
      verifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

