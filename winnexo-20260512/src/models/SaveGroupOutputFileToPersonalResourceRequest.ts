// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveGroupOutputFileToPersonalResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise knowledge base directory ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The project group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleGroupId
   */
  groupId?: string;
  /**
   * @remarks
   * itemIds
   * 
   * This parameter is required.
   * 
   * @example
   * ["item-1","item-2"]
   */
  itemIds?: string[];
  /**
   * @remarks
   * The save mode. Valid values:
   * - link: creates a link (1:1 idempotent, editing the output synchronizes the resource).
   * - copy: creates a copy (unlimited times, snapshot).
   * 
   * This parameter is required.
   * 
   * @example
   * copy
   */
  mode?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      groupId: 'groupId',
      itemIds: 'itemIds',
      mode: 'mode',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      groupId: 'string',
      itemIds: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.itemIds)) {
      $dara.Model.validateArray(this.itemIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

