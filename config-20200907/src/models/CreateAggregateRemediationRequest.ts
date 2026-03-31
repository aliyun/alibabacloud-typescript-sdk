// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggregateRemediationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of the account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-6b4a626622af0012****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The `token` can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  clientToken?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information about how to obtain the ID of a rule, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * MANUAL_EXECUTION
   */
  invokeType?: string;
  /**
   * @remarks
   * The configuration of the remediation template.
   * 
   * For more information about how to obtain the configuration of the remediation template, see [ListRemediationTemplates](https://help.aliyun.com/document_detail/416781.html). You can view the `TemplateDefinition` response parameter to obtain the configuration of the remediation template.
   * 
   * This parameter is required.
   * 
   * @example
   * {"bucketName": "{resourceId}", "regionId": "{regionId}", "permissionName": "private"}
   */
  params?: string;
  /**
   * @remarks
   * The ID of the remediation template.
   * 
   * *   If you set the `RemediationType` parameter to `OOS`, set this parameter to the identifier of the relevant official remediation template, such as `ACS-OSS-PutBucketAcl`. For more information about how to obtain the remediation template identifier, see [ListRemediationTemplates](https://help.aliyun.com/document_detail/416781.html).
   * *   If you set the `RemediationType` parameter to `FC`, set this parameter to the Alibaba Cloud Resource Name (ARN) of the relevant Function Compute resource, such as `acs:fc:cn-hangzhou:100931896542****:services/ConfigService.LATEST/functions/test-php`.
   * 
   * This parameter is required.
   * 
   * @example
   * ACS-OSS-PutBucketAcl
   */
  remediationTemplateId?: string;
  /**
   * @remarks
   * The type of the remediation template. Valid values:
   * 
   * *   OOS: stands for Operation Orchestration Service and indicates official remediation.
   * *   FC: stands for Function Compute and indicates custom remediation.
   * 
   * This parameter is required.
   * 
   * @example
   * OOS
   */
  remediationType?: string;
  /**
   * @remarks
   * The source of remediation template. Valid values:
   * 
   * *   ALIYUN (default): official template.
   * *   CUSTOM: custom template.
   * *   NONE: none.
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

