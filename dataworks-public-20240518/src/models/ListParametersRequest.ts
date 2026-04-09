// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParametersRequest extends $dara.Model {
  ids?: number[];
  names?: string[];
  /**
   * @example
   * 123456789
   */
  owner?: string;
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
  /**
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @example
   * Project
   */
  scope?: string;
  /**
   * @example
   * ModifyTime Desc
   */
  sortBy?: string;
  /**
   * @example
   * PlainConstant
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      names: 'Names',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      scope: 'Scope',
      sortBy: 'SortBy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
      names: { 'type': 'array', 'itemType': 'string' },
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      scope: 'string',
      sortBy: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    if(Array.isArray(this.names)) {
      $dara.Model.validateArray(this.names);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

