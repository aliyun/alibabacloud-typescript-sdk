// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodePodsRequest extends $dara.Model {
  /**
   * @remarks
   * The GPU index number.
   * 
   * @example
   * 1
   */
  GPUIndexes?: string;
  /**
   * @remarks
   * The resource type used by the pod.
   * 
   * @example
   * ForceQuotaOversold
   */
  oversoldTypes?: string;
  /**
   * @remarks
   * The ID of the resource group to which the node belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * lingj19q90jp66nq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      GPUIndexes: 'GPUIndexes',
      oversoldTypes: 'OversoldTypes',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GPUIndexes: 'string',
      oversoldTypes: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

