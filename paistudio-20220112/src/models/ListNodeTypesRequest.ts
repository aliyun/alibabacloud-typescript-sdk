// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerator type used to filter the results. Valid values: `CPU` and `GPU`.
   * 
   * @example
   * GPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The GPU type used to filter the results. Fuzzy matching is supported.
   * 
   * @example
   * A10
   */
  GPUType?: string;
  /**
   * @remarks
   * A comma-separated list of node types. If omitted, all node types are returned.
   * 
   * @example
   * ecs.c6.large,ecs.gn7i-c32g1.8xlarge
   */
  nodeTypes?: string;
  /**
   * @remarks
   * The quota ID. You must specify either this parameter or `ResourceGroupIds`.
   * 
   * @example
   * quota123
   */
  quotaId?: string;
  /**
   * @remarks
   * A comma-separated list of resource group IDs. You must specify either this parameter or `QuotaId`. The `UserId` for the specified `ResourceGroupId` must match the `UserId` of the requesting user. All specified `resource group` instances must be of the same type and associated with the same Virtual Private Cloud (VPC).
   * 
   * @example
   * rg123,rg456
   */
  resourceGroupIds?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      GPUType: 'GPUType',
      nodeTypes: 'NodeTypes',
      quotaId: 'QuotaId',
      resourceGroupIds: 'ResourceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      GPUType: 'string',
      nodeTypes: 'string',
      quotaId: 'string',
      resourceGroupIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

