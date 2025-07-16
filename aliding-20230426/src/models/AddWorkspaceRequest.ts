// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorkspaceRequestOption extends $dara.Model {
  description?: string;
  /**
   * @example
   * lHiicjNFM2iSFYSdz2iPuI8ZwiEiE
   */
  teamId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      teamId: 'TeamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      teamId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceRequestTenantContext extends $dara.Model {
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

export class AddWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  option?: AddWorkspaceRequestOption;
  tenantContext?: AddWorkspaceRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      option: 'Option',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      option: AddWorkspaceRequestOption,
      tenantContext: AddWorkspaceRequestTenantContext,
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

