// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrgTodoTasksShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
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
      tenantContextShrink: 'TenantContext',
      isDone: 'isDone',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      isDone: 'boolean',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

