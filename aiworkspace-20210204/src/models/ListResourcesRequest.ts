// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the resource group. To get the resource group name, see [ListResources](https://help.aliyun.com/document_detail/449143.html).
   * 
   * @example
   * group
   */
  groupName?: string;
  /**
   * @remarks
   * A comma-separated list of labels. This operation returns only the resources that have all the specified labels.
   * 
   * This parameter is available only for resources whose `ResourceTypes` is set to `ACS`.
   * 
   * @example
   * system.supported.dsw=true,system.supported.dlc=true
   */
  labels?: string;
  /**
   * @remarks
   * The option to query resources. Valid values:
   * 
   * - `ListResourceByWorkspace` (Default): lists the resources in a workspace.
   * 
   * - `ListResource`: lists the resources of the current user.
   * 
   * @example
   * ListResourceByWorkspace
   */
  option?: string;
  /**
   * @remarks
   * The page number. The value must be greater than or equal to 1. Default value: 1.
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
   * **Deprecated.** This parameter is deprecated. Use the `ResourceType` parameter instead.
   * 
   * @example
   * MaxCompute
   */
  productTypes?: string;
  /**
   * @remarks
   * A comma-separated list of quota IDs. This operation returns only the resources that are associated with all the specified quota IDs.
   * 
   * > This parameter is available only for resources whose `ResourceTypes` is set to `ACS`.
   * 
   * @example
   * quota-k******da,quota-cd******w
   */
  quotaIds?: string;
  /**
   * @remarks
   * The resource name. The name must meet the following requirements:
   * 
   * - The name must be 3 to 28 characters in length.
   * 
   * - The name must be unique within a region.
   * 
   * @example
   * resource
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource types. Valid values:
   * 
   * - `MaxCompute`: MaxCompute resources.
   * 
   * - `ECS`: ECS resources.
   * 
   * - `Lingjun`: Lingjun computing resources.
   * 
   * - `ACS`: ACS computing resources.
   * 
   * - `Flink`: Flink resources.
   * 
   * - `SelfManagedAckPro`: self-managed AckPro cluster resources.
   * 
   * - `SelfManagedAckLingjun`: self-managed AckLingjun cluster resources.
   * 
   * - `SelfManagedASI`: self-managed ASI cluster resources from a third-party cloud.
   * 
   * @example
   * MaxCompute
   */
  resourceTypes?: string;
  /**
   * @remarks
   * Specifies whether to return detailed information. The detailed information includes the `Quotas` field. Valid values:
   * 
   * - `true` (Default): returns detailed information.
   * 
   * - `false`: does not return detailed information.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * A comma-separated list of fields that you want to return. Valid values:
   * 
   * - `Quota`
   * 
   * - `Label`
   * 
   * - `IsDefault`
   * 
   * @example
   * Quota,IsDefault
   */
  verboseFields?: string;
  /**
   * @remarks
   * The ID of the workspace. To get the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * - This parameter is required if `Option` is set to `ListResourceByWorkspace`.
   * 
   * - This parameter is not required if `Option` is set to `ListResource`.
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

