// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBucketsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the OSS file.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * docx
   */
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

