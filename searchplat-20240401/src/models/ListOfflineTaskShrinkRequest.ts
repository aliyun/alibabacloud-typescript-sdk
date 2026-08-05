// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOfflineTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of task labels.
   */
  labelsShrink?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 0
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * syh
   */
  taskName?: string;
  /**
   * @remarks
   * The task status.
   */
  taskStatusShrink?: string;
  static names(): { [key: string]: string } {
    return {
      labelsShrink: 'labels',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      regionId: 'regionId',
      taskName: 'taskName',
      taskStatusShrink: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      taskName: 'string',
      taskStatusShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

