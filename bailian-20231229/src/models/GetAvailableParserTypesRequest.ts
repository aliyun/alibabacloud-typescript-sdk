// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAvailableParserTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The file type (extension) for which to retrieve supported parsers. Valid values: 
   * - doc
   * - docx
   * - ppt
   * - pptx
   * - xls
   * - xlsx
   * - md
   * - txt
   * - pdf
   * - png
   * - jpg
   * - jpeg
   * - bmp
   * - gif
   * - html
   * 
   * This parameter is required.
   * 
   * @example
   * pdf
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

