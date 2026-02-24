// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRemediationRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. The token must be unique for each request. The `ClientToken` parameter contains only ASCII characters and must not exceed 64 characters in length.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  clientToken?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-8a973ac2e2be00a2****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The execution mode of the remediation. Valid values:
   * 
   * - NON_EXECUTION: The remediation is not executed.
   * 
   * - AUTO_EXECUTION: The remediation is automatically executed.
   * 
   * - MANUAL_EXECUTION: The remediation is manually executed.
   * 
   * - NOT_CONFIG: The execution mode is not set.
   * 
   * This parameter is required.
   * 
   * @example
   * MANUAL_EXECUTION
   */
  invokeType?: string;
  /**
   * @remarks
   * The remediation parameters.
   * 
   * For more information, see the `TemplateDefinition` parameter in [ListRemediationTemplates](https://help.aliyun.com/document_detail/416781.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"bucketName": "{resourceId}", "regionId": "{regionId}", "permissionName": "private"}
   * 
   * **if can be null:**
   * true
   */
  params?: string;
  /**
   * @remarks
   * The ID of the remediation template.
   * 
   * - If `RemediationType` is set to `OOS`, set this parameter to `ACS-OSS-PutBucketAcl`. For more information, see [ListRemediationTemplates](https://help.aliyun.com/document_detail/416781.html).
   * 
   * - If `RemediationType` is set to `FC`, set this parameter to the Alibaba Cloud Resource Name (ARN) of the function in Function Compute. Example: `acs:fc:cn-hangzhou:100931896542****:services/ConfigService.LATEST/functions/test-php`.
   * 
   * This parameter is required.
   * 
   * @example
   * ACS-OSS-PutBucketAcl
   */
  remediationTemplateId?: string;
  /**
   * @remarks
   * The type of the remediation. Valid values:
   * 
   * - OOS: template-based remediation using OOS.
   * 
   * - FC: custom remediation using FC.
   * 
   * This parameter is required.
   * 
   * @example
   * OOS
   */
  remediationType?: string;
  /**
   * @remarks
   * The source of the remediation template. Valid values:
   * 
   * - ALIYUN (default): an official template.
   * 
   * - CUSTOM: a custom template. This value is required for custom FC remediations.
   * 
   * - NONE: no source.
   * 
   * @example
   * ALIYUN
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configRuleId: 'ConfigRuleId',
      invokeType: 'InvokeType',
      params: 'Params',
      remediationTemplateId: 'RemediationTemplateId',
      remediationType: 'RemediationType',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configRuleId: 'string',
      invokeType: 'string',
      params: 'string',
      remediationTemplateId: 'string',
      remediationType: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

