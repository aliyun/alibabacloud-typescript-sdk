// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSessionListResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 0
   */
  action?: string;
  /**
   * @example
   * 2019-06-06 00:00:00
   */
  captureTime?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  clientIp?: string;
  clientIpAlias?: string;
  /**
   * @example
   * 00163E06****
   */
  clientMac?: string;
  /**
   * @example
   * administrator
   */
  clientOsUser?: string;
  /**
   * @example
   * 15629
   */
  clientPort?: number;
  /**
   * @example
   * navicat
   */
  clientProgram?: string;
  /**
   * @example
   * 1
   */
  dbId?: number;
  /**
   * @example
   * root
   */
  dbUser?: string;
  /**
   * @example
   * 0
   */
  loginCode?: number;
  /**
   * @example
   * Access denied for user \\"root\\"@\\"192.168.XX.XX\\"(using password: YES)
   */
  loginMessage?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  serverIp?: string;
  /**
   * @example
   * 00163E06****
   */
  serverMac?: string;
  /**
   * @example
   * 3306
   */
  serverPort?: number;
  /**
   * @example
   * 3011610850021000000
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      captureTime: 'CaptureTime',
      clientIp: 'ClientIp',
      clientIpAlias: 'ClientIpAlias',
      clientMac: 'ClientMac',
      clientOsUser: 'ClientOsUser',
      clientPort: 'ClientPort',
      clientProgram: 'ClientProgram',
      dbId: 'DbId',
      dbUser: 'DbUser',
      loginCode: 'LoginCode',
      loginMessage: 'LoginMessage',
      serverIp: 'ServerIp',
      serverMac: 'ServerMac',
      serverPort: 'ServerPort',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      captureTime: 'string',
      clientIp: 'string',
      clientIpAlias: 'string',
      clientMac: 'string',
      clientOsUser: 'string',
      clientPort: 'number',
      clientProgram: 'string',
      dbId: 'number',
      dbUser: 'string',
      loginCode: 'number',
      loginMessage: 'string',
      serverIp: 'string',
      serverMac: 'string',
      serverPort: 'number',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionListResponseBody extends $dara.Model {
  /**
   * @example
   * 2019-06-06 00:00:00
   */
  beginDate?: string;
  /**
   * @example
   * 2019-06-06 23:59:59
   */
  endDate?: string;
  /**
   * @example
   * true
   */
  incomplete?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1B217656-2267-4FBF-B26C-CDD201BDC3B8
   */
  requestId?: string;
  results?: GetSessionListResponseBodyResults[];
  /**
   * @example
   * 10000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      incomplete: 'Incomplete',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      results: 'Results',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      incomplete: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': GetSessionListResponseBodyResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

