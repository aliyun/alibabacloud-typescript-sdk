// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMailTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * - Starts from: 1
   * 
   * - Default value: 1
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * - Default value: 25
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the tracking task is paused.
   * 
   * @example
   * true
   */
  paused?: boolean;
  /**
   * @remarks
   * The nickname of the user who owns the tracking task. If this parameter is not specified, all tasks are returned.
   * 
   * @example
   * test
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      paused: 'Paused',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      paused: 'boolean',
      userNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

