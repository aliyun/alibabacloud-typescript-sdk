// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeListPocRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * task1
   */
  taskName?: string;
  /**
   * @remarks
   * The execution status of the import task. Valid values:
   * - DOING: running
   * - FINISH: completed.
   * 
   * @example
   * DOING
   */
  taskStatus?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * SAF_CONSOLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      regId: 'RegId',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      regId: 'string',
      taskName: 'string',
      taskStatus: 'string',
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

