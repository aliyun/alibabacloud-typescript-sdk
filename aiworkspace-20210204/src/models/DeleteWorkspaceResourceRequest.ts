// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkspaceResourceRequest extends $dara.Model {
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
   * The tags. Multiple tags are separated by commas (,).
   * 
   * @example
   * system.supported.eas=true
   */
  labels?: string;
  /**
   * @remarks
   * The operation to perform. Valid values:
   * 
   * *   DetachAndDelete: disassociates a resource from a workspace and deletes the resource in the workspace. This is the default value.
   * *   Detach: disassociates a resource group from a workspace.
   * 
   * @example
   * DetachAndDelete
   */
  option?: string;
  /**
   * @remarks
   * **This field is no longer used and will be removed. Use the ResourceType field instead.
   * 
   * @example
   * DLC
   */
  productType?: string;
  /**
   * @remarks
   * The resource IDs. Multiple resource IDs are separated by commas (,). The GroupName values for the specified resources must be the same. You cannot leave both GroupName and ResourceIds empty. You can specify both parameters.
   * 
   * @example
   * Resource-dks******jkf,Resource-adf******dss
   */
  resourceIds?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   ECS
   * *   Lingjun
   * *   ACS
   * *   FLINK
   * *   MaxCompute (This resource type is valid only if Option is set to Detach.)
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

