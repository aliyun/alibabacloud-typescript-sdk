// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyServerlessAuthToMachineRequest extends $dara.Model {
  /**
   * @remarks
   * Application query condition.
   * 
   * @example
   * **7ad7e3a
   */
  appCriteria?: string;
  /**
   * @remarks
   * Instance type. Values:
   * - **SERVERLESS**: Serverless asset
   * 
   * @example
   * SERVERLESS
   */
  authItem?: string;
  /**
   * @remarks
   * Enable auto-binding. Values:
   * 
   * - **0**: Off
   * - **1**: On
   * 
   * @example
   * 1
   */
  autoBind?: number;
  /**
   * @remarks
   * Whether to bind all. Default is **false**. Values:
   * 
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * false
   */
  bindAll?: boolean;
  /**
   * @remarks
   * List of application IDs to be bound.
   * 
   * > Obtained through the [ListMachineApps](~~ListMachineApps~~) interface.
   */
  bindAppList?: string[];
  /**
   * @remarks
   * Type of asset to operate on. Values:
   * - **INSTANCE**: Instance
   * - **APP**: Application
   * 
   * @example
   * APP
   */
  bindAssetType?: string;
  /**
   * @remarks
   * List of asset UUIDs to be bound.
   */
  bindUuidList?: string[];
  /**
   * @remarks
   * Set the conditions for searching assets. This parameter is in JSON format, and case sensitivity should be noted when entering parameters.
   * > Supports searching assets using instance ID, instance name, VPC ID, region, public IP address, etc. You can call the [DescribeCriteria](~~DescribeCriteria~~) interface to query supported search conditions.
   * 
   * @example
   * [{"name":"vulStatus","value":"YES","logicalExp":"AND"}]
   */
  criteria?: string;
  /**
   * @remarks
   * Set the logical relationship between multiple search conditions. Values:
   * - **OR**: Indicates an **or** relationship between multiple conditions.
   * - **AND**: Indicates an **and** relationship between multiple conditions.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * NTM version code, used for pre-binding.
   * 
   * @example
   * level2
   */
  ntmVersion?: string;
  /**
   * @remarks
   * Whether it is a pre-bind operation. Values:
   * 
   * - **0**: No
   * - **1**: Yes
   * 
   * 
   * > After enabling pre-binding, the specified server will automatically bind the corresponding version\\"s authorization count after the purchase is completed.
   * 
   * @example
   * 1
   */
  preBind?: number;
  /**
   * @remarks
   * Pre-bind order ID.
   * 
   * @example
   * 233016**0482
   */
  preBindOrderId?: number;
  /**
   * @remarks
   * UID of the associated resource directory.
   * 
   * @example
   * 123456
   */
  resourceDirectoryUid?: number;
  /**
   * @remarks
   * List of application IDs to be unbound.
   * 
   * > Obtained through the [ListMachineApps](~~ListMachineApps~~) interface.
   */
  unBindAppList?: string[];
  /**
   * @remarks
   * List of asset UUIDs to be unbound.
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

