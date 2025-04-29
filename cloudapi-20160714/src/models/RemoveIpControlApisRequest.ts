// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveIpControlApisRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the APIs from which you want to unbind the ACL.
   * 
   * *   If this parameter is not specified, the ACL is unbound from all the APIs in the specified environment of the API group.
   * *   The IDs of APIs that you want to query. Separate multiple API IDs with commas (,). A maximum of 100 API IDs can be entered.
   * 
   * @example
   * 123
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

