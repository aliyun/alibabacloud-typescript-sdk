// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseAccountQueryLoginSettingsResponseBodyDataIpMaskDto extends $dara.Model {
  ipMaskEnabledStatus?: string;
  ipMasks?: string[];
  static names(): { [key: string]: string } {
    return {
      ipMaskEnabledStatus: 'IpMaskEnabledStatus',
      ipMasks: 'IpMasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipMaskEnabledStatus: 'string',
      ipMasks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipMasks)) {
      $dara.Model.validateArray(this.ipMasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class EnterpriseAccountQueryLoginSettingsResponseBody extends $dara.Model {
  code?: string;
  data?: EnterpriseAccountQueryLoginSettingsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EnterpriseAccountQueryLoginSettingsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

