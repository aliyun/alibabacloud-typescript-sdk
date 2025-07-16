// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFolderRequestOptionAppProperties extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * value
   */
  value?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PUBLIC
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFolderRequestOption extends $dara.Model {
  appProperties?: AddFolderRequestOptionAppProperties[];
  /**
   * @example
   * AUTO_RENAME
   */
  conflictStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      appProperties: 'AppProperties',
      conflictStrategy: 'ConflictStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appProperties: { 'type': 'array', 'itemType': AddFolderRequestOptionAppProperties },
      conflictStrategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appProperties)) {
      $dara.Model.validateArray(this.appProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFolderRequestTenantContext extends $dara.Model {
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

export class AddFolderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  option?: AddFolderRequestOption;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 140822073803
   */
  parentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xPar2SZ63KodG3aV
   */
  spaceId?: string;
  tenantContext?: AddFolderRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      option: 'Option',
      parentId: 'ParentId',
      spaceId: 'SpaceId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      option: AddFolderRequestOption,
      parentId: 'string',
      spaceId: 'string',
      tenantContext: AddFolderRequestTenantContext,
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

