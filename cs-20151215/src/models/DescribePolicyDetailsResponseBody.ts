// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The governance action of the rule. Valid values:
   * - `enforce`: Blocks non-compliant deployments.
   * - `inform`: Triggers alerts.
   * 
   * @example
   * enforce
   */
  action?: string;
  /**
   * @remarks
   * The rule templatetype.
   * 
   * @example
   * k8s-general
   */
  category?: string;
  /**
   * @remarks
   * The description of the rule template.
   * 
   * @example
   * Requires container images to begin with a repo string from a specified list
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the rule is deleted. Valid values:
   * - 0: Not deleted.
   * - 1: Deleted.
   * 
   * @example
   * 0
   */
  isDeleted?: number;
  /**
   * @remarks
   * The name of the policy governance rule.
   * 
   * @example
   * ACKAllowedRepos
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether policy configuration is required. Valid values: 
   * - 0: Parameter settings are required.
   * - 1: No parameter settings are required.
   * 
   * @example
   * 0
   */
  noConfig?: number;
  /**
   * @remarks
   * The governance severity of the rule. Valid values:
   * * `high`: High-risk.
   * * `medium`: Medium-risk.
   * * `low`: Low-risk.
   * 
   * @example
   * high
   */
  severity?: string;
  /**
   * @remarks
   * The details of the rule template.
   * 
   * @example
   * For more information, see the request examples
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      category: 'category',
      description: 'description',
      isDeleted: 'is_deleted',
      name: 'name',
      noConfig: 'no_config',
      severity: 'severity',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      category: 'string',
      description: 'string',
      isDeleted: 'number',
      name: 'string',
      noConfig: 'number',
      severity: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

