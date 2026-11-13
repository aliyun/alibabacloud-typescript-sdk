// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadAgentSessionFileResponseBodyJsonRpcResponseError extends $dara.Model {
  /**
   * @example
   * 500
   */
  code?: number;
  /**
   * @example
   * {}
   */
  data?: any;
  /**
   * @example
   * 0x4883300000000019
   */
  errorCode?: string;
  /**
   * @example
   * 会话不存在或当前账号无权访问，请返回会话列表重新选择
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      errorCode: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadAgentSessionFileResponseBodyJsonRpcResponseResultSignature extends $dara.Model {
  /**
   * @example
   * 2026-11-12T09:46:33.477365753Z
   */
  expiresAt?: string;
  /**
   * @example
   * {"Content-Type":"application/octet-stream","Content-MD5":"sZRqySSS0jR8YjW00mERhA==","Content-Length":"6","x-oss-object-acl":"private","x-oss-forbid-overwrite":"true"}
   */
  headers?: { [key: string]: string };
  /**
   * @example
   * https://attachments.example.test/signed
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      expiresAt: 'ExpiresAt',
      headers: 'Headers',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresAt: 'string',
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      url: 'string',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadAgentSessionFileResponseBodyJsonRpcResponseResult extends $dara.Model {
  /**
   * @example
   * bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
   */
  id?: string;
  /**
   * @example
   * sample.csv
   */
  name?: string;
  /**
   * @example
   * upload/session_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.csv
   */
  relativePath?: string;
  signature?: UploadAgentSessionFileResponseBodyJsonRpcResponseResultSignature;
  /**
   * @example
   * 6
   */
  size?: number;
  /**
   * @example
   * bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      relativePath: 'RelativePath',
      signature: 'Signature',
      size: 'Size',
      uploadId: 'UploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      relativePath: 'string',
      signature: UploadAgentSessionFileResponseBodyJsonRpcResponseResultSignature,
      size: 'number',
      uploadId: 'string',
    };
  }

  validate() {
    if(this.signature && typeof (this.signature as any).validate === 'function') {
      (this.signature as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadAgentSessionFileResponseBodyJsonRpcResponse extends $dara.Model {
  error?: UploadAgentSessionFileResponseBodyJsonRpcResponseError;
  /**
   * @example
   * attachment-rpc-001
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
  result?: UploadAgentSessionFileResponseBodyJsonRpcResponseResult;
  /**
   * @example
   * 1789549200000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      result: 'Result',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: UploadAgentSessionFileResponseBodyJsonRpcResponseError,
      id: 'string',
      jsonrpc: 'string',
      result: UploadAgentSessionFileResponseBodyJsonRpcResponseResult,
      timestamp: 'number',
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadAgentSessionFileResponseBody extends $dara.Model {
  jsonRpcResponse?: UploadAgentSessionFileResponseBodyJsonRpcResponse;
  /**
   * @example
   * 01A0B6E0-E005-1465-B5DE-5CD17677426F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jsonRpcResponse: 'JsonRpcResponse',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonRpcResponse: UploadAgentSessionFileResponseBodyJsonRpcResponse,
      requestId: 'string',
    };
  }

  validate() {
    if(this.jsonRpcResponse && typeof (this.jsonRpcResponse as any).validate === 'function') {
      (this.jsonRpcResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

