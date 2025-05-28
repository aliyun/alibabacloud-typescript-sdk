// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetListResponseBodyResultDataDirectory extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory path.
   * 
   * @example
   * schemaad8aad00-9c55-4984-a767-b4e0ec60****
   */
  id?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * Information about the directory where the dataset is located
   */
  name?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * schemaad8aad00-9c55-4984-a767-b4e0ec60****
   */
  pathId?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * Test a data source
   */
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

