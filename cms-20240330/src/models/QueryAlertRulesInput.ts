// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAlertRulesFilter } from "./QueryAlertRulesFilter";
import { Pagination } from "./Pagination";


export class QueryAlertRulesInput extends $dara.Model {
  /**
   * @remarks
   * The comprehensive filter conditions for querying alert rules. Supports combined filtering by multiple dimensions such as name, status, severity level, tags, and notification channels.
   * 
   * @example
   * {"status":{"eq":"Alarm"},"severityLevels":{"contains":["CRITICAL","ERROR"]}}
   */
  filter?: QueryAlertRulesFilter;
  /**
   * @remarks
   * The pagination mode parameter. keyset indicates keyset-based pagination.
   * 
   * @example
   * {"pageNumber":1,"pageSize":20}
   */
  pagination?: Pagination;
  /**
   * @remarks
   * The observable workspace name. If this parameter is not specified, all alert rules are returned based on the caller identity (callerUserId + callerRegionId). If this parameter is specified, only the rules under the specified workspace are returned.
   * 
   * @example
   * workspace-test
   */
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

