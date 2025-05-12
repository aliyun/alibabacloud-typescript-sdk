// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLeniPrivateIpAddressesResponseBodyContentData } from "./ListLeniPrivateIpAddressesResponseBodyContentData";


export class ListLeniPrivateIpAddressesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListLeniPrivateIpAddressesResponseBodyContentData[];
  resourceGroupId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
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
      data: { 'type': 'array', 'itemType': ListLeniPrivateIpAddressesResponseBodyContentData },
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

