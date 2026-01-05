// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFileUploadRequest extends $dara.Model {
  /**
   * @example
   * TrailCenter
   */
  callFrom?: string;
  /**
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @remarks
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

