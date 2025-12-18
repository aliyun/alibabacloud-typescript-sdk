// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRemediationResponseBodyRemediation extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-3184626622af003****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The execution mode of the remediation template. Valid values:
   * 
   * *   NON_EXECUTION: The remediation template was not executed.
   * *   AUTO_EXECUTION: The remediation template was automatically executed.
   * *   MANUAL_EXECUTION: The remediation template was manually executed.
   * *   NOT_CONFIG: The execution mode was not specified.
   * 
   * @example
   * AUTO_EXECUTION
   */
  invokeType?: string;
  /**
   * @remarks
   * The record ID of the last successful execution of the remediation template.
   * 
   * @example
   * bd7629fb-cac8-42fe-bcb1-e362c5a6****
   */
  lastSuccessfulInvocationId?: string;
  /**
   * @remarks
   * The timestamp of the last successful execution of the remediation template. Unit: milliseconds.
   * 
   * @example
   * 1625451393589
   */
  lastSuccessfulInvocationTime?: number;
  /**
   * @remarks
   * The mode of the last successful execution of the remediation template. Valid values:
   * 
   * *   NON_EXECUTION: The remediation template was not executed.
   * *   AUTO_EXECUTION: The remediation template was automatically executed.
   * *   MANUAL_EXECUTION: The remediation template was manually executed.
   * *   NOT_CONFIG: The execution mode was not specified.
   * 
   * @example
   * AUTO_EXECUTION
   */
  lastSuccessfulInvocationType?: string;
  /**
   * @remarks
   * The ID of the remediation configuration.
   * 
   * @example
   * crr-f381cf0c1c2f004e****
   */
  remediationId?: string;
  /**
   * @remarks
   * The converted configuration of the remediation template. This parameter is returned only for an OOS remediation template.
   * 
   * This parameter is required.
   * 
   * @example
   * {"bucketName": "{resourceId}", "regionId": "{regionId}", "permissionName": "private"}
   */
  remediationOriginParams?: string;
  /**
   * @remarks
   * The source of the remediation template. Valid values:
   * 
   * *   ALIYUN: official template
   * *   CUSTOM: custom template
   * *   NONE: none
   * 
   * @example
   * ALIYUN
   */
  remediationSourceType?: string;
  /**
   * @remarks
   * The ID of the remediation template.
   * 
   * @example
   * ACS-OSS-PutBucketAcl
   */
  remediationTemplateId?: string;
  /**
   * @remarks
   * The type of the remediation template. Valid values:
   * 
   * *   OOS: Operation Orchestration Service (official remediation)
   * *   FC: Function Compute (custom remediation)
   * 
   * @example
   * OOS
   */
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
  /**
   * @remarks
   * The details of the remediation configuration.
   */
  remediation?: DescribeRemediationResponseBodyRemediation;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 79BE07A7-46A5-5D3C-B378-0ACDA979****
   */
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

