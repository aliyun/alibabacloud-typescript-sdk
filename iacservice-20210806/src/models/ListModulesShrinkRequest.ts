// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * g-kw1a50tj8rk7cki2q8bbat
   */
  groupId?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported for template names.
   * 
   * @example
   * key
   */
  keyword?: string;
  moduleName?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results per page. Default value: 20. Minimum value: 1. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * p-al1c58tb2lu9oej36kclvf
   */
  projectId?: string;
  /**
   * @remarks
   * The list of template tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      keyword: 'keyword',
      moduleName: 'moduleName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectId: 'projectId',
      tagShrink: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      keyword: 'string',
      moduleName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

