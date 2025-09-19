// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCheckInstanceResultWhiteListRequestInstanceList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * >  You can call the [ListCheckInstanceResult](~~ListCheckInstanceResult~~) operation to query the instance IDs of assets.
   * 
   * @example
   * i-wz9fdluqx20mp2x7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * >  You can call the [ListCheckInstanceResult](~~ListCheckInstanceResult~~) operation to query the region ID of the asset.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCheckInstanceResultWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the group to which the check item belongs.
   * 
   * @example
   * cQFq20UzZ49K6gRSJD1301****
   */
  checkGroupId?: string;
  /**
   * @remarks
   * The ID of the check item.
   * 
   * >  You can call the [ListCheckResult](~~ListCheckResult~~) operation to query the IDs of check items.
   * 
   * @example
   * 132
   */
  checkId?: number;
  /**
   * @remarks
   * The instance IDs of the assets.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The asset instances.
   */
  instanceList?: AddCheckInstanceResultWhiteListRequestInstanceList[];
  /**
   * @remarks
   * The description. The value of this parameter can be up to 65,535 bytes in length.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The type of the rule. Default value: **WHITE**. Valid value:
   * 
   * *   WHITE: adds check items to the whitelist.
   * 
   * @example
   * WHITE
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      checkGroupId: 'CheckGroupId',
      checkId: 'CheckId',
      instanceIds: 'InstanceIds',
      instanceList: 'InstanceList',
      remark: 'Remark',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkGroupId: 'string',
      checkId: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceList: { 'type': 'array', 'itemType': AddCheckInstanceResultWhiteListRequestInstanceList },
      remark: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

