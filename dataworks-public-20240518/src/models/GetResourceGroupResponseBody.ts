// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceGroupResponseBodyResourceGroup } from "./GetResourceGroupResponseBodyResourceGroup";


export class GetResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the resource group.
   */
  resourceGroup?: GetResourceGroupResponseBodyResourceGroup;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: GetResourceGroupResponseBodyResourceGroup,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resourceGroup && typeof (this.resourceGroup as any).validate === 'function') {
      (this.resourceGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

