// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RelatedWorkload } from "./RelatedWorkload";


export class CredentialListItem extends $dara.Model {
  createdAt?: string;
  id?: string;
  name?: string;
  relatedWorloads?: RelatedWorkload[];
  type?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      id: 'id',
      name: 'name',
      relatedWorloads: 'relatedWorloads',
      type: 'type',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
      name: 'string',
      relatedWorloads: { 'type': 'array', 'itemType': RelatedWorkload },
      type: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedWorloads)) {
      $dara.Model.validateArray(this.relatedWorloads);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

