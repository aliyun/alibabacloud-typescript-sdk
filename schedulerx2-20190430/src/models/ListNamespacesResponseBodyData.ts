// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNamespacesResponseBodyDataNamespaces } from "./ListNamespacesResponseBodyDataNamespaces";


export class ListNamespacesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The namespaces and their details.
   */
  namespaces?: ListNamespacesResponseBodyDataNamespaces[];
  static names(): { [key: string]: string } {
    return {
      namespaces: 'Namespaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaces: { 'type': 'array', 'itemType': ListNamespacesResponseBodyDataNamespaces },
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

