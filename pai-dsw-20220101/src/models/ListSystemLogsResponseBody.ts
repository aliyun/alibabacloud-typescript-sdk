// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemLogsResponseBodySystemLogs extends $dara.Model {
  /**
   * @example
   * You are using******
   */
  content?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2020-10-08T16:00:00Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * Error。
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gmtCreateTime: 'GmtCreateTime',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreateTime: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemLogsResponseBody extends $dara.Model {
  offset?: string;
  systemLogs?: ListSystemLogsResponseBodySystemLogs[];
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      systemLogs: 'SystemLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'string',
      systemLogs: { 'type': 'array', 'itemType': ListSystemLogsResponseBodySystemLogs },
    };
  }

  validate() {
    if(Array.isArray(this.systemLogs)) {
      $dara.Model.validateArray(this.systemLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

