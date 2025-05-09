// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDIJobResponseBodyPagingInfoJobSettingsDdlHandlingSettings extends $dara.Model {
  /**
   * @remarks
   * The processing policy for a specific type of DDL message. Valid values:
   * 
   * *   Ignore: ignores a DDL message.
   * *   Critical: reports an error for a DDL message.
   * *   Normal: normally processes a DDL message.
   * 
   * @example
   * Ignore
   */
  action?: string;
  /**
   * @remarks
   * The DDL operation type. Valid values:
   * 
   * *   RenameColumn
   * *   ModifyColumn
   * *   CreateTable
   * *   TruncateTable
   * *   DropTable
   * 
   * @example
   * CreateTable
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

