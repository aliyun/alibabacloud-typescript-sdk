// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksShrinkRequest extends $dara.Model {
  /**
   * @example
   * g-59d8d22e78792ffe3d3eb6154d727
   */
  groupId?: string;
  /**
   * @example
   * key
   */
  keyword?: string;
  /**
   * @example
   * mod-1525e992f1b62139d1c437d64ae
   */
  moduleId?: string;
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
   * p-433aead7560572f8d95b25775c
   */
  projectId?: string;
  status?: string;
  tagShrink?: string;
  /**
   * @example
   * task-433aead756057fffeaba4828f5195
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      keyword: 'keyword',
      moduleId: 'moduleId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectId: 'projectId',
      status: 'status',
      tagShrink: 'tag',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      keyword: 'string',
      moduleId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      status: 'string',
      tagShrink: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

