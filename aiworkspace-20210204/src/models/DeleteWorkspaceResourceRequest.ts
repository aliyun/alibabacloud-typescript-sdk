// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkspaceResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the resource group. To obtain the name of the resource group, see [ListResources](https://help.aliyun.com/document_detail/449143.html).
   * 
   * @example
   * group
   */
  groupName?: string;
  /**
   * @remarks
   * The list of tags, separated by commas.
   * 
   * @example
   * system.supported.eas=true
   */
  labels?: string;
  /**
   * @remarks
   * The deletion behavior. Valid values:
   * - DetachAndDelete: Unbinds the resources from the workspace and deletes the resources. This is the default value.
   * - Detach: Unbinds the resources from the workspace.
   * 
   * @example
   * DetachAndDelete
   */
  option?: string;
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated and will be retired. Use the ResourceType field.
   * 
   * @example
   * DLC
   */
  productType?: string;
  /**
   * @remarks
   * The IDs of the resources, separated by commas. The GroupName of these resource IDs must be the same. GroupName and ResourceIds cannot be empty at the same time, but both can be specified.
   * 
   * @example
   * Resource-dks******jkf,Resource-adf******dss
   */
  resourceIds?: string;
  /**
   * @remarks
   * The list of resource types. Valid values:
   * - ECS: general computing resources
   * - Lingjun: Lingjun AI computing resources
   * - ACS: ACS computing resources
   * - FLINK: Flink resources
   * - MaxCompute: MaxCompute resources. Only the Detach option is supported. The DetachAndDelete option is not supported.
   * - SelfManagedAckPro: ACK Pro unified management cluster resources
   * - SelfManagedAckLingjun: ACK Lingjun unified management cluster resources
   * - SelfManagedASI: ASI unified management cluster resources (third-party cloud)
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

