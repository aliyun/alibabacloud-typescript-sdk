// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadAgentSessionFileResponseBodyJsonRpcResponseError extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC error code.
   * 
   * @example
   * 400
   */
  code?: number;
  /**
   * @remarks
   * The optional additional error information. The content depends on the error type.
   * 
   * @example
   * {}
   */
  data?: any;
  /**
   * @remarks
   * The business error code.
   * 
   * @example
   * SESSION_ATTACHMENT_OBJECT_MISMATCH
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * SESSION_ATTACHMENT_OBJECT_MISMATCH
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
   * @remarks
   * The expiration time of the current upload signature in ISO 8601 UTC string format. The trailing Z indicates UTC, and fractional seconds may be included. The signature is valid for 5 minutes. Signature expiration does not indicate that the staged object has been deleted.
   * 
   * @example
   * 2026-11-12T09:46:33.477365753Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * All signed request headers that must be included in the PUT request. The names and values must be used exactly as provided. This includes Content-Type, Content-MD5, Content-Length, x-oss-object-acl, and x-oss-forbid-overwrite.
   * 
   * @example
   * {"Content-Type":"application/octet-stream","Content-MD5":"sZRqySSS0jR8YjW00mERhA==","Content-Length":"6","x-oss-object-acl":"private","x-oss-forbid-overwrite":"true"}
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The complete signed HTTPS PUT URL returned by prepare, which must be used exactly as provided for the upload. The example displayed for this field does not contain a valid signature. The actual request must use the complete signed URL returned by the current prepare call.
   * 
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
   * @remarks
   * The attachment identifier.
   * 
   * @example
   * bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
   */
  id?: string;
  /**
   * @remarks
   * The original file name.
   * 
   * @example
   * sample.csv
   */
  name?: string;
  /**
   * @remarks
   * The relative path in the session working directory.
   * 
   * @example
   * upload/session_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.csv
   */
  relativePath?: string;
  /**
   * @remarks
   * The time-limited object storage signature returned by prepare.
   */
  signature?: UploadAgentSessionFileResponseBodyJsonRpcResponseResultSignature;
  /**
   * @remarks
   * The number of file bytes saved in the instance.
   * 
   * @example
   * 6
   */
  size?: number;
  /**
   * @remarks
   * The staged upload identifier issued by prepare.
   * 
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
  /**
   * @remarks
   * The JSON-RPC fault message. This field is not returned on success.
   */
  error?: UploadAgentSessionFileResponseBodyJsonRpcResponseError;
  /**
   * @remarks
   * The JSON-RPC correlation identifier for the current request, which is passed by the caller and returned as is.
   * 
   * @example
   * attachment-rpc-001
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC protocol version.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * Issues the staged upload URL or returns the attachment information after writing to the instance.
   */
  result?: UploadAgentSessionFileResponseBodyJsonRpcResponseResult;
  /**
   * @remarks
   * The response time as a UNIX timestamp in milliseconds.
   * 
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
  /**
   * @remarks
   * The JSON-RPC response. Returns Result on success and Error on protocol errors.
   */
  jsonRpcResponse?: UploadAgentSessionFileResponseBodyJsonRpcResponse;
  /**
   * @remarks
   * The server correlation ID for the current request. You can provide this value for troubleshooting.
   * 
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

