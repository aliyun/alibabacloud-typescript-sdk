// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -
   */
  certificateFile?: string;
  /**
   * @example
   * This is a file
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ca1.crt
   */
  name?: string;
  /**
   * @remarks
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

