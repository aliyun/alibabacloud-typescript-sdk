// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailListPreCheckDetailList extends $dara.Model {
  /**
   * @remarks
   * The estimated number of data rows to be affected.
   * 
   * @example
   * 1
   */
  affectRows?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * SELECT * FROM tmp_table LIMIT 1
   */
  SQL?: string;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      SQL: 'SQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      SQL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

