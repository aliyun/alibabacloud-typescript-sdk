// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveGroupOutputFileToGroupResourceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the target personal directory. If not specified, the user\\"s default directory is automatically resolved.
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
  itemIdsShrink?: string;
  /**
   * @remarks
   * The save mode. Valid values:
   * - link: creates a link (1:1 idempotent, editing the output synchronizes the resource).
   * - copy: creates a copy (unlimited times, snapshot).
   * 
   * This parameter is required.
   * 
   * @example
   * link
   */
  mode?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass this value explicitly by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      groupId: 'groupId',
      itemIdsShrink: 'itemIds',
      mode: 'mode',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      groupId: 'string',
      itemIdsShrink: 'string',
      mode: 'string',
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

