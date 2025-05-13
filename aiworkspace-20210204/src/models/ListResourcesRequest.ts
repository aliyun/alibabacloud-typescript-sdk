// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the resource group. You can call [ListResources](https://help.aliyun.com/document_detail/449143.html) to obtain the name of the resource group.
   * 
   * @example
   * group
   */
  groupName?: string;
  /**
   * @remarks
   * Tag-based filter conditions. Multiple conditions are separated by commas (,). Only resources that meet all the specified tag-based filter conditions are returned.
   * 
   * This parameter is available only for resources whose ProductType is ACS.
   * 
   * @example
   * system.supported.dsw=true,system.supported.dlc=true
   */
  labels?: string;
  /**
   * @remarks
   * The operation to perform. Valid values:
   * 
   * *   ListResourceByWorkspace: obtains the resources in the workspace. This is the default value.
   * *   ListResource: obtains the resources of the user.
   * 
   * @example
   * ListResourceByWorkspace
   */
  option?: string;
  /**
   * @remarks
   * The page number. The pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * **This field is no longer used and will be removed. Use the ResourceType field instead.
   * 
   * @example
   * MaxCompute
   */
  productTypes?: string;
  /**
   * @remarks
   * The quota IDs, which are separated by commas (,). Only resources that contain all the specified quotas are returned.
   * 
   * >  This parameter is available only for resources whose ResourceTypes is ACS.
   * 
   * @example
   * quota-k******da,quota-cd******w
   */
  quotaIds?: string;
  /**
   * @remarks
   * The resource name. The value must meet the following requirements:
   * 
   * *   The name must be 3 to 28 characters in length.
   * *   The name is unique in the region.
   * 
   * @example
   * resource
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource types. Valid values:
   * 
   * *   MaxCompute
   * *   ECS
   * *   Lingjun
   * *   ACS
   * *   FLINK
   * 
   * @example
   * MaxCompute
   */
  resourceTypes?: string;
  /**
   * @remarks
   * Specifies whether to show detailed information, which includes the Quotas field. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The fields to return. Multiple fields are separated by commas (,). Valid values:
   * 
   * *   Quota
   * *   Label
   * *   IsDefault
   * 
   * @example
   * Quota,IsDefault
   */
  verboseFields?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * *   This parameter is required when the Option parameter is set to ListResourceByWorkspace.
   * *   You do not need to configure this parameter when the Option parameter is set to ListResource.
   * 
   * @example
   * 123
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      labels: 'Labels',
      option: 'Option',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productTypes: 'ProductTypes',
      quotaIds: 'QuotaIds',
      resourceName: 'ResourceName',
      resourceTypes: 'ResourceTypes',
      verbose: 'Verbose',
      verboseFields: 'VerboseFields',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      labels: 'string',
      option: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productTypes: 'string',
      quotaIds: 'string',
      resourceName: 'string',
      resourceTypes: 'string',
      verbose: 'boolean',
      verboseFields: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

