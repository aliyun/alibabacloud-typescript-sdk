// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadAgentSpecViaOssRequestBody extends $dara.Model {
  /**
   * @remarks
   * The OSS object name (full path).
   * 
   * This parameter is required.
   * 
   * @example
   * agentspec/export/user1/ns1/2024-01-01/uuid/123456.zip
   */
  ossObjectName?: string;
  /**
   * @remarks
   * Specifies whether to overwrite existing drafts. Default value: false.
   * 
   * @example
   * false
   */
  overwrite?: boolean;
  /**
   * @remarks
   * Specifies whether to publish immediately after upload. Default value: false.
   * 
   * @example
   * false
   */
  publish?: boolean;
  static names(): { [key: string]: string } {
    return {
      ossObjectName: 'ossObjectName',
      overwrite: 'overwrite',
      publish: 'publish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossObjectName: 'string',
      overwrite: 'boolean',
      publish: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadAgentSpecViaOssRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UploadAgentSpecViaOssRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UploadAgentSpecViaOssRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

