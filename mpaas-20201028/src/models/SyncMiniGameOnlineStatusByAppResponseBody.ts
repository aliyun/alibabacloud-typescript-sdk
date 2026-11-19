// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncMiniGameOnlineStatusByAppResponseBodyContent extends $dara.Model {
  currentOnlineStatus?: number;
  miniProgramCode?: string;
  statusChanged?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentOnlineStatus: 'CurrentOnlineStatus',
      miniProgramCode: 'MiniProgramCode',
      statusChanged: 'StatusChanged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentOnlineStatus: 'number',
      miniProgramCode: 'string',
      statusChanged: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMiniGameOnlineStatusByAppResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  content?: SyncMiniGameOnlineStatusByAppResponseBodyContent;
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      content: 'Content',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      content: SyncMiniGameOnlineStatusByAppResponseBodyContent,
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

