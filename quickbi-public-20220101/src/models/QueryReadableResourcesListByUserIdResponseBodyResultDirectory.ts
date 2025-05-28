// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReadableResourcesListByUserIdResponseBodyResultDirectory extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * e4276ea5-b232-4fb1-8f0f-efcee4a2****
   */
  id?: string;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * Test directory
   */
  name?: string;
  /**
   * @remarks
   * The hierarchical structure of the directory ID, which is separated with \\"/\\".
   * 
   * @example
   * e4276ea5-b232-4fb1-8f0f-efcee4a2****
   */
  pathId?: string;
  /**
   * @remarks
   * The hierarchical structure of the directory name, which is separated with \\"/\\".
   * 
   * @example
   * Test directory
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

