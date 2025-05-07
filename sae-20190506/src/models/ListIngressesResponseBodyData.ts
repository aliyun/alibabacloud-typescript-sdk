// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIngressesResponseBodyDataIngressList } from "./ListIngressesResponseBodyDataIngressList";


export class ListIngressesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of routing rules.
   */
  ingressList?: ListIngressesResponseBodyDataIngressList[];
  static names(): { [key: string]: string } {
    return {
      ingressList: 'IngressList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressList: { 'type': 'array', 'itemType': ListIngressesResponseBodyDataIngressList },
    };
  }

  validate() {
    if(Array.isArray(this.ingressList)) {
      $dara.Model.validateArray(this.ingressList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

