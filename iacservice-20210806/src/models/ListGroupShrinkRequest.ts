// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupShrinkRequest extends $dara.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 200
   */
  pageSize?: string;
  /**
   * @example
   * p-14e80de4866bf7ffed0c4072ed9b37
   */
  projectId?: string;
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectId: 'projectId',
      tagShrink: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'string',
      pageSize: 'string',
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

