// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddAssetSelectionCriteriaRequestTargetOperationList extends $dara.Model {
  /**
   * @remarks
   * The type of the operation. Valid values:
   * 
   * *   **add**
   * *   **del**
   * 
   * @example
   * del
   */
  operation?: string;
  /**
   * @remarks
   * The ID of the asset.
   * 
   * @example
   * 1188****
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAssetSelectionCriteriaRequest extends $dara.Model {
  /**
   * @remarks
   * The search conditions that are used to query assets. The value of this parameter is in the JSON format and is case-sensitive.
   * 
   * > A search condition can be an instance ID, instance name, virtual private cloud (VPC) ID, region, or public IP address. You can call the [DescribeCriteria](~~DescribeCriteria~~) operation to query the supported search conditions.
   * 
   * @example
   * {"LogicalExp":"AND","Criteria":"[{\\"name\\":\\"osType\\",\\"value\\":\\"linux\\",\\"logicalExp\\":\\"AND\\"},{\\"name\\":\\"alarmStatus\\",\\"value\\":\\"YES\\",\\"logicalExp\\":\\"AND\\"}]"}
   */
  criteria?: string;
  /**
   * @remarks
   * The type of the operation on search conditions. Valid values:
   * 
   * *   **add**: adds assets.
   * *   **del**: deletes assets.
   * 
   * @example
   * add
   */
  criteriaOperation?: string;
  /**
   * @remarks
   * The unique ID of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 5196d280-5bfa-496a-ba70-8a3935e3****
   */
  selectionKey?: string;
  /**
   * @remarks
   * The list of assets.
   */
  targetOperationList?: AddAssetSelectionCriteriaRequestTargetOperationList[];
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      criteriaOperation: 'CriteriaOperation',
      selectionKey: 'SelectionKey',
      targetOperationList: 'TargetOperationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      criteriaOperation: 'string',
      selectionKey: 'string',
      targetOperationList: { 'type': 'array', 'itemType': AddAssetSelectionCriteriaRequestTargetOperationList },
    };
  }

  validate() {
    if(Array.isArray(this.targetOperationList)) {
      $dara.Model.validateArray(this.targetOperationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

