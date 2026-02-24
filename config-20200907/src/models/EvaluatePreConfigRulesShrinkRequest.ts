// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluatePreConfigRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable rule templates. Valid values:
   * 
   * - true: enables rule templates.
   * 
   * - false (default): does not enable rule templates.
   * 
   * @example
   * false
   */
  enableManagedRules?: boolean;
  /**
   * @remarks
   * An array that contains the resources that you want to evaluate.
   * 
   * This parameter is required.
   */
  resourceEvaluateItemsShrink?: string;
  /**
   * @remarks
   * The query start token
   * 
   * @example
   * ros
   */
  resourceTypeFormat?: string;
  static names(): { [key: string]: string } {
    return {
      enableManagedRules: 'EnableManagedRules',
      resourceEvaluateItemsShrink: 'ResourceEvaluateItems',
      resourceTypeFormat: 'ResourceTypeFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableManagedRules: 'boolean',
      resourceEvaluateItemsShrink: 'string',
      resourceTypeFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

