// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFiltersFilter extends $dara.Model {
  function?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFilters extends $dara.Model {
  filter?: DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFiltersFilter[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFiltersFilter },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponseBodyResourceResource extends $dara.Model {
  category?: string;
  filterRelation?: string;
  filters?: DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFilters;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      filterRelation: 'FilterRelation',
      filters: 'Filters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      filterRelation: 'string',
      filters: DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFilters,
    };
  }

  validate() {
    if(this.filters && typeof (this.filters as any).validate === 'function') {
      (this.filters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponseBodyResource extends $dara.Model {
  resource?: DescribeMonitorGroupDynamicRulesResponseBodyResourceResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeMonitorGroupDynamicRulesResponseBodyResourceResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The responses code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2170B94A-1576-4D65-900E-2093037CDAF3
   */
  requestId?: string;
  resource?: DescribeMonitorGroupDynamicRulesResponseBodyResource;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resource: DescribeMonitorGroupDynamicRulesResponseBodyResource,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

