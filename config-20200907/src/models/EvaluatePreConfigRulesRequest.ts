// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluatePreConfigRulesRequestResourceEvaluateItemsRules extends $dara.Model {
  /**
   * @remarks
   * The identifier of the rule.
   * 
   * For information about how to obtain the identifier of a rule, see [ListPreManagedRules](https://help.aliyun.com/document_detail/467810.html).
   * 
   * > The `ResourceType`, `Identifier`, and `ResourceProperties` parameters must be specified at the same time.
   * 
   * @example
   * ecs-instance-deletion-protection-enabled
   */
  identifier?: string;
  /**
   * @remarks
   * The input parameters of the rule.
   * 
   * @example
   * {}
   */
  inputParameters?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      inputParameters: 'InputParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      inputParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluatePreConfigRulesRequestResourceEvaluateItems extends $dara.Model {
  /**
   * @remarks
   * The logical ID of the resource.
   * 
   * > If this parameter is empty, it is generated based on the Base64 value of `ResourceProperties`.
   * 
   * @example
   * ResourceLogicId-test
   */
  resourceLogicalId?: string;
  /**
   * @remarks
   * The resource configuration items (properties of the resource to be created), such as the specifications, region, name, status, and port or network interface switch status of the resource.
   * 
   * > The `ResourceType`, `Identifier`, and `ResourceProperties` parameters must be specified at the same time.
   * 
   * @example
   * {"ResourceGroupId":"","Memory":8192,"InstanceChargeType":"PostPaid","Cpu":2}
   */
  resourceProperties?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * For information about how to obtain the identifier of an evaluation rule, see [ListPreManagedRules](https://help.aliyun.com/document_detail/467810.html).
   * 
   * > The `ResourceType`, `Identifier`, and `ResourceProperties` parameters must be specified at the same time.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * An array that contains the evaluation rules.
   */
  rules?: EvaluatePreConfigRulesRequestResourceEvaluateItemsRules[];
  static names(): { [key: string]: string } {
    return {
      resourceLogicalId: 'ResourceLogicalId',
      resourceProperties: 'ResourceProperties',
      resourceType: 'ResourceType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceLogicalId: 'string',
      resourceProperties: 'string',
      resourceType: 'string',
      rules: { 'type': 'array', 'itemType': EvaluatePreConfigRulesRequestResourceEvaluateItemsRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluatePreConfigRulesRequest extends $dara.Model {
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
  resourceEvaluateItems?: EvaluatePreConfigRulesRequestResourceEvaluateItems[];
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
      resourceEvaluateItems: 'ResourceEvaluateItems',
      resourceTypeFormat: 'ResourceTypeFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableManagedRules: 'boolean',
      resourceEvaluateItems: { 'type': 'array', 'itemType': EvaluatePreConfigRulesRequestResourceEvaluateItems },
      resourceTypeFormat: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceEvaluateItems)) {
      $dara.Model.validateArray(this.resourceEvaluateItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

