// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRemediationTemplateResponseBodyRemediationTemplates extends $dara.Model {
  /**
   * @remarks
   * The ID of the supported rule template.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-delete-protection-enabled
   */
  managedRuleIdentifier?: string;
  /**
   * @remarks
   * The type of the automatic remediation template. The value is set to OOS.
   * 
   * @example
   * OOS
   */
  remediationType?: string;
  /**
   * @remarks
   * The parameters of the automatic remediation template.
   * 
   * @example
   * {\\"Parameters\\":{\\"regionId\\":{\\"AssociationProperty\\":\\"RegionId\\",\\"CreateDated\\":\\"2023-09-08T16:36:15\\",\\"Default\\":\\"{regionId}\\",\\"Description\\":{\\"en\\":\\"regionId\\",\\"zh-cn\\":\\"regionId\\"},\\"Id\\":538,\\"MaxKeyLength\\":\\"125\\",\\"MaxValueLength\\":\\"255\\",\\"ModifiedDate\\":\\"2023-09-08T16:36:15\\",\\"Name\\":\\"regionId\\",\\"Optional\\":1,\\"TemplateIdentifier\\":\\"ACS-ALB-BulkyEnableDeletionProtection\\",\\"Type\\":\\"String\\",\\"Version\\":\\"LASTEST\\"},\\"loadBalancerIds\\":{\\"CreateDated\\":\\"2023-09-08T16:36:16\\",\\"Default\\":\\"[\\\\\\"{resourceId}\\\\\\"]\\",\\"Description\\":{\\"en\\":\\"loadBalancerIds\\",\\"zh-cn\\":\\"loadBalancerIds\\"},\\"Id\\":539,\\"MaxKeyLength\\":\\"125\\",\\"MaxValueLength\\":\\"255\\",\\"ModifiedDate\\":\\"2023-09-08T16:36:16\\",\\"Name\\":\\"loadBalancerIds\\",\\"Optional\\":1,\\"TemplateIdentifier\\":\\"ACS-ALB-BulkyEnableDeletionProtection\\",\\"Type\\":\\"ARRAY\\",\\"Version\\":\\"LASTEST\\"}}}
   */
  templateDefinition?: string;
  /**
   * @remarks
   * The description of the automatic remediation template.
   * 
   * This parameter is required.
   * 
   * @example
   * 调用接口EnableDeletionProtection，开启ALB实例删除保护，请您知晓风险谨慎操作。
   */
  templateDescription?: string;
  /**
   * @remarks
   * The ID of the automatic remediation template.
   * 
   * @example
   * ACS-ALB-BulkyEnableDeletionProtection
   */
  templateIdentifier?: string;
  /**
   * @remarks
   * The name of the automatic remediation template.
   * 
   * @example
   * 开启ALB实例删除保护
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      remediationType: 'RemediationType',
      templateDefinition: 'TemplateDefinition',
      templateDescription: 'TemplateDescription',
      templateIdentifier: 'TemplateIdentifier',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRuleIdentifier: 'string',
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

export class GetRemediationTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the automatic remediation template.
   */
  remediationTemplates?: GetRemediationTemplateResponseBodyRemediationTemplates[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E232FC35-BD40-51E3-B2EB-09416A234939
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationTemplates: 'RemediationTemplates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationTemplates: { 'type': 'array', 'itemType': GetRemediationTemplateResponseBodyRemediationTemplates },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.remediationTemplates)) {
      $dara.Model.validateArray(this.remediationTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

