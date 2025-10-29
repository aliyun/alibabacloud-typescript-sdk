// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadPolicyResponseBodyDataOssPolicy extends $dara.Model {
  /**
   * @remarks
   * accessId。
   * 
   * @example
   * LTBI5123ADDJdsadCidYA8kw3
   */
  accessId?: string;
  /**
   * @example
   * material/INPUT_CHAT_BACKGROUND_PIC/Mt.CPQHBSWQS5QU2/
   */
  dir?: string;
  /**
   * @example
   * 1761551667
   */
  expire?: string;
  /**
   * @example
   * daily-avatar-property.oss-cn-beijing.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNS0wMi0yNVQwMzowMDoyNC4xNDNaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNTM2ODcwOTEyMF0sWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJ0ZW1wXC8xNzQwNDQ4ODI0MTQxLnppcCJdXX0=
   */
  policy?: string;
  /**
   * @example
   * I2KcV3CFloyRr94WhefmVEuNiv0=
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'accessId',
      dir: 'dir',
      expire: 'expire',
      host: 'host',
      policy: 'policy',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadPolicyResponseBodyData extends $dara.Model {
  /**
   * @example
   * material/INPUT_CHAT_BACKGROUND_PIC/Mt.CPQHBSWQS5QU2
   */
  ossKey?: string;
  ossPolicy?: GetUploadPolicyResponseBodyDataOssPolicy;
  static names(): { [key: string]: string } {
    return {
      ossKey: 'ossKey',
      ossPolicy: 'ossPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossKey: 'string',
      ossPolicy: GetUploadPolicyResponseBodyDataOssPolicy,
    };
  }

  validate() {
    if(this.ossPolicy && typeof (this.ossPolicy as any).validate === 'function') {
      (this.ossPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetUploadPolicyResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 90C68329-A75C-5449-A928-4D0BAD7AA0FA
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetUploadPolicyResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

