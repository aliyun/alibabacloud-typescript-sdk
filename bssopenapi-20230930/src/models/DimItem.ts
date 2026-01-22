// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ItemValues } from "./ItemValues";


/**
 */
export class DimItemPageInfo extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DimItem extends $dara.Model {
  code?: string;
  name?: string;
  pageInfo?: DimItemPageInfo;
  values?: ItemValues[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      pageInfo: 'PageInfo',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      pageInfo: DimItemPageInfo,
      values: { 'type': 'array', 'itemType': ItemValues },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

