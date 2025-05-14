// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddFolderRequestOption } from "./AddFolderRequestOption";
import { AddFolderRequestTenantContext } from "./AddFolderRequestTenantContext";


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

