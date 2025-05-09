// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesResponseBodyPagingInfoNodesRuntimeResource extends $dara.Model {
  resourceGroup?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * S_resgrop_xxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroup: 'ResourceGroup',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroup: 'string',
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

