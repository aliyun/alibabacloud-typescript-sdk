// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate file to upload. Upload method: Upload the file by creating an InputStream.
   * 
   * This parameter is required.
   * 
   * @example
   * -
   */
  certificateFile?: string;
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * This is a file
   */
  description?: string;
  /**
   * @remarks
   * The certificate file name. In a project workspace, certificate file names must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * ca1.crt
   */
  name?: string;
  /**
   * @remarks
   * The ID of the workspace to which the certificate file belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 106560
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      certificateFile: 'CertificateFile',
      description: 'Description',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateFile: 'string',
      description: 'string',
      name: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

