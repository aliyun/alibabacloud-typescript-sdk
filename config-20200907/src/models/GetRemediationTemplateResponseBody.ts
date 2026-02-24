// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRemediationTemplateResponseBodyRemediationTemplates extends $dara.Model {
  /**
   * @remarks
   * The identifier of the supported rule template.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-delete-protection-enabled
   */
  managedRuleIdentifier?: string;
  /**
   * @remarks
   * The type of the automatic remediation template. Valid value: OOS (Operation Orchestration).
   * 
   * @example
   * OOS
   */
  remediationType?: string;
  /**
   * @remarks
   * The definition of the template parameters.
   * 
   * @example
   * {\\"Parameters\\":{\\"regionId\\":{\\"AllowValues\\":\\"\\",\\"AssociationProperty\\":\\"RegionId\\",\\"CreateDated\\":\\"2025-08-04T09:54:57\\",\\"Default\\":\\"{regionId}\\",\\"Description\\":{\\"en\\":\\"regionId\\",\\"zh-cn\\":\\"regionId\\"},\\"Id\\":688,\\"MaxKeyLength\\":\\"125\\",\\"MaxValueLength\\":\\"255\\",\\"ModifiedDate\\":\\"2025-08-04T09:54:57\\",\\"Name\\":\\"regionId\\",\\"Optional\\":1,\\"TemplateIdentifier\\":\\"ACS-ALB-BulkyEnableDeletionProtection\\",\\"Type\\":\\"String\\",\\"Version\\":\\"LASTEST\\"},\\"loadBalancerIds\\":{\\"AllowValues\\":\\"\\",\\"AssociationProperty\\":\\"\\",\\"CreateDated\\":\\"2025-08-04T09:54:57\\",\\"Default\\":\\"[\\\\\\"{resourceId}\\\\\\"]\\",\\"Description\\":{\\"en\\":\\"loadBalancerIds\\",\\"zh-cn\\":\\"loadBalancerIds\\"},\\"Id\\":689,\\"MaxKeyLength\\":\\"125\\",\\"MaxValueLength\\":\\"255\\",\\"ModifiedDate\\":\\"2025-08-04T09:54:57\\",\\"Name\\":\\"loadBalancerIds\\",\\"Optional\\":1,\\"TemplateIdentifier\\":\\"ACS-ALB-BulkyEnableDeletionProtection\\",\\"Type\\":\\"ARRAY\\",\\"Version\\":\\"LASTEST\\"}}}
   */
  templateDefinition?: string;
  /**
   * @remarks
   * The description of the automatic remediation template.
   * 
   * This parameter is required.
   * 
   * @example
   * Call the EnableDeletionProtection interface to enable ALB instance deletion protection. Be aware of the risks and exercise caution.
   */
  templateDescription?: string;
  /**
   * @remarks
   * The identifier of the automatic remediation template.
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
   * Enable ALB instance deletion protection
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
   * E232FC35-BD40-51E3-B2EB-09416A23****
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

