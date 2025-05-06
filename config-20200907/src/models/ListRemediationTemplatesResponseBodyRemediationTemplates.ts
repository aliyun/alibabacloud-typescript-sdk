// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemediationTemplatesResponseBodyRemediationTemplates extends $dara.Model {
  /**
   * @remarks
   * The type of the remediation template. Valid value: OOS, which indicates Operation Orchestration Service.
   * 
   * @example
   * OOS
   */
  remediationType?: string;
  /**
   * @remarks
   * The definition of the remediation template.
   * 
   * @example
   * {
   *     "Parameters": {
   *         "bucketName": {
   *             "Default": "{resourceId}",
   *             "Description": {
   *                 "zh-cn": "[Required]OSS Bucket Name.",
   *                 "en": "[Required]OSS Bucket Name."
   *             },
   *             "Type": "String"
   *         },
   *         "regionId": {
   *             "AssociationProperty": "RegionId",
   *             "Default": "{regionId}",
   *             "Description": {
   *                 "zh-cn": "[Required]The id of target region.",
   *                 "en": "[Required]The id of target region."
   *             },
   *             "Type": "String"
   *         },
   *         "permissionName": {
   *             "AllowValues": "[\\"public-read-write\\",\\"public-read\\",\\"private\\"]",
   *             "Default": "private",
   *             "Description": {
   *                 "zh-cn": "[Required]ACL Permission Name.",
   *                 "en": "[Required]ACL Permission Name."
   *             },
   *             "Type": "String"
   *         }
   *     }
   * }
   */
  templateDefinition?: string;
  /**
   * @remarks
   * The description of the remediation template.
   * 
   * @example
   * Configure encryption rules for OSSBucket through the PutBucketEncryption interface. Be aware of the risks and exercise caution.
   */
  templateDescription?: string;
  /**
   * @remarks
   * The ID of the remediation template.
   * 
   * @example
   * ACS-OSS-PutBucketAcl
   */
  templateIdentifier?: string;
  /**
   * @remarks
   * The name of the remediation template.
   * 
   * @example
   * Set the ACL of an OSS bucket to private
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      remediationType: 'RemediationType',
      templateDefinition: 'TemplateDefinition',
      templateDescription: 'TemplateDescription',
      templateIdentifier: 'TemplateIdentifier',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationType: 'string',
      templateDefinition: 'string',
      templateDescription: 'string',
      templateIdentifier: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

