// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCenterDatabaseRequest extends $dara.Model {
  callFrom?: string;
  /**
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @example
   * FILE
   */
  importType?: string;
  language?: string;
  /**
   * @example
   * testdb
   */
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      callFrom: 'CallFrom',
      dmsUnit: 'DmsUnit',
      importType: 'ImportType',
      language: 'Language',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFrom: 'string',
      dmsUnit: 'string',
      importType: 'string',
      language: 'string',
      searchKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

