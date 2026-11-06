// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMcpCodePackageUploadUrlRequestBody extends $dara.Model {
  /**
   * @remarks
   * The file name of the ZIP code package.
   * 
   * This parameter is required.
   * 
   * @example
   * server.zip
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpCodePackageUploadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: GetMcpCodePackageUploadUrlRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetMcpCodePackageUploadUrlRequestBody,
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

