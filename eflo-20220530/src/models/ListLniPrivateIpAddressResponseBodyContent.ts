// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLniPrivateIpAddressResponseBodyContentData } from "./ListLniPrivateIpAddressResponseBodyContentData";


export class ListLniPrivateIpAddressResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: ListLniPrivateIpAddressResponseBodyContentData[];
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resourceGroupId: 'ResourceGroupId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListLniPrivateIpAddressResponseBodyContentData },
      resourceGroupId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

