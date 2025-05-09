// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobRequestJobSettingsDdlHandlingSettings extends $dara.Model {
  /**
   * @remarks
   * The processing policy. Valid values:
   * 
   * *   Ignore: ignores a DDL message.
   * *   Critical: reports an error for a DDL message.
   * *   Normal: normally processes a DDL message.
   * 
   * @example
   * Critical
   */
  action?: string;
  /**
   * @remarks
   * The type of the DDL operation. Valid values:
   * 
   * *   RenameColumn
   * *   ModifyColumn
   * *   CreateTable
   * *   TruncateTable
   * *   DropTable
   * *   DropColumn
   * *   AddColumn
   * 
   * @example
   * AddColumn
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

