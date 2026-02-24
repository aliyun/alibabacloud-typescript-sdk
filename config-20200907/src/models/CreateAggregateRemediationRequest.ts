// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggregateRemediationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-6b4a626622af0012****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * A client token. It is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The `ClientToken` parameter can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  clientToken?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information about how to obtain the rule ID, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-6b7c626622af00b4****
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
   * The parameters of the remediation.
   * 
   * For more information about how to obtain the parameters of the remediation, see the `TemplateDefinition` parameter in [ListRemediationTemplates](https://help.aliyun.com/document_detail/416781.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"bucketName": "{resourceId}", "regionId": "{regionId}", "permissionName": "private"}
   */
  params?: string;
  /**
   * @remarks
   * The remediation template ID.
   * 
   * - If you set `RemediationType` to `OOS`, set this parameter to `ACS-OSS-PutBucketAcl`. For more information about how to obtain the remediation template ID, see [ListRemediationTemplates](https://help.aliyun.com/document_detail/416781.html).
   * 
   * - If you set `RemediationType` to `FC`, set this parameter to the Alibaba Cloud Resource Name (ARN) of the function in Function Compute. Example: `acs:fc:cn-hangzhou:100931896542****:services/ConfigService.LATEST/functions/test-php`.
   * 
   * This parameter is required.
   * 
   * @example
   * ACS-OSS-PutBucketAcl
   */
  remediationTemplateId?: string;
  /**
   * @remarks
   * The remediation type. Valid values:
   * 
   * - OOS: OOS (template-based remediation).
   * 
   * - FC: FC (custom remediation).
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
   * - ALIYUN (default): official template.
   * 
   * - CUSTOM: custom template. This value must be specified for custom FC remediations.
   * 
   * - NONE: none.
   * 
   * @example
   * ALIYUN
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
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
      aggregatorId: 'string',
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

