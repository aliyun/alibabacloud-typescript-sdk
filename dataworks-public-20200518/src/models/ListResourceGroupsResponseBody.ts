// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The category of the resource group. Valid values:
   * 
   * *   default: shared resource group
   * *   single: exclusive resource group
   * 
   * @example
   * default
   */
  bizExtKey?: string;
  /**
   * @remarks
   * The name of the cluster. This parameter is returned only if the type of the resource group is MaxCompute or PAI.
   * 
   * @example
   * AY18G
   */
  cluster?: string;
  /**
   * @remarks
   * The time when the cluster was created. Example: Jul 9, 2018 2:43:37 PM.
   * 
   * @example
   * Jul 9, 2018 2:43:37 PM
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the UID of an Alibaba Cloud account is used for access. Valid values:
   * 
   * *   true: The MaxCompute compute engine uses the UID of the Alibaba Cloud account as the display name of the account for access.
   * *   false: The MaxCompute compute engine uses the name of the Alibaba Cloud account as the display name of the account for access. The remaining values are useless. This parameter is returned only if the type of the resource group is MaxCompute.
   * 
   * @example
   * false
   */
  enableKp?: boolean;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * 1234567
   */
  id?: number;
  /**
   * @remarks
   * The identifier of the resource group.
   * 
   * @example
   * e1815577-2f4e-4c5e-b29****
   */
  identifier?: string;
  /**
   * @remarks
   * Indicates whether the resource group is the default resource group. Valid values:
   * 
   * *   true: The resource group is the default resource group.
   * *   false: The resource group is not the default resource group.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The mode of the resource group. Valid values:
   * 
   * *   ISOLATE: exclusive resource group that adopts the subscription billing method
   * *   SHARE: shared resource group that adopts the pay-as-you-go billing method
   * *   DEVELOP: resource group for developers
   * 
   * @example
   * SHARE
   */
  mode?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   0: DataWorks
   * *   2: MaxCompute
   * *   3: PAI
   * *   4: Data Integration
   * *   7: scheduling
   * *   9: DataService Studio
   * 
   * @example
   * 3
   */
  resourceGroupType?: string;
  /**
   * @remarks
   * The ID of your Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfmzbn7pti3zfa
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The sequence number of the resource group. Created resource groups are sorted in ascending order by sequence number.
   * 
   * @example
   * 300
   */
  sequence?: number;
  /**
   * @remarks
   * The details of the resource group. The content enclosed in braces {} is the details of the resource group.
   * 
   * @example
   * {}
   */
  specs?: { [key: string]: any };
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   0: NORMAL, which indicates that the resource group is running or in service.
   * *   1: STOP, which indicates that the resource group has expired and is frozen.
   * *   2: DELETED, which indicates that the resource group is released or destroyed.
   * *   3: CREATING, which indicates that the resource group is being created or started.
   * *   4: CREATE_FAILED, which indicates that the resource group fails to be created or started.
   * *   5: UPDATING, which indicates that the resource group is being scaled out or upgraded.
   * *   6: UPDATE_FAILED, which indicates that the resource group fails to be scaled out or upgraded.
   * *   7: DELETING, which indicates that the resource group is being released or destroyed.
   * *   8: DELETE_FAILED, which indicates that the resource group fails to be released or destroyed.
   * *   9: TIMEOUT, which indicates that the operation performed on the resource group times out. All operations may time out. This value is temporarily available only for DataService Studio.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListResourceGroupsResponseBodyDataTags[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1234567
   */
  tenantId?: number;
  /**
   * @remarks
   * The time when the resource group was last updated.
   * 
   * @example
   * Jul 9, 2018 2:43:37 PM
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizExtKey: 'BizExtKey',
      cluster: 'Cluster',
      createTime: 'CreateTime',
      enableKp: 'EnableKp',
      id: 'Id',
      identifier: 'Identifier',
      isDefault: 'IsDefault',
      mode: 'Mode',
      name: 'Name',
      resourceGroupType: 'ResourceGroupType',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      sequence: 'Sequence',
      specs: 'Specs',
      status: 'Status',
      tags: 'Tags',
      tenantId: 'TenantId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizExtKey: 'string',
      cluster: 'string',
      createTime: 'string',
      enableKp: 'boolean',
      id: 'number',
      identifier: 'string',
      isDefault: 'boolean',
      mode: 'string',
      name: 'string',
      resourceGroupType: 'string',
      resourceManagerResourceGroupId: 'string',
      sequence: 'number',
      specs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'number',
      tags: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyDataTags },
      tenantId: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.specs) {
      $dara.Model.validateMap(this.specs);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource groups.
   */
  data?: ListResourceGroupsResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc1411515937635973****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyData },
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

