// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindSvcMapBindRequest extends $dara.Model {
  current?: number;
  jwtToken?: string;
  size?: number;
  sort?: string;
  sortField?: string;
  svcId?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      jwtToken: 'JwtToken',
      size: 'Size',
      sort: 'Sort',
      sortField: 'SortField',
      svcId: 'SvcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      jwtToken: 'string',
      size: 'number',
      sort: 'string',
      sortField: 'string',
      svcId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

