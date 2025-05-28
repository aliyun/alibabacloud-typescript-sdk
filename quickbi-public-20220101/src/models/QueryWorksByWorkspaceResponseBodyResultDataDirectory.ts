// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorksByWorkspaceResponseBodyResultDataDirectory extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  id?: string;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * The name of the directory.
   */
  name?: string;
  /**
   * @remarks
   * The hierarchical structure of the directory ID to which the directory belongs. Separate the hierarchical structure with a /.
   * 
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  pathId?: string;
  /**
   * @remarks
   * The hierarchical structure of the directory to which the directory belongs. Separate the hierarchical structure with a (/).
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

