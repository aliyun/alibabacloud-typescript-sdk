// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRemediationResponseBodyRemediation extends $dara.Model {
  accountId?: number;
  configRuleId?: string;
  invokeType?: string;
  lastSuccessfulInvocationId?: string;
  lastSuccessfulInvocationTime?: number;
  lastSuccessfulInvocationType?: string;
  remediationId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  remediationOriginParams?: string;
  remediationSourceType?: string;
  remediationTemplateId?: string;
  remediationType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      configRuleId: 'ConfigRuleId',
      invokeType: 'InvokeType',
      lastSuccessfulInvocationId: 'LastSuccessfulInvocationId',
      lastSuccessfulInvocationTime: 'LastSuccessfulInvocationTime',
      lastSuccessfulInvocationType: 'LastSuccessfulInvocationType',
      remediationId: 'RemediationId',
      remediationOriginParams: 'RemediationOriginParams',
      remediationSourceType: 'RemediationSourceType',
      remediationTemplateId: 'RemediationTemplateId',
      remediationType: 'RemediationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      configRuleId: 'string',
      invokeType: 'string',
      lastSuccessfulInvocationId: 'string',
      lastSuccessfulInvocationTime: 'number',
      lastSuccessfulInvocationType: 'string',
      remediationId: 'string',
      remediationOriginParams: 'string',
      remediationSourceType: 'string',
      remediationTemplateId: 'string',
      remediationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRemediationResponseBody extends $dara.Model {
  remediation?: DescribeRemediationResponseBodyRemediation;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediation: 'Remediation',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediation: DescribeRemediationResponseBodyRemediation,
      requestId: 'string',
    };
  }

  validate() {
    if(this.remediation && typeof (this.remediation as any).validate === 'function') {
      (this.remediation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

