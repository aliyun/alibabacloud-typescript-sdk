// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCheckInstanceResultWhiteListRequestInstanceList extends $dara.Model {
  /**
   * @remarks
   * The asset instance ID.
   * > Call the [ListCheckInstanceResult](~~ListCheckInstanceResult~~) operation to obtain this parameter.
   * 
   * @example
   * i-wz9fdluqx20mp2x7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the asset resides.
   * > Call the [ListCheckInstanceResult](~~ListCheckInstanceResult~~) operation to obtain this parameter.
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
   * The ID of the check group to which the check item belongs.
   * 
   * @example
   * cQFq20UzZ49K6gRSJD1301****
   */
  checkGroupId?: string;
  /**
   * @remarks
   * The ID of the check item.
   * > Call the [ListCheckResult](~~ListCheckResult~~) operation to obtain this parameter.
   * 
   * @example
   * 132
   */
  checkId?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests should use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The collection of asset instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The collection of asset instance information.
   */
  instanceList?: AddCheckInstanceResultWhiteListRequestInstanceList[];
  /**
   * @remarks
   * The remarks. Maximum length: 65535 bytes.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The rule type. Default value: **WHITE**. Valid values:
   * - WHITE: whitelist
   * 
   * @example
   * WHITE
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      checkGroupId: 'CheckGroupId',
      checkId: 'CheckId',
      clientToken: 'ClientToken',
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
      clientToken: 'string',
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

