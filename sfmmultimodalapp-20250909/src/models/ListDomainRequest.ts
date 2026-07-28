// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainRequest extends $dara.Model {
  appId?: string;
  pageNumber?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

