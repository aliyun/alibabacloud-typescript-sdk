// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAggregateRemediationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * You can the [ListAggregators](https://help.aliyun.com/document_detail/255797.html) operation to obtain the ID of the account group.
   * 
   * This parameter is required.
   * 
   * @example
   * ca-6b4a626622af0012****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The execution mode of the remediation. Valid values:
   * 
   * *   NON_EXECUTION: The remediation is not executed.
   * *   AUTO_EXECUTION: The remediation is automatically executed.
   * *   MANUAL_EXECUTION: The remediation is manually executed.
   * *   NOT_CONFIG: The execution mode is not specified.
   * 
   * @example
   * AUTO_EXECUTION
   */
  invokeType?: string;
  /**
   * @remarks
   * The desired parameter values of the remediation setting.
   * 
   * @example
   * {"properties":[{"name":"regionId","type":"STRING","value":"{regionId}","allowedValues":[]},{"name":"bucketName","type":"STRING","value":"{resourceId}","allowedValues":[],"description":"OSS Bucket Name."},{"name":"permissionName","type":"STRING","value":"private","allowedValues":["public-read-write","public-read","private"],"description":"ACL Permission Name."}]}
   */
  params?: string;
  /**
   * @remarks
   * The ID of the remediation setting.
   * 
   * You can call the [ListAggregateRemediations](https://help.aliyun.com/document_detail/270036.html) operation to obtain the ID of the remediation setting.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-909ba2d4716700eb****
   */
  remediationId?: string;
  /**
   * @remarks
   * The ID of the remediation template.
   * 
   * You can call the [ListRemediationTemplates](https://help.aliyun.com/document_detail/270066.html) operation to obtain the ID of the remediation template.
   * 
   * @example
   * ACS-OSS-PutBucketAcl
   */
  remediationTemplateId?: string;
  /**
   * @remarks
   * The type of the remediation template. Valid values:
   * 
   * *   OOS: Operation Orchestration Service (OOS)
   * *   FC: Function Compute. You can use Function Compute to configure custom remediation settings.
   * 
   * @example
   * OOS
   */
  remediationType?: string;
  /**
   * @remarks
   * The type of the rule for which the remediation template is configured. Valid values:
   * 
   * *   ALIYUN: managed rule.
   * *   CUSTOM: custom rule.
   * *   NONE: The rule is not specified.
   * 
   * @example
   * ALIYUN
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      invokeType: 'InvokeType',
      params: 'Params',
      remediationId: 'RemediationId',
      remediationTemplateId: 'RemediationTemplateId',
      remediationType: 'RemediationType',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      invokeType: 'string',
      params: 'string',
      remediationId: 'string',
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

