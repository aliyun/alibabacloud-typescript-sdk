// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWuyingServerWorkloadTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * A compatibility field. The current version does not read this parameter. The operation returns a maximum of the first 100 templates.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * A compatibility field. The current version does not read this parameter and does not support token-based pagination.
   * 
   * @example
   * unused
   */
  nextToken?: string;
  /**
   * @remarks
   * The virtual node pool ID. **Required**. The node pool must already exist and belong to the current account, but it is not required to be attached to a workstation.
   * 
   * If you already have a valid node pool ID, you can directly pass it. If a workstation is already associated with a node pool, you can also obtain the corresponding non-empty `VirtualNodePoolId` by invoking [ListWuyingServer](~~ListWuyingServer~~). If you do not have a valid ID, do not use an empty value, workstation ID, cluster ID, or the character string `null` as a substitute.
   * 
   * [CreateWuyingServer](~~CreateWuyingServer~~) only associates existing node pools and does not support automatic creation of node pools. If the node pool does not exist or does not belong to the current account, `InvalidParameter.VirtualNodePoolId` is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * vnp-bp1234567890abcde
   */
  virtualNodePoolId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      virtualNodePoolId: 'VirtualNodePoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      virtualNodePoolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

