// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCheckResultWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the check items.
   * > Call the [ListCheckResult](~~ListCheckResult~~) operation to obtain this parameter.
   */
  checkIds?: number[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests should use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance IDs of the cloud service instances to add to the whitelist. Separate multiple instance IDs with commas (,).
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The remarks. Maximum length: 65,535 bytes.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The rule type. Default value: **WHITE**. Valid values:
   * - **WHITE**: adds to the whitelist.
   * 
   * @example
   * WHITE
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      checkIds: 'CheckIds',
      clientToken: 'ClientToken',
      instanceIds: 'InstanceIds',
      remark: 'Remark',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIds: { 'type': 'array', 'itemType': 'number' },
      clientToken: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      remark: 'string',
      ruleType: 'string',
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

