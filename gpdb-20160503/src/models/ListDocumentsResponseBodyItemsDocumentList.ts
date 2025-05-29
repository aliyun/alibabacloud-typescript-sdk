// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocumentsResponseBodyItemsDocumentList extends $dara.Model {
  /**
   * @remarks
   * The name of the document.
   * 
   * @example
   * music.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The source of the document.
   * 
   * @example
   * http://oss.xxx/music.txt
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

