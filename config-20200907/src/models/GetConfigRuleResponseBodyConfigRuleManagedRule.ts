// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails } from "./GetConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails";


export class GetConfigRuleResponseBodyConfigRuleManagedRule extends $dara.Model {
  /**
   * @remarks
   * The settings of the required input parameters for the managed rule.
   * 
   * @example
   * {}
   */
  compulsoryInputParameterDetails?: { [key: string]: any };
  /**
   * @remarks
   * The description of the managed rule.
   * 
   * @example
   * example-description
   */
  description?: string;
  /**
   * @remarks
   * The identifier of the managed rule.
   * 
   * @example
   * ram-user-mfa-check
   */
  identifier?: string;
  /**
   * @remarks
   * The rule tags.
   */
  labels?: string[];
  /**
   * @remarks
   * The name of the managed rule.
   * 
   * @example
   * example-name
   */
  managedRuleName?: string;
  /**
   * @remarks
   * The settings of the optional input parameters for the managed rule.
   * 
   * @example
   * {}
   */
  optionalInputParameterDetails?: { [key: string]: any };
  /**
   * @remarks
   * The details of the source of the managed rule.
   */
  sourceDetails?: GetConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails[];
  static names(): { [key: string]: string } {
    return {
      compulsoryInputParameterDetails: 'CompulsoryInputParameterDetails',
      description: 'Description',
      identifier: 'Identifier',
      labels: 'Labels',
      managedRuleName: 'ManagedRuleName',
      optionalInputParameterDetails: 'OptionalInputParameterDetails',
      sourceDetails: 'SourceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compulsoryInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      identifier: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      managedRuleName: 'string',
      optionalInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceDetails: { 'type': 'array', 'itemType': GetConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails },
    };
  }

  validate() {
    if(this.compulsoryInputParameterDetails) {
      $dara.Model.validateMap(this.compulsoryInputParameterDetails);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.optionalInputParameterDetails) {
      $dara.Model.validateMap(this.optionalInputParameterDetails);
    }
    if(Array.isArray(this.sourceDetails)) {
      $dara.Model.validateArray(this.sourceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

