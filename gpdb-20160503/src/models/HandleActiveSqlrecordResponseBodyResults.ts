// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleActiveSQLRecordResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The process ID, which is a unique identifier of the query.
   * 
   * @example
   * 3003925
   */
  pid?: string;
  /**
   * @remarks
   * Indicates whether the processing was successful. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
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

