// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateAgentCodePackageFromOssRequestBody extends $dara.Model {
  /**
   * @remarks
   * The name of the source OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent-bucket
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The full object key of the source code package.
   * 
   * This parameter is required.
   * 
   * @example
   * packages/main.zip
   */
  ossObjectName?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucketName: 'ossBucketName',
      ossObjectName: 'ossObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucketName: 'string',
      ossObjectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateAgentCodePackageFromOssRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   * 
   * This parameter is required.
   */
  body?: ValidateAgentCodePackageFromOssRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ValidateAgentCodePackageFromOssRequestBody,
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

