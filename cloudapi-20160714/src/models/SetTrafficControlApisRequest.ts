// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetTrafficControlApisRequest extends $dara.Model {
  /**
   * @remarks
   * The API ID for the specified operation. Separate multiple API IDs with commas (,). A maximum of 100 API IDs can be entered.
   * 
   * This parameter is required.
   * 
   * @example
   * 3b81fd160f5645e097cc8855d75a1cf6,46fbb52840d146f186e38e8e70fc8c12
   */
  apiIds?: string;
  /**
   * @remarks
   * The ID of the API group containing the APIs to which you want to bind a specified throttling policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 0009db9c828549768a200320714b8930
   */
  groupId?: string;
  /**
   * @remarks
   * The security token included in the WebSocket request header. The system uses this token to authenticate the request.
   * 
   * @example
   * 556d15cb-0808-432d-ab07-33e6b961b703
   */
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
   * RELEASE
   */
  stageName?: string;
  /**
   * @remarks
   * The ID of the throttling policy.
   * 
   * This parameter is required.
   * 
   * @example
   * dd05f1c54d6749eda95f9fa6d491449a
   */
  trafficControlId?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      trafficControlId: 'TrafficControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
      trafficControlId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

