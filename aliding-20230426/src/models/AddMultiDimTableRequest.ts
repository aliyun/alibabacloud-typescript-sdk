// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMultiDimTableRequestFields extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  property?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      property: 'Property',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      property: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.property) {
      $dara.Model.validateMap(this.property);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMultiDimTableRequestTenantContext extends $dara.Model {
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

export class AddMultiDimTableRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * r1R7q3QmWew5lo02fxB7nxxxxxxxx
   */
  baseId?: string;
  fields?: AddMultiDimTableRequestFields[];
  name?: string;
  tenantContext?: AddMultiDimTableRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      fields: 'Fields',
      name: 'Name',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      fields: { 'type': 'array', 'itemType': AddMultiDimTableRequestFields },
      name: 'string',
      tenantContext: AddMultiDimTableRequestTenantContext,
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
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

