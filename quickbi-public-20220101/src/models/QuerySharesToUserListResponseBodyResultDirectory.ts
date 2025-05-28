// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySharesToUserListResponseBodyResultDirectory extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory where the resource is located.
   * 
   * @example
   * f7f6e22b-83be-47fd-b49d-9ca686a9****
   */
  id?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * Chart Report
   */
  name?: string;
  /**
   * @remarks
   * The path ID of the directory where the resource is located.
   */
  pathId?: string;
  /**
   * @remarks
   * The path name of the directory where the resource is located.
   * 
   * @example
   * Level -1 Directory /Level -2 Directory
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

