// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialListItem } from "./CredentialListItem";


export class ListCredentialsOutput extends $dara.Model {
  items?: CredentialListItem[];
  pageNumber?: string;
  pageSize?: string;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': CredentialListItem },
      pageNumber: 'string',
      pageSize: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

