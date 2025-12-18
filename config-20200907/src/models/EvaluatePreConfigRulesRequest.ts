// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluatePreConfigRulesRequestResourceEvaluateItemsRules extends $dara.Model {
  /**
   * @remarks
   * The identifier of the evaluation rule.
   * 
   * For more information about how to obtain the identifier of an evaluation rule, see [ListManagedRules](https://help.aliyun.com/document_detail/467810.html).
   * 
   * @example
   * ecs-instance-deletion-protection-enabled
   */
  identifier?: string;
  /**
   * @remarks
   * The input parameters of the evaluation rule.
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
   * @example
   * ResourceLogicId-test
   */
  resourceLogicalId?: string;
  /**
   * @remarks
   * The properties of the resource.
   * 
   * @example
   * {
   *     "ImageId": "ubuntu_18_04_64_20G_alibase_20190624.vhd",
   *     "SecurityGroupId": "sg-bp15ed6xe1yxeycg****",
   *     "HostName": "LocalHostName",
   *     "RegionId": "cn-hangzhou"
   * }
   */
  resourceProperties?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The evaluation rules.
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
   * Specifies whether to enable the managed rule. Valid values:
   * 
   * *   true: enables the managed rule.
   * *   false: does not enable the managed rule. This is the default value.
   * 
   * >  After you create an evaluation rule, a managed rule that has the same settings as the evaluation rule is created. After you create a resource, the managed rule can be used to continuously check the compliance of the resource.
   * 
   * @example
   * false
   */
  enableManagedRules?: boolean;
  /**
   * @remarks
   * The resources that you want to evaluate.
   * 
   * This parameter is required.
   */
  resourceEvaluateItems?: EvaluatePreConfigRulesRequestResourceEvaluateItems[];
  /**
   * @remarks
   * 下一个查询开始Token
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

