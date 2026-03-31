// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateRemediationsResponseBodyRemediations extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The ID of the account group.
   * 
   * @example
   * ca-6b4a626622af0012****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-6b7c626622af00b4****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The execution mode of the remediation template. Valid values:
   * 
   * *   NON_EXECUTION: The remediation template is not executed.
   * *   AUTO_EXECUTION: The remediation template is automatically executed.
   * *   MANUAL_EXECUTION: The remediation template is manually executed.
   * *   NOT_CONFIG: The execution mode is not specified.
   * 
   * @example
   * AUTO_EXECUTION
   */
  invokeType?: string;
  /**
   * @remarks
   * The ID of the last successful execution of the remediation template.
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
   * *   NON_EXECUTION: The remediation template is not executed.
   * *   AUTO_EXECUTION: The remediation template is automatically executed.
   * *   MANUAL_EXECUTION: The remediation template is manually executed.
   * *   NOT_CONFIG: The execution mode is not specified.
   * 
   * @example
   * AUTO_EXECUTION
   */
  lastSuccessfulInvocationType?: string;
  /**
   * @remarks
   * The converted configuration of the remediation template. This parameter is returned only for an OOS remediation template.
   * 
   * @example
   * {"bucketName": "{resourceId}", "regionId": "{regionId}", "permissionName": "private"}
   */
  remediaitonOriginParams?: string;
  /**
   * @remarks
   * The ID of the remediation template.
   * 
   * @example
   * crr-6b7c626622af0026****
   */
  remediationId?: string;
  /**
   * @remarks
   * The source of remediation template. Valid values:
   * 
   * *   ALIYUN: official template.
   * *   CUSTOM: custom template.
   * *   NONE: none.
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
   * *   OOS: Operation Orchestration Service (official remediation).
   * *   FC: Function Compute (custom remediation).
   * 
   * @example
   * OOS
   */
  remediationType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      invokeType: 'InvokeType',
      lastSuccessfulInvocationId: 'LastSuccessfulInvocationId',
      lastSuccessfulInvocationTime: 'LastSuccessfulInvocationTime',
      lastSuccessfulInvocationType: 'LastSuccessfulInvocationType',
      remediaitonOriginParams: 'RemediaitonOriginParams',
      remediationId: 'RemediationId',
      remediationSourceType: 'RemediationSourceType',
      remediationTemplateId: 'RemediationTemplateId',
      remediationType: 'RemediationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      aggregatorId: 'string',
      configRuleId: 'string',
      invokeType: 'string',
      lastSuccessfulInvocationId: 'string',
      lastSuccessfulInvocationTime: 'number',
      lastSuccessfulInvocationType: 'string',
      remediaitonOriginParams: 'string',
      remediationId: 'string',
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

export class ListAggregateRemediationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that contains remediation templates.
   */
  remediations?: ListAggregateRemediationsResponseBodyRemediations[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0146963A-20C0-4E75-B93A-7D622B5FD7C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediations: 'Remediations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediations: { 'type': 'array', 'itemType': ListAggregateRemediationsResponseBodyRemediations },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.remediations)) {
      $dara.Model.validateArray(this.remediations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

