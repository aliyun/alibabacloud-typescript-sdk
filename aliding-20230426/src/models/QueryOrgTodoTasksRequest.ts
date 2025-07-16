// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrgTodoTasksRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 1
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgTodoTasksRequest extends $dara.Model {
  tenantContext?: QueryOrgTodoTasksRequestTenantContext;
  /**
   * @example
   * true
   */
  isDone?: boolean;
  /**
   * @example
   * 0
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      isDone: 'isDone',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: QueryOrgTodoTasksRequestTenantContext,
      isDone: 'boolean',
      nextToken: 'string',
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

