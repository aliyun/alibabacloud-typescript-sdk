// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactGroupsResponseBodyContactGroups extends $dara.Model {
  /**
   * @example
   * test
   */
  contactGroupId?: string;
  contactIds?: string[];
  /**
   * @example
   * test
   */
  name?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'contactGroupId',
      contactIds: 'contactIds',
      name: 'name',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'string',
      contactIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contactIds)) {
      $dara.Model.validateArray(this.contactIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactGroupsResponseBody extends $dara.Model {
  contactGroups?: ListContactGroupsResponseBodyContactGroups[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'contactGroups',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: { 'type': 'array', 'itemType': ListContactGroupsResponseBodyContactGroups },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.contactGroups)) {
      $dara.Model.validateArray(this.contactGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

