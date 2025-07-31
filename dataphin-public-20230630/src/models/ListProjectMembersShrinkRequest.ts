// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectMembersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1030111021
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1030111021
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

