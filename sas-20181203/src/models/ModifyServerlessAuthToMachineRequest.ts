// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyServerlessAuthToMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions for applications.
   * 
   * @example
   * **7ad7e3a
   */
  appCriteria?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * - **SERVERLESS**: Serverless assets.
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
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  bindAll?: boolean;
  /**
   * @remarks
   * The list of application IDs to bind.
   * 
   * > You can obtain the application IDs by calling the [ListMachineApps](~~ListMachineApps~~) operation.
   */
  bindAppList?: string[];
  /**
   * @remarks
   * The Asset Type to operate. Valid values:
   * - **INSTANCE**: Instance.
   * - **APP**: Application.
   * 
   * This parameter is required when you manage Serverless asset authorizations.
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
   * The client token that is used to ensure the idempotence of the request. Different requests must use different tokens. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies the conditions for searching assets. The value must be in JSON format and is case-sensitive.
   * > You can search for assets by using conditions such as the instance ID, instance name, VPC ID, region, and public IP address of the asset. You can call the [DescribeCriteria](~~DescribeCriteria~~) operation to query the supported search conditions.
   * 
   * @example
   * [{"name":"vulStatus","value":"YES","logicalExp":"AND"}]
   */
  criteria?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. A value of true indicates that only the request is prechecked and no actual operation is performed. A value of false indicates that the request is executed. Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies the logical relationship among multiple search conditions. Valid values:
   * - **OR**: The conditions have an OR relationship.
   * - **AND**: The conditions have an AND relationship.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The NTM version code used for pre-binding.
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
   * > After you enable pre-binding, the system automatically binds the corresponding version of authorizations to the specified server after the purchase is completed.
   * 
   * @example
   * 1
   */
  preBind?: number;
  /**
   * @remarks
   * The ID of the pre-binding order.
   * 
   * @example
   * 233016**0482
   */
  preBindOrderId?: number;
  /**
   * @remarks
   * The UID of the associated resource directory.
   * 
   * @example
   * 123456
   */
  resourceDirectoryUid?: number;
  /**
   * @remarks
   * The list of application IDs to unbind.
   * 
   * > You can obtain the application IDs by calling the [ListMachineApps](~~ListMachineApps~~) operation.
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
      clientToken: 'ClientToken',
      criteria: 'Criteria',
      dryRun: 'DryRun',
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
      clientToken: 'string',
      criteria: 'string',
      dryRun: 'boolean',
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

