// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadAgentSessionFileRequestParams extends $dara.Model {
  /**
   * @remarks
   * The MD5 hash of the original bytes in 32-character lowercase hexadecimal format. This parameter is required for both prepare and complete, and the values must be consistent.
   * 
   * This parameter is required.
   * 
   * @example
   * b1946ac92492d2347c6235b4d2611184
   */
  contentMd5?: string;
  /**
   * @remarks
   * The original file name. The maximum length is 255 bytes in UTF-8 encoding.
   * 
   * This parameter is required.
   * 
   * @example
   * sample.csv
   */
  name?: string;
  /**
   * @remarks
   * The ID of the target agent session.
   * 
   * This parameter is required.
   * 
   * @example
   * session
   */
  sessionId?: string;
  /**
   * @remarks
   * The number of original bytes. Valid values: 1 to 10485760 (10 MiB). This parameter is required for both prepare and complete, and the values must be consistent.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  size?: number;
  /**
   * @remarks
   * The upload identifier returned by prepare. This parameter is required when UploadMode is set to complete.
   * 
   * @example
   * bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
   */
  uploadId?: string;
  /**
   * @remarks
   * The required upload stage. The prepare step issues a public OSS PUT URL without starting a cold session instance. The complete step resumes the session and allows the runtime to download the file.
   * 
   * This parameter is required.
   * 
   * @example
   * prepare
   */
  uploadMode?: string;
  static names(): { [key: string]: string } {
    return {
      contentMd5: 'ContentMd5',
      name: 'Name',
      sessionId: 'SessionId',
      size: 'Size',
      uploadId: 'UploadId',
      uploadMode: 'UploadMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentMd5: 'string',
      name: 'string',
      sessionId: 'string',
      size: 'number',
      uploadId: 'string',
      uploadMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadAgentSessionFileRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON-RPC correlation identifier for the current request. The Id in the response returns this value as is to correlate the request and response.
   * 
   * @example
   * attachment-rpc-001
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC protocol version. The example uses 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The parameter object for the upload stage. The prepare step issues the upload URL, and the complete step confirms that the file has been written to the target session instance.
   * 
   * This parameter is required.
   */
  params?: UploadAgentSessionFileRequestParams;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      jsonrpc: 'string',
      params: UploadAgentSessionFileRequestParams,
    };
  }

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

