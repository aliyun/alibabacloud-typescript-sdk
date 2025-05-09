// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class ImportCertificateAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -
   */
  certificateFileObject?: Readable;
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
      certificateFileObject: 'CertificateFile',
      description: 'Description',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateFileObject: 'Readable',
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

