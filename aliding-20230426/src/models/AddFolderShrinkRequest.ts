// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFolderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  optionShrink?: string;
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
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      optionShrink: 'Option',
      parentId: 'ParentId',
      spaceId: 'SpaceId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      optionShrink: 'string',
      parentId: 'string',
      spaceId: 'string',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

