// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageAnalyzeTaskRequestDocument extends $dara.Model {
  content?: string;
  fileName?: string;
  fileType?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      fileName: 'file_name',
      fileType: 'file_type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
      fileType: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

