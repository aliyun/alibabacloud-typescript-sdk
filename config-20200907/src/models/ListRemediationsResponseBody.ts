// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemediationsResponseBodyRemediations extends $dara.Model {
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
   * The ID of the last successful execution of the remediation template.
   * 
   * @example
   * bd7629fb-cac8-42fe-bcb1-e362c5a6****
   */
  lastSuccessfulInvocationId?: string;
  /**
   * @remarks
   * The timestamp of the last successful execution of the remediation template Unit: milliseconds.
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
   * The ID of the remediation template.
   * 
   * @example
   * crr-6b7c626622af0026****
   */
  remediationId?: string;
  /**
   * @remarks
   * The converted configuration of the remediation template. This parameter is available only for an OOS remediation template.
   * 
   * @example
   * {"bucketName": "{resourceId}", "regionId": "{regionId}", "permissionName": "private"}
   */
  remediationOriginParams?: string;
  /**
   * @remarks
   * The source of remediation. Valid values:
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

export class ListRemediationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The converted configuration of the remediation template. This parameter is returned only for an OOS remediation template.
   */
  remediations?: ListRemediationsResponseBodyRemediations[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0146963A-20C0-4E75-B93A-7D622B5FD7C8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of remediation settings.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remediations: 'Remediations',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      remediations: { 'type': 'array', 'itemType': ListRemediationsResponseBodyRemediations },
      requestId: 'string',
      totalCount: 'string',
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

