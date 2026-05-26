// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigsRequest extends $dara.Model {
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

