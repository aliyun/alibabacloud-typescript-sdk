// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPreManagedRulesResponseBodyManagedRules extends $dara.Model {
  /**
   * @remarks
   * The details of the required input parameters for the rule.
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
   * ECS实例开启释放保护
   */
  configRuleName?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * ECS实例开启释放保护，视为“合规”。
   */
  description?: string;
  /**
   * @remarks
   * The URL of the documentation that provides guidance on how to fix a non-compliant resource.
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
   * The details of the optional input parameters for the rule.
   * 
   * @example
   * {}
   */
  optionalInputParameterDetails?: { [key: string]: any };
  /**
   * @remarks
   * The resource type.
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

export class ListPreManagedRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of proactive rules.
   */
  managedRules?: ListPreManagedRulesResponseBodyManagedRules[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A2A9F1BE-0712-1B26-9899-D82F7DA8476C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      managedRules: 'ManagedRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRules: { 'type': 'array', 'itemType': ListPreManagedRulesResponseBodyManagedRules },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.managedRules)) {
      $dara.Model.validateArray(this.managedRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

