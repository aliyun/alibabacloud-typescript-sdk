// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnterpriseAccountQueryLoginSettingsResponseBodyDataIpMaskDto } from "./EnterpriseAccountQueryLoginSettingsResponseBodyDataIpMaskDto";
import { EnterpriseAccountQueryLoginSettingsResponseBodyDataRiskControlDto } from "./EnterpriseAccountQueryLoginSettingsResponseBodyDataRiskControlDto";


export class EnterpriseAccountQueryLoginSettingsResponseBodyData extends $dara.Model {
  ipMaskDto?: EnterpriseAccountQueryLoginSettingsResponseBodyDataIpMaskDto;
  mfaBindStatus?: string;
  riskControlDto?: EnterpriseAccountQueryLoginSettingsResponseBodyDataRiskControlDto;
  securityMobileLoginStatus?: string;
  sessionExpireTime?: number;
  static names(): { [key: string]: string } {
    return {
      ipMaskDto: 'IpMaskDto',
      mfaBindStatus: 'MfaBindStatus',
      riskControlDto: 'RiskControlDto',
      securityMobileLoginStatus: 'SecurityMobileLoginStatus',
      sessionExpireTime: 'SessionExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipMaskDto: EnterpriseAccountQueryLoginSettingsResponseBodyDataIpMaskDto,
      mfaBindStatus: 'string',
      riskControlDto: EnterpriseAccountQueryLoginSettingsResponseBodyDataRiskControlDto,
      securityMobileLoginStatus: 'string',
      sessionExpireTime: 'number',
    };
  }

  validate() {
    if(this.ipMaskDto && typeof (this.ipMaskDto as any).validate === 'function') {
      (this.ipMaskDto as any).validate();
    }
    if(this.riskControlDto && typeof (this.riskControlDto as any).validate === 'function') {
      (this.riskControlDto as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

