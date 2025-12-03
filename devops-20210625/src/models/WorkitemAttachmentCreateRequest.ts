// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WorkitemAttachmentCreateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1106473328927498/1106473328927498/5ec071g0e5ij85fche8cddchje.xlsx
   */
  fileKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx.tgz
   */
  originalFilename?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'fileKey',
      originalFilename: 'originalFilename',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      originalFilename: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

