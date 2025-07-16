// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePermissionRequestMembers extends $dara.Model {
  /**
   * @example
   * 123456
   */
  corpId?: string;
  /**
   * @example
   * ORG
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

export class UpdatePermissionRequestOption extends $dara.Model {
  /**
   * @example
   * 10
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

export class UpdatePermissionRequestTenantContext extends $dara.Model {
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

export class UpdatePermissionRequest extends $dara.Model {
  /**
   * @example
   * kDnRL6jAJMLgNkw7tBnw5aY4VyMoPYe1
   */
  dentryUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  members?: UpdatePermissionRequestMembers[];
  option?: UpdatePermissionRequestOption;
  /**
   * @example
   * READER
   */
  roleId?: string;
  tenantContext?: UpdatePermissionRequestTenantContext;
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
      members: { 'type': 'array', 'itemType': UpdatePermissionRequestMembers },
      option: UpdatePermissionRequestOption,
      roleId: 'string',
      tenantContext: UpdatePermissionRequestTenantContext,
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

