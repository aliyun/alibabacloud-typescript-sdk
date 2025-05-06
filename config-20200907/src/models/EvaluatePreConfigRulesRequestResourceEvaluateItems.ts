// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EvaluatePreConfigRulesRequestResourceEvaluateItemsRules } from "./EvaluatePreConfigRulesRequestResourceEvaluateItemsRules";


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

