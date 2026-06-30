// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDentryRequestTenantContext extends $dara.Model {
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

export class CopyDentryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dentryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  targetSpaceId?: string;
  tenantContext?: CopyDentryRequestTenantContext;
  toNextDentryId?: string;
  toParentDentryId?: string;
  toPrevDentryId?: string;
  static names(): { [key: string]: string } {
    return {
      dentryId: 'DentryId',
      name: 'Name',
      spaceId: 'SpaceId',
      targetSpaceId: 'TargetSpaceId',
      tenantContext: 'TenantContext',
      toNextDentryId: 'ToNextDentryId',
      toParentDentryId: 'ToParentDentryId',
      toPrevDentryId: 'ToPrevDentryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryId: 'string',
      name: 'string',
      spaceId: 'string',
      targetSpaceId: 'string',
      tenantContext: CopyDentryRequestTenantContext,
      toNextDentryId: 'string',
      toParentDentryId: 'string',
      toPrevDentryId: 'string',
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

