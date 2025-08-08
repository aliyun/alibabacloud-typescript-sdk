// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLinkResponseBodyResultContent extends $dara.Model {
  /**
   * @example
   * {
   *             "Modified": "2024-04-29 16:35:55",
   *             "NeedRenderEvent": false,
   *             "WorkspaceId": "default",
   *             "Cors": false,
   *             "Url": "https://xxx/xxx",
   *             "Created": "2024-04-29 16:35:55",
   *             "LastModified": "2024-04-29 16:35:55",
   *             "Target": "http://xxx/test.html",
   *             "Dynamictarget": "",
   *             "AppId": "BB5953C300957",
   *             "Version": 0,
   *             "Traceid": "f6c95f06891a19ff2d896ea309581883",
   *             "Domain": "u.aliyuncs.com"
   *         }
   */
  data?: any;
  /**
   * @example
   * https://xxx/xxx/xxx
   */
  target?: string;
  /**
   * @example
   * 0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      target: 'Target',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      target: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D9B3C4E7-BEC7-1E2C-86A3-EA985B4FFD73
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  resultCode?: string;
  resultContent?: QueryLinkResponseBodyResultContent;
  /**
   * @example
   * success
   */
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryLinkResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.resultContent && typeof (this.resultContent as any).validate === 'function') {
      (this.resultContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

