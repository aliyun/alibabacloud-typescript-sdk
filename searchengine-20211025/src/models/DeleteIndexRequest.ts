// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The data source.
   * 
   * This parameter is required.
   * 
   * @example
   * ha-cn-pl32rf0js04_test
   */
  dataSource?: string;
  /**
   * @remarks
   * Specifies whether to delete the data source.
   * 
   * @example
   * true
   */
  deleteDataSource?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'dataSource',
      deleteDataSource: 'deleteDataSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: 'string',
      deleteDataSource: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

