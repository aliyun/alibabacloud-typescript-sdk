// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyServerlessAuthToMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The application query conditions.
   * 
   * @example
   * **7ad7e3a
   */
  appCriteria?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * - **SERVERLESS**: Serverless asset.
   * 
   * @example
   * SERVERLESS
   */
  authItem?: string;
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
   * Specifies whether to bind all assets. Default value: **false**. Valid values:
   * 
   * - **true**: Bind all assets.
   * - **false**: Do not bind all assets.
   * 
   * @example
   * false
   */
  bindAll?: boolean;
  /**
   * @remarks
   * The list of application IDs to bind.
   * 
   * > Retrieve the IDs by calling the [ListMachineApps](~~ListMachineApps~~) operation.
   */
  bindAppList?: string[];
  /**
   * @remarks
   * The Asset Type for the operation. Valid values:
   * - **INSTANCE**: instance.
   * - **APP**: application.
   * 
   * @example
   * APP
   */
  bindAssetType?: string;
  /**
   * @remarks
   * The list of asset UUIDs to bind.
   */
  bindUuidList?: string[];
  /**
   * @remarks
   * The search conditions for assets. This parameter is in JSON format. Pay attention to letter case when specifying this parameter.
   * > You can search for assets by instance ID, instance name, VPC ID, region, public IP address, and other conditions. Call the [DescribeCriteria](~~DescribeCriteria~~) operation to query supported search conditions.
   * 
   * @example
   * [{"name":"vulStatus","value":"YES","logicalExp":"AND"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The logical relationship among multiple search conditions. Valid values:
   * - **OR**: The search conditions are evaluated with a logical OR.
   * - **AND**: The search conditions are evaluated with a logical AND.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The NTM version code for pre-binding.
   * 
   * @example
   * level2
   */
  ntmVersion?: string;
  /**
   * @remarks
   * Specifies whether to perform a pre-binding operation. Valid values:
   * 
   * - **0**: No.
   * - **1**: Yes.
   * 
   * 
   * > After pre-binding is enabled, the corresponding edition authorization quota is automatically bound to the specified servers after the purchase is completed.
   * 
   * @example
   * 1
   */
  preBind?: number;
  /**
   * @remarks
   * The pre-binding order ID.
   * 
   * @example
   * 233016**0482
   */
  preBindOrderId?: number;
  /**
   * @remarks
   * The UID of the resource directory.
   * 
   * @example
   * 123456
   */
  resourceDirectoryUid?: number;
  /**
   * @remarks
   * The list of application IDs to unbind.
   * 
   * > Retrieve the IDs by calling the [ListMachineApps](~~ListMachineApps~~) operation.
   */
  unBindAppList?: string[];
  /**
   * @remarks
   * The list of asset UUIDs to unbind.
   */
  unBindUuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      appCriteria: 'AppCriteria',
      authItem: 'AuthItem',
      autoBind: 'AutoBind',
      bindAll: 'BindAll',
      bindAppList: 'BindAppList',
      bindAssetType: 'BindAssetType',
      bindUuidList: 'BindUuidList',
      criteria: 'Criteria',
      logicalExp: 'LogicalExp',
      ntmVersion: 'NtmVersion',
      preBind: 'PreBind',
      preBindOrderId: 'PreBindOrderId',
      resourceDirectoryUid: 'ResourceDirectoryUid',
      unBindAppList: 'UnBindAppList',
      unBindUuidList: 'UnBindUuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCriteria: 'string',
      authItem: 'string',
      autoBind: 'number',
      bindAll: 'boolean',
      bindAppList: { 'type': 'array', 'itemType': 'string' },
      bindAssetType: 'string',
      bindUuidList: { 'type': 'array', 'itemType': 'string' },
      criteria: 'string',
      logicalExp: 'string',
      ntmVersion: 'string',
      preBind: 'number',
      preBindOrderId: 'number',
      resourceDirectoryUid: 'number',
      unBindAppList: { 'type': 'array', 'itemType': 'string' },
      unBindUuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bindAppList)) {
      $dara.Model.validateArray(this.bindAppList);
    }
    if(Array.isArray(this.bindUuidList)) {
      $dara.Model.validateArray(this.bindUuidList);
    }
    if(Array.isArray(this.unBindAppList)) {
      $dara.Model.validateArray(this.unBindAppList);
    }
    if(Array.isArray(this.unBindUuidList)) {
      $dara.Model.validateArray(this.unBindUuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

