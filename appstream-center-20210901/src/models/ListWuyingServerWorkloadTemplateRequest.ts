// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWuyingServerWorkloadTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * A compatibility field. The current version does not read this parameter. The operation returns a fixed maximum of the first 100 templates.
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
   * The ID of the virtual node pool. This parameter is **required**. The node pool must belong to the current account. You can call [ListWuyingServer](~~ListWuyingServer~~) to obtain the ID.
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

