// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails } from "./GetAggregateConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails";


export class GetAggregateConfigRuleResponseBodyConfigRuleManagedRule extends $dara.Model {
  /**
   * @remarks
   * The required input parameters of the managed rule.
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
   * The description of the managed rule.
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
   * The tags of the managed rule.
   */
  labels?: string[];
  /**
   * @remarks
   * The name of the managed rule.
   * 
   * @example
   * ram-user-mfa-check
   */
  managedRuleName?: string;
  /**
   * @remarks
   * The optional input parameters of the managed rule.
   * 
   * @example
   * {}
   */
  optionalInputParameterDetails?: { [key: string]: any };
  /**
   * @remarks
   * The details of the source of the managed rule.
   */
  sourceDetails?: GetAggregateConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails[];
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
      sourceDetails: { 'type': 'array', 'itemType': GetAggregateConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails },
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

