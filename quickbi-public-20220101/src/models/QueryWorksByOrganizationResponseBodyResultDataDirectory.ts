// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorksByOrganizationResponseBodyResultDataDirectory extends $dara.Model {
  /**
   * @remarks
   * ID of the directory to which it belongs.
   * 
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  id?: string;
  /**
   * @remarks
   * Name of the directory to which it belongs.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Hierarchical structure of the directory ID, separated by『/』.
   * 
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  pathId?: string;
  /**
   * @remarks
   * Hierarchical structure of the directory name, separated by『/』.
   * 
   * @example
   * Attention
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

