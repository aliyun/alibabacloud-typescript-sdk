// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableIntroWikiRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.engine_name.table_name
   */
  tableGuid?: string;
  /**
   * @remarks
   * The version of the usage instructions.
   * 
   * @example
   * 1
   */
  wikiVersion?: number;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      wikiVersion: 'WikiVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      wikiVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

