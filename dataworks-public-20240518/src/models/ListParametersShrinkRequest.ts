// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParametersShrinkRequest extends $dara.Model {
  idsShrink?: string;
  namesShrink?: string;
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
      idsShrink: 'Ids',
      namesShrink: 'Names',
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
      idsShrink: 'string',
      namesShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

