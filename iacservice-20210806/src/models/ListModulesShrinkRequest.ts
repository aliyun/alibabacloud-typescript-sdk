// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModulesShrinkRequest extends $dara.Model {
  groupId?: string;
  /**
   * @example
   * key
   */
  keyword?: string;
  moduleName?: string;
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
  projectId?: string;
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

