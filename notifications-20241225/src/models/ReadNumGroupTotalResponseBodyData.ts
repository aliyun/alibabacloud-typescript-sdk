// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadNumGroupTotalResponseBodyData extends $dara.Model {
  id?: number;
  readCount?: number;
  totalCount?: number;
  unReadCount?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      readCount: 'ReadCount',
      totalCount: 'TotalCount',
      unReadCount: 'UnReadCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      readCount: 'number',
      totalCount: 'number',
      unReadCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

