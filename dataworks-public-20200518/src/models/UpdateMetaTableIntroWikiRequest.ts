// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetaTableIntroWikiRequest extends $dara.Model {
  /**
   * @remarks
   * The details of the instructions on how to use the metatable.
   * 
   * This parameter is required.
   * 
   * @example
   * abc
   */
  content?: string;
  /**
   * @remarks
   * The GUID of the table. Specify the GUID in the odps.{projectName}.{tableName} format.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.test.table1
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      tableGuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

