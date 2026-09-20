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
   * - default: public resource group.
   * - single: dedicated resource group.
   * 
   * @example
   * default
   */
  bizExtKey?: string;
  /**
   * @remarks
   * The name of the cluster. This parameter is valid only for MaxCompute and PAI resource group types.
   * 
   * @example
   * AY18G
   */
  cluster?: string;
  /**
   * @remarks
   * The time when the cluster was created. The format is Jul 9, 2018 2:43:37 PM.
   * 
   * @example
   * Jul 9, 2018 2:43:37 PM
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether Kp (key person) access is used. Valid values:
   * - true: The MaxCompute engine uses the Alibaba Cloud account UID as the display name of the access account.
   * - false: The MaxCompute engine uses the Alibaba Cloud account name as the display name of the access account.
   * This parameter is meaningless for other types and is valid only for the MaxCompute engine.
   * 
   * @example
   * false
   */
  enableKp?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
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
   * - true: The resource group is the default resource group.
   * - false: The resource group is not the default resource group.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * - ISOLATE: an upfront dedicated resource group.
   * - SHARE: a pay-as-you-go public resource group.
   * - DEVELOP: a developer edition.
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
   * - 0: DataWorks
   * - 2: MaxCompute
   * - 3: PAI
   * - 4: data integration
   * - 7: scheduling
   * - 9: dataService
   * 
   * @example
   * 3
   */
  resourceGroupType?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzbn7pti3zfa
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The sequence field. Used to sort created resource groups in ascending order by creation sequence number.
   * 
   * @example
   * 300
   */
  sequence?: number;
  /**
   * @remarks
   * The detailed information of the resource group. The content displayed in {} is the detailed information of the resource group.
   * 
   * @example
   * {}
   */
  specs?: { [key: string]: any };
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * - NORMAL(0): The resource group is running or in service.
   * - STOP(1): The resource group has expired and is frozen.
   * - DELETED(2): The resource group has been released or destroyed.
   * - CREATING(3): The resource group is being created or started.
   * - CREATE_FAILED(4): The resource group failed to be created or started.
   * - UPDATING(5): The resource group is being scaled out or upgraded.
   * - UPDATE_FAILED(6): The resource group failed to be scaled out or upgraded.
   * - DELETING(7): The resource group is being released or destroyed.
   * - DELETE_FAILED(8): The resource group failed to be released or destroyed.
   * - TIMEOUT(9): The operation performed on the resource group timed out. All change operations may time out. This value is temporarily available only for DataService.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The list of tags.
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
   * The format is `MMM d, yyyy h:mm:ss a`, for example, `Jul 9, 2018 2:43:37 PM`.
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
   * The list of resource groups.
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

