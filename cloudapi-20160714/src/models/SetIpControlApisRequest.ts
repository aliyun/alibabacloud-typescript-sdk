// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetIpControlApisRequest extends $dara.Model {
  /**
   * @remarks
   * The API IDs. Separate multiple API IDs with commas (,). A maximum of 100 API IDs can be entered.
   * 
   * This parameter is required.
   * 
   * @example
   * 3b81fd160f5645e097cc8855d75a1cf6,46fbb52840d146f186e38e8e70fc8c12
   */
  apiIds?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * 0009db9c828549768a200320714b8930
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * dd05f1c54d6749eda95f9fa6d491449a
   */
  ipControlId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The name of the runtime environment. Valid values:
   * 
   * *   **RELEASE**
   * *   **PRE**
   * *   **TEST**
   * 
   * This parameter is required.
   * 
   * @example
   * TEST
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      ipControlId: 'IpControlId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      ipControlId: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

