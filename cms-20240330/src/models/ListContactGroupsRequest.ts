// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The contact group IDs.
   */
  contactGroupIds?: string[];
  /**
   * @remarks
   * The name of the contact group.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The page number. The default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. The default is 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupIds: 'contactGroupIds',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contactGroupIds)) {
      $dara.Model.validateArray(this.contactGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

