// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiDimTableRecordsRequestFilterConditions extends $dara.Model {
  /**
   * @example
   * Sandbox
   */
  field?: string;
  /**
   * @example
   * equal
   */
  operator?: string;
  value?: any[];
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiDimTableRecordsRequestFilter extends $dara.Model {
  /**
   * @example
   * and
   */
  combination?: string;
  conditions?: ListMultiDimTableRecordsRequestFilterConditions[];
  static names(): { [key: string]: string } {
    return {
      combination: 'Combination',
      conditions: 'Conditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combination: 'string',
      conditions: { 'type': 'array', 'itemType': ListMultiDimTableRecordsRequestFilterConditions },
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiDimTableRecordsRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
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

export class ListMultiDimTableRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101114
   */
  baseId?: string;
  filter?: ListMultiDimTableRecordsRequestFilter;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUUg5QSTWwHyeElt8z5z4Qo=
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  sheetIdOrName?: string;
  tenantContext?: ListMultiDimTableRecordsRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sheetIdOrName: 'SheetIdOrName',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      filter: ListMultiDimTableRecordsRequestFilter,
      maxResults: 'number',
      nextToken: 'string',
      sheetIdOrName: 'string',
      tenantContext: ListMultiDimTableRecordsRequestTenantContext,
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

