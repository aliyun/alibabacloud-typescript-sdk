// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAuthToMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization version of the asset. Valid values:
   * - **6**: Anti-virus Edition
   * - **5**: Advanced Edition
   * - **3**: Enterprise Edition
   * - **7**: Ultimate Edition
   * - **10**: Value-added Service Edition.
   * 
   * @example
   * 6
   */
  authVersion?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic binding. Valid values:
   * 
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  autoBind?: number;
  /**
   * @remarks
   * The UUIDs of the servers to bind.
   * 
   * > **Bind** and **UnBind** cannot both be empty.
   */
  bind?: string[];
  /**
   * @remarks
   * Specifies whether to bind all assets. Default value: **false**. Valid values:
   * 
   * - **true**: Bind all assets.
   * - **false**: Do not bind all assets.
   * 
   * @example
   * true
   */
  bindAll?: boolean;
  /**
   * @remarks
   * The search conditions for assets. This parameter is in JSON format. Note that the parameter values are case-sensitive.
   * > You can search for assets by instance ID, instance name, VPC ID, region, or public IP address. Call the [DescribeCriteria](~~DescribeCriteria~~) operation to query the supported search conditions.
   * 
   * @example
   * [{"name":"riskStatus","value":"YES"},{"name":"internetIp","value":"1.2.XX.XX"}]
   */
  criteria?: string;
  /**
   * @remarks
   * Specifies whether this is a pre-binding operation. Valid values:
   * 
   * - **0**: No.
   * - **1**: Yes.
   * 
   * 
   * > After pre-binding is enabled, the corresponding authorization quota is automatically bound to the specified servers after the purchase is completed.
   * 
   * @example
   * 1
   */
  isPreBind?: number;
  /**
   * @remarks
   * The logical relationship among multiple search conditions. Default value: **OR**. Valid values:
   * - **OR**: The search conditions are evaluated with a logical OR.
   * - **AND**: The search conditions are evaluated with a logical AND.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The order version associated with the pre-binding. Valid values:
   * 
   * - **level7**: Anti-virus Edition
   * - **level3**: Advanced Edition
   * - **level2**: Enterprise Edition
   * - **level8**: Ultimate Edition
   * - **level10**: Value-added service only.
   * 
   * @example
   * level2
   */
  ntmVersion?: string;
  /**
   * @remarks
   * The order ID associated with the pre-binding.
   * 
   * @example
   * 233016**0482
   */
  preBindOrderId?: number;
  /**
   * @remarks
   * The ID of the member accounts in the resource folder (Alibaba Cloud account).
   * > Invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 16670360956*****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The UUIDs of the servers to unbind.
   * > **Bind** and **UnBind** cannot both be empty.
   */
  unBind?: string[];
  static names(): { [key: string]: string } {
    return {
      authVersion: 'AuthVersion',
      autoBind: 'AutoBind',
      bind: 'Bind',
      bindAll: 'BindAll',
      criteria: 'Criteria',
      isPreBind: 'IsPreBind',
      logicalExp: 'LogicalExp',
      ntmVersion: 'NtmVersion',
      preBindOrderId: 'PreBindOrderId',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      unBind: 'UnBind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authVersion: 'number',
      autoBind: 'number',
      bind: { 'type': 'array', 'itemType': 'string' },
      bindAll: 'boolean',
      criteria: 'string',
      isPreBind: 'number',
      logicalExp: 'string',
      ntmVersion: 'string',
      preBindOrderId: 'number',
      resourceDirectoryAccountId: 'number',
      unBind: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bind)) {
      $dara.Model.validateArray(this.bind);
    }
    if(Array.isArray(this.unBind)) {
      $dara.Model.validateArray(this.unBind);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

