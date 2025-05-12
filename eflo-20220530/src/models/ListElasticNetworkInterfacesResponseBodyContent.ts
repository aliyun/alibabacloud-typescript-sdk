// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListElasticNetworkInterfacesResponseBodyContentData } from "./ListElasticNetworkInterfacesResponseBodyContentData";


export class ListElasticNetworkInterfacesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * lingjun Elastic Network Interface information list
   */
  data?: ListElasticNetworkInterfacesResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
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
      data: { 'type': 'array', 'itemType': ListElasticNetworkInterfacesResponseBodyContentData },
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

