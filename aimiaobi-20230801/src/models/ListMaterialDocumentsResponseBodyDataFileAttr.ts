// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMaterialDocumentsResponseBodyDataFileAttr extends $dara.Model {
  duration?: number;
  fileLength?: number;
  fileName?: string;
  height?: number;
  mimeType?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      fileLength: 'FileLength',
      fileName: 'FileName',
      height: 'Height',
      mimeType: 'MimeType',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      fileLength: 'number',
      fileName: 'string',
      height: 'number',
      mimeType: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

