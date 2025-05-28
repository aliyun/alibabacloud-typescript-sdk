// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetInfoResponseBodyResultDirectory extends $dara.Model {
  /**
   * @remarks
   * Test directory
   * 
   * @example
   * a3eecab7-618d-4f9f-*****
   */
  id?: string;
  /**
   * @remarks
   * Test directory
   * 
   * @example
   * The name of the directory.
   */
  name?: string;
  /**
   * @remarks
   * The information about the directory to which the dataset belongs.
   * 
   * @example
   * 88b680****
   */
  pathId?: string;
  /**
   * @remarks
   * The path of the directory ID, for example, aa/bb/cc/dd.
   * 
   * @example
   * The path name of the directory ID, for example, one-level directory /two-level directory.
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

