// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAlertRulesFilter } from "./QueryAlertRulesFilter";
import { Pagination } from "./Pagination";


export class QueryAlertRulesInput extends $dara.Model {
  filter?: QueryAlertRulesFilter;
  pagination?: Pagination;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      pagination: 'pagination',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: QueryAlertRulesFilter,
      pagination: Pagination,
      workspace: 'string',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(this.pagination && typeof (this.pagination as any).validate === 'function') {
      (this.pagination as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

