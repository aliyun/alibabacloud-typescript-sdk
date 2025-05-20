// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentAnalyzeTaskStatusResponseBodyUsage extends $dara.Model {
  imageCount?: number;
  tableCount?: number;
  tokenCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageCount: 'image_count',
      tableCount: 'table_count',
      tokenCount: 'token_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCount: 'number',
      tableCount: 'number',
      tokenCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

