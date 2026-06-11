// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFileUploadRequest extends $dara.Model {
  /**
   * @remarks
   * Used by frontend only
   * 
   * @example
   * TrailCenter
   */
  callFrom?: string;
  /**
   * @remarks
   * Current DMS unit
   * 
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @remarks
   * File ID
   * 
   * This parameter is required.
   * 
   * @example
   * f-8*******01m
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      callFrom: 'CallFrom',
      dmsUnit: 'DmsUnit',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFrom: 'string',
      dmsUnit: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

