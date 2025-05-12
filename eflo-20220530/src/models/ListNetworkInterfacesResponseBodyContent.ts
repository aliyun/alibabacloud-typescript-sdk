// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNetworkInterfacesResponseBodyContentData } from "./ListNetworkInterfacesResponseBodyContentData";


export class ListNetworkInterfacesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListNetworkInterfacesResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListNetworkInterfacesResponseBodyContentData },
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

