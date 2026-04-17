// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactGroupsRequest extends $dara.Model {
  contactGroupIds?: string[];
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
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

