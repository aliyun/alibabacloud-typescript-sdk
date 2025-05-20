// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentRankResponseBodyUsage extends $dara.Model {
  docCount?: number;
  static names(): { [key: string]: string } {
    return {
      docCount: 'doc_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

