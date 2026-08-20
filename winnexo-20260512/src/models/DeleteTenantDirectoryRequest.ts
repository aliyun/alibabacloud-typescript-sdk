// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTenantDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The deletion mode: reject / recursive / move_to_root.
   * 
   * @example
   * reject
   */
  deleteMode?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The tenant ID that takes effect.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteMode: 'deleteMode',
      directoryId: 'directoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteMode: 'string',
      directoryId: 'string',
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

