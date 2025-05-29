// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespacesResponseBodyNamespaces extends $dara.Model {
  namespace?: string[];
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.namespace)) {
      $dara.Model.validateArray(this.namespace);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

