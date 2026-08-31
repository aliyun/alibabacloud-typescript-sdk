// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDataSourceFileRequestUploadCommand extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded file content. The decoded file size must be between 0 and 5 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * a2V5dGFiIGNvbnRlbnQ=
   */
  fileContentBase64?: string;
  /**
   * @remarks
   * The file name, including the extension. The extension is validated against a whitelist. Supported extensions: jar, xml, conf, keytab, jks, rsa, pem, yaml, keystore, properties, and key.
   * 
   * This parameter is required.
   * 
   * @example
   * user.keytab
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileContentBase64: 'FileContentBase64',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContentBase64: 'string',
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

export class UploadDataSourceFileRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The request object for uploading a datasource authentication file.
   * 
   * This parameter is required.
   */
  uploadCommand?: UploadDataSourceFileRequestUploadCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      uploadCommand: 'UploadCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      uploadCommand: UploadDataSourceFileRequestUploadCommand,
    };
  }

  validate() {
    if(this.uploadCommand && typeof (this.uploadCommand as any).validate === 'function') {
      (this.uploadCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

