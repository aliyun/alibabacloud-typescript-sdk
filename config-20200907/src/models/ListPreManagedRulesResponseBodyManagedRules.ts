// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPreManagedRulesResponseBodyManagedRules extends $dara.Model {
  /**
   * @remarks
   * The details of the required input parameters of the rule.
   * 
   * @example
   * {}
   */
  compulsoryInputParameterDetails?: { [key: string]: any };
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * ram-user-ak-used-expired-check
   */
  configRuleName?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Example description
   */
  description?: string;
  /**
   * @remarks
   * The URL of the topic that describes how the evaluation rule remediates the incompliant configurations.
   * 
   * @example
   * https://example.aliyundoc.com
   */
  helpUrls?: string;
  /**
   * @remarks
   * The identifier of the rule.
   * 
   * @example
   * ecs-instance-deletion-protection-enabled
   */
  identifier?: string;
  /**
   * @remarks
   * The details of the optional input parameters of the rule.
   * 
   * @example
   * {}
   */
  optionalInputParameterDetails?: { [key: string]: any };
  /**
   * @remarks
   * The type of resource.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      compulsoryInputParameterDetails: 'CompulsoryInputParameterDetails',
      configRuleName: 'ConfigRuleName',
      description: 'Description',
      helpUrls: 'HelpUrls',
      identifier: 'Identifier',
      optionalInputParameterDetails: 'OptionalInputParameterDetails',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compulsoryInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      configRuleName: 'string',
      description: 'string',
      helpUrls: 'string',
      identifier: 'string',
      optionalInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
    };
  }

  validate() {
    if(this.compulsoryInputParameterDetails) {
      $dara.Model.validateMap(this.compulsoryInputParameterDetails);
    }
    if(this.optionalInputParameterDetails) {
      $dara.Model.validateMap(this.optionalInputParameterDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

