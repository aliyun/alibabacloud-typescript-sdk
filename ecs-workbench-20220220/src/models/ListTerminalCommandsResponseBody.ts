// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTerminalCommandsResponseBodyTerminalCommandList extends $dara.Model {
  /**
   * @example
   * ls
   */
  commandLine?: string;
  /**
   * @example
   * 2024-04-16T03:53:18Z
   */
  createTime?: string;
  /**
   * @example
   * /root
   */
  executePath?: string;
  /**
   * @example
   * root
   */
  loginUser?: string;
  static names(): { [key: string]: string } {
    return {
      commandLine: 'CommandLine',
      createTime: 'CreateTime',
      executePath: 'ExecutePath',
      loginUser: 'LoginUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandLine: 'string',
      createTime: 'string',
      executePath: 'string',
      loginUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTerminalCommandsResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  terminalCommandList?: ListTerminalCommandsResponseBodyTerminalCommandList[];
  /**
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      terminalCommandList: 'TerminalCommandList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      terminalCommandList: { 'type': 'array', 'itemType': ListTerminalCommandsResponseBodyTerminalCommandList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.terminalCommandList)) {
      $dara.Model.validateArray(this.terminalCommandList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

