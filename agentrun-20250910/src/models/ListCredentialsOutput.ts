// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialListItem } from "./CredentialListItem";


export class ListCredentialsOutput extends $dara.Model {
  items?: CredentialListItem;
  pageNum?: string;
  pageSize?: string;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: CredentialListItem,
      pageNum: 'string',
      pageSize: 'string',
      total: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

