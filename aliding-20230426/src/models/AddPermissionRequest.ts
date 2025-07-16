// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPermissionRequestMembers extends $dara.Model {
  /**
   * @example
   * 123456
   */
  corpId?: string;
  /**
   * @example
   * 123456
   */
  id?: string;
  /**
   * @example
   * ORG
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPermissionRequestOption extends $dara.Model {
  /**
   * @example
   * 3600
   */
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPermissionRequestTenantContext extends $dara.Model {
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

export class AddPermissionRequest extends $dara.Model {
  dentryUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  members?: AddPermissionRequestMembers[];
  option?: AddPermissionRequestOption;
  /**
   * @remarks
   * This parameter is required.
   */
  roleId?: string;
  tenantContext?: AddPermissionRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      members: 'Members',
      option: 'Option',
      roleId: 'RoleId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      members: { 'type': 'array', 'itemType': AddPermissionRequestMembers },
      option: AddPermissionRequestOption,
      roleId: 'string',
      tenantContext: AddPermissionRequestTenantContext,
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
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

