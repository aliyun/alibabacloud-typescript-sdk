// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateApplicationRequestContainerWebDefenseApplicationDTOS extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to which the container belongs.
   * 
   * >  You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ceb68cc58234141828677e383bd21ff0c
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to apply the configuration to the asset. Valid values:
   * 
   * *   **add**: applied
   * *   **del**: not applied
   * 
   * This parameter is required.
   * 
   * @example
   * add
   */
  flag?: string;
  /**
   * @remarks
   * The application ID. If the application is newly added, you do not need to specify this parameter.
   * 
   * @example
   * 196
   */
  id?: number;
  /**
   * @remarks
   * The value of the application tag.
   * 
   * This parameter is required.
   * 
   * @example
   * app:app-003
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      flag: 'Flag',
      id: 'Id',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      flag: 'string',
      id: 'number',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The container application that is protected from being tampered with.
   * 
   * This parameter is required.
   */
  containerWebDefenseApplicationDTOS?: OperateApplicationRequestContainerWebDefenseApplicationDTOS[];
  /**
   * @remarks
   * The ID of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 300566
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      containerWebDefenseApplicationDTOS: 'ContainerWebDefenseApplicationDTOS',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerWebDefenseApplicationDTOS: { 'type': 'array', 'itemType': OperateApplicationRequestContainerWebDefenseApplicationDTOS },
      ruleId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.containerWebDefenseApplicationDTOS)) {
      $dara.Model.validateArray(this.containerWebDefenseApplicationDTOS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

