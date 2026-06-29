// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUdfRequest extends $dara.Model {
  /**
   * @remarks
   * The user-defined function ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1123
   */
  id?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1030111021
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

