// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLocationPaiImageRequest extends $dara.Model {
  current?: number;
  jwtToken?: string;
  size?: number;
  sort?: string;
  sortField?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      jwtToken: 'JwtToken',
      size: 'Size',
      sort: 'Sort',
      sortField: 'SortField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      jwtToken: 'string',
      size: 'number',
      sort: 'string',
      sortField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

