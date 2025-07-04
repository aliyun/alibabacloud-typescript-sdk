// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceTasksResponseBodyResultTaskNodes extends $dara.Model {
  /**
   * @remarks
   * The time when the task was complete.
   * 
   * @example
   * ""
   */
  finishDate?: string;
  /**
   * @remarks
   * The ordinal number of the task.
   * 
   * @example
   * 100
   */
  index?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * ha-cn-7pp2ngv4s02_qrs
   */
  name?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * onlyPublished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      finishDate: 'finishDate',
      index: 'index',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishDate: 'string',
      index: 'number',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

