// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBucketsRequest extends $dara.Model {
  /**
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

