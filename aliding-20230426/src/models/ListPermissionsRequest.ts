// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionsRequestOption extends $dara.Model {
  filterRoleIds?: string[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 2
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      filterRoleIds: 'FilterRoleIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterRoleIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filterRoleIds)) {
      $dara.Model.validateArray(this.filterRoleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsRequestTenantContext extends $dara.Model {
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

export class ListPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * KGZLxjv9VGkoG9YwHE5wx7k2V6EDybno
   */
  dentryUuid?: string;
  option?: ListPermissionsRequestOption;
  tenantContext?: ListPermissionsRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      option: 'Option',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      option: ListPermissionsRequestOption,
      tenantContext: ListPermissionsRequestTenantContext,
    };
  }

  validate() {
    if(this.option && typeof (this.option as any).validate === 'function') {
      (this.option as any).validate();
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

