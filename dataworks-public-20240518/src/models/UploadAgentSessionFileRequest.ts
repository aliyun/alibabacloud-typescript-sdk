// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadAgentSessionFileRequestParams extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b1946ac92492d2347c6235b4d2611184
   */
  contentMd5?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sample.csv
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * session
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6
   */
  size?: number;
  /**
   * @example
   * bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
   */
  uploadId?: string;
  /**
   * @remarks
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
   * @example
   * attachment-rpc-001
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
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

