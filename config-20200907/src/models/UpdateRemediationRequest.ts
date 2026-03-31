// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRemediationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the value, but you must ensure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 2014295338-e7361358-5822-4276-8d30-b5183fac****
   */
  clientToken?: string;
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
   * You can call the [ListRemediations](https://help.aliyun.com/document_detail/270772.html) operation to obtain the ID of the remediation setting.
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
   * The source of the remediation setting. Valid values:
   * 
   * *   ALIYUN: the default remediation setting of Alibaba Cloud.
   * *   CUSTOM: a custom remediation setting.
   * *   NONE: The source is not specified.
   * 
   * @example
   * ALIYUN
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
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
      clientToken: 'string',
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

