// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModulesShrinkRequest extends $dara.Model {
  groupId?: string;
  /**
   * @example
   * key
   */
  keyword?: string;
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

