// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryScheduleConferenceInfoRequestTenantContext } from "./QueryScheduleConferenceInfoRequestTenantContext";


export class QueryScheduleConferenceInfoRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 19
   */
  nextToken?: string;
  /**
   * @example
   * 636cf59f2b032f014ae32902
   */
  scheduleConferenceId?: string;
  tenantContext?: QueryScheduleConferenceInfoRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      scheduleConferenceId: 'ScheduleConferenceId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      scheduleConferenceId: 'string',
      tenantContext: QueryScheduleConferenceInfoRequestTenantContext,
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

