// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The action of the policy. Valid values:
   * 
   * *   `enforce`: blocks deployments that match the policy.
   * *   `inform`: generates alerts for deployments that match the policy.
   * 
   * @example
   * enforce
   */
  action?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * k8s-general
   */
  category?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * Requires container images to begin with a repo string from a specified list
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the policy is deleted. Valid values:
   * 
   * *   0: The policy is not deleted.
   * *   1: The policy is deleted.
   * 
   * @example
   * 0
   */
  isDeleted?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * ACKAllowedRepos
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether parameters are required. Valid values:
   * 
   * *   0: Parameters are required.
   * *   1: Parameters are optional.
   * 
   * @example
   * 0
   */
  noConfig?: number;
  /**
   * @remarks
   * The severity level of the policy. Valid values:
   * 
   * *   `high`
   * *   `medium`
   * *   `low`
   * 
   * @example
   * high
   */
  severity?: string;
  /**
   * @remarks
   * The content of the policy.
   * 
   * @example
   * For more information, see sample requests.
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

