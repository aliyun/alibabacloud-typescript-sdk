// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeTypesRequest extends $dara.Model {
  /**
   * @example
   * GPU
   */
  acceleratorType?: string;
  /**
   * @example
   * A10
   */
  GPUType?: string;
  /**
   * @example
   * ecs.c6.large,ecs.gn7i-c32g1.8xlarge
   */
  nodeTypes?: string;
  /**
   * @example
   * quota123
   */
  quotaId?: string;
  /**
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

