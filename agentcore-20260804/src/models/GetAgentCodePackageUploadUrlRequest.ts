// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentCodePackageUploadUrlRequestBody extends $dara.Model {
  /**
   * @remarks
   * The filename of the code package.
   * 
   * This parameter is required.
   * 
   * @example
   * main.zip
   */
  fileName?: string;
  /**
   * @remarks
   * The declared compressed size of the code package.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  fileSize?: number;
  /**
   * @remarks
   * The format of the code package.
   * 
   * This parameter is required.
   * 
   * @example
   * zip
   */
  format?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      fileSize: 'fileSize',
      format: 'format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSize: 'number',
      format: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentCodePackageUploadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   * 
   * This parameter is required.
   */
  body?: GetAgentCodePackageUploadUrlRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetAgentCodePackageUploadUrlRequestBody,
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

