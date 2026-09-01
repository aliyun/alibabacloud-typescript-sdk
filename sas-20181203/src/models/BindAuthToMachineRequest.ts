// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAuthToMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization version of the asset. Valid values:
   * - **6**: Anti-virus Edition.
   * - **5**: Premium Edition.
   * - **3**: Enterprise Edition.
   * - **7**: Ultimate Edition.
   * - **10**: Value-added service Edition.
   * 
   * @example
   * 6
   */
  authVersion?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic binding. Valid values:
   * 
   * - **0**: Disable automatic binding.
   * - **1**: Enable automatic binding.
   * 
   * @example
   * 1
   */
  autoBind?: number;
  /**
   * @remarks
   * The collection of UUIDs to bind.
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
   * The client token that is used to ensure the idempotence of the request. Use a different token for each request. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The conditions for searching assets. This parameter is in JSON format. Pay attention to letter case when you specify this parameter.
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
   * - **OR**: The search conditions are evaluated using a logical OR.
   * - **AND**: The search conditions are evaluated using a logical AND.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The order version associated with the pre-binding operation. Valid values:
   * 
   * - **level7**: Anti-virus Edition.
   * - **level3**: Premium Edition.
   * - **level2**: Enterprise Edition.
   * - **level8**: Ultimate Edition.
   * - **level10**: Value-added service only.
   * 
   * @example
   * level2
   */
  ntmVersion?: string;
  /**
   * @remarks
   * The order ID associated with the pre-binding operation.
   * 
   * @example
   * 233016**0482
   */
  preBindOrderId?: number;
  productCode?: string;
  /**
   * @remarks
   * The ID of the member accounts (Alibaba Cloud account) in the resource directory.
   * >Call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 16670360956*****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The collection of UUIDs to unbind.
   * > **Bind** and **UnBind** cannot both be empty.
   */
  unBind?: string[];
  static names(): { [key: string]: string } {
    return {
      authVersion: 'AuthVersion',
      autoBind: 'AutoBind',
      bind: 'Bind',
      bindAll: 'BindAll',
      clientToken: 'ClientToken',
      criteria: 'Criteria',
      isPreBind: 'IsPreBind',
      logicalExp: 'LogicalExp',
      ntmVersion: 'NtmVersion',
      preBindOrderId: 'PreBindOrderId',
      productCode: 'ProductCode',
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
      clientToken: 'string',
      criteria: 'string',
      isPreBind: 'number',
      logicalExp: 'string',
      ntmVersion: 'string',
      preBindOrderId: 'number',
      productCode: 'string',
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

