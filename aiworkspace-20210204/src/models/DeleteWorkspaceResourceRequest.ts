// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkspaceResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The resource group name. To get the resource group name, see [ListResources](https://help.aliyun.com/document_detail/449143.html).
   * 
   * @example
   * group
   */
  groupName?: string;
  /**
   * @remarks
   * A comma-separated list of labels.
   * 
   * @example
   * system.supported.eas=true
   */
  labels?: string;
  /**
   * @remarks
   * The deletion behavior. Valid values:
   * 
   * - `DetachAndDelete` (default): Detaches the resource from the workspace and deletes the resource.
   * 
   * - `Detach`: Detaches the resource from the workspace.
   * 
   * @example
   * DetachAndDelete
   */
  option?: string;
  /**
   * @remarks
   * **This parameter is deprecated and will be removed. Use the `ResourceType` parameter instead.**
   * 
   * @example
   * DLC
   */
  productType?: string;
  /**
   * @remarks
   * A comma-separated list of resource IDs. All specified resources must belong to the same `GroupName`. You must specify a value for at least one of the `GroupName` or `ResourceIds` parameters.
   * 
   * @example
   * Resource-dks******jkf,Resource-adf******dss
   */
  resourceIds?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - `ECS`: general-purpose computing resources
   * 
   * - `Lingjun`: Lingjun intelligent computing resources
   * 
   * - `ACS`: ACS computing resources
   * 
   * - `Flink`: Flink resources.
   * 
   * - `MaxCompute`: MaxCompute resources. For this resource type, the `Option` parameter can only be set to `Detach`.
   * 
   * - `SelfManagedAckPro`: AckPro unified management cluster resources
   * 
   * - `SelfManagedAckLingjun`: AckLinjun unified management cluster resources
   * 
   * - `SelfManagedASI`: ASI unified management cluster resources (third-party cloud)
   * 
   * @example
   * DLC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      labels: 'Labels',
      option: 'Option',
      productType: 'ProductType',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      labels: 'string',
      option: 'string',
      productType: 'string',
      resourceIds: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

