// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTasksRequestSorter extends $dara.Model {
  /**
   * @example
   * desc
   */
  startTime?: string;
  /**
   * @example
   * asc
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
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

