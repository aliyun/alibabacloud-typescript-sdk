// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRemediationRequest extends $dara.Model {
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
   * For more information about how to obtain the ID of a rule, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-8a973ac2e2be00a2****
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
   * For more information about how to obtain the remediation template configuration, see the `TemplateDefinition` response parameter provided in [ListRemediationTemplates](https://help.aliyun.com/document_detail/416781.html).
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
   * *   OOS: Operation Orchestration Service (official remediation)
   * *   FC: Function Compute (custom remediation)
   * 
   * This parameter is required.
   * 
   * @example
   * OOS
   */
  remediationType?: string;
  /**
   * @remarks
   * The source of remediation. Valid values:
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

