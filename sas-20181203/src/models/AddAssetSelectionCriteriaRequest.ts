// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddAssetSelectionCriteriaRequestTargetOperationList extends $dara.Model {
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - **add**: adds the asset.
   * - **del**: deletes the asset.
   * 
   * @example
   * del
   */
  operation?: string;
  /**
   * @remarks
   * The asset ID. If you select assets by machine, the value is the UUID of the machine. If you select assets by group, the value is the group ID. If you select assets by VPC, the value is the VPC ID.
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
   * The client token that is used to ensure the idempotence of the request. Different requests should use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The conditions for searching assets. This parameter is in JSON format. Pay attention to the letter case when you specify this parameter.
   * > You can search for assets by instance ID, instance name, VPC ID, region, public IP address, and other conditions. Call the [DescribeCriteria](~~DescribeCriteria~~) operation to query the supported search conditions.
   * 
   * @example
   * {"LogicalExp":"AND","Criteria":"[{\\"name\\":\\"osType\\",\\"value\\":\\"linux\\",\\"logicalExp\\":\\"AND\\"},{\\"name\\":\\"alarmStatus\\",\\"value\\":\\"YES\\",\\"logicalExp\\":\\"AND\\"}]"}
   */
  criteria?: string;
  /**
   * @remarks
   * The operation type for criteria. Valid values:
   * 
   * - **add**: adds assets.
   * - **del**: deletes assets.
   * 
   * @example
   * add
   */
  criteriaOperation?: string;
  /**
   * @remarks
   * The unique identifier of the asset selection.
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
      clientToken: 'ClientToken',
      criteria: 'Criteria',
      criteriaOperation: 'CriteriaOperation',
      selectionKey: 'SelectionKey',
      targetOperationList: 'TargetOperationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

