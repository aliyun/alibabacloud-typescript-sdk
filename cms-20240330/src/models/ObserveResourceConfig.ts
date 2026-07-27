// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveResourceConfig extends $dara.Model {
  entityDomain?: string;
  entityType?: string;
  namespace?: string;
  productCategory?: string;
  relationType?: string;
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      entityDomain: 'entityDomain',
      entityType: 'entityType',
      namespace: 'namespace',
      productCategory: 'productCategory',
      relationType: 'relationType',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityDomain: 'string',
      entityType: 'string',
      namespace: 'string',
      productCategory: 'string',
      relationType: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

