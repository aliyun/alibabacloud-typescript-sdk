// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceTestTaskLogsResponseBodyTaskLogs extends $dara.Model {
  /**
   * @remarks
   * The log content.
   * 
   * @example
   * log content
   */
  content?: string;
  /**
   * @remarks
   * The UTC timestamp when the response is returned.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-12-12T20:00:09Z
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

