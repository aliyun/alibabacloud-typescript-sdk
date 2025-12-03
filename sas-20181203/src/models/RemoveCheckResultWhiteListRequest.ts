// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveCheckResultWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * Deprecated
   */
  checkGroupId?: string;
  /**
   * @remarks
   * The IDs of the check items.
   */
  checkIds?: number[];
  /**
   * @remarks
   * A set of cloud product instance IDs that require validation.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The ID of the whitelist rule.
   * 
   * >  You can call the [ListCheckResult](~~ListCheckResult~~) operation to query the IDs of whitelist rules.
   * 
   * @example
   * 22
   */
  ruleId?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * Deprecated
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkGroupId: 'CheckGroupId',
      checkIds: 'CheckIds',
      instanceIds: 'InstanceIds',
      ruleId: 'RuleId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkGroupId: 'string',
      checkIds: { 'type': 'array', 'itemType': 'number' },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ruleId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkIds)) {
      $dara.Model.validateArray(this.checkIds);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

