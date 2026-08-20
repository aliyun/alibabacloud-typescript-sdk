// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveOutputFileToResourceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the target personal folder. If not specified, the user\\"s default folder is automatically resolved.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * itemIds
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  itemIdsShrink?: string;
  /**
   * @remarks
   * The save mode. Valid values:
   * - link: Links the resource to the output in a 1:1 idempotent manner. Edits to the output are synchronized to the resource.
   * - copy: Creates a snapshot copy with no limit on the number of copies.
   * 
   * @example
   * link
   */
  mode?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass it explicitly with --tenant-id.
   * 
   * @example
   * string_value
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      itemIdsShrink: 'itemIds',
      mode: 'mode',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
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

