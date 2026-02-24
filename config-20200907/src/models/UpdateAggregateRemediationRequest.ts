// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAggregateRemediationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
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
   * - NON_EXECUTION: The remediation is not executed.
   * 
   * - AUTO_EXECUTION: The remediation is automatically executed.
   * 
   * - MANUAL_EXECUTION: The remediation is manually executed.
   * 
   * - NOT_CONFIG: The execution mode is not specified.
   * 
   * @example
   * AUTO_EXECUTION
   */
  invokeType?: string;
  /**
   * @remarks
   * The parameters of the remediation setting.
   * 
   * @example
   * {"properties":[{"name":"regionId","type":"STRING","value":"{regionId}","allowedValues":[]},{"name":"bucketName","type":"STRING","value":"{resourceId}","allowedValues":[],"description":"OSS Bucket名称。"},{"name":"permissionName","type":"STRING","value":"private","allowedValues":["public-read-write","public-read","private"],"description":"ACL权限名称。"}]}
   */
  params?: string;
  /**
   * @remarks
   * The ID of the remediation setting.
   * 
   * For more information, see [ListAggregateRemediations](https://help.aliyun.com/document_detail/270036.html).
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
   * For more information, see [ListRemediationTemplates](https://help.aliyun.com/document_detail/270066.html).
   * 
   * @example
   * ACS-OSS-PutBucketAcl
   */
  remediationTemplateId?: string;
  /**
   * @remarks
   * The type of the remediation. Valid values:
   * 
   * - OOS: Operation Orchestration Service (OOS) (template-based remediation).
   * 
   * - FC: Function Compute (FC) (custom remediation).
   * 
   * @example
   * OOS
   */
  remediationType?: string;
  /**
   * @remarks
   * The source of the rule for which the remediation is performed. Valid values:
   * 
   * - ALIYUN: rule template.
   * 
   * - CUSTOM: custom remediation.
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

