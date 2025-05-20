// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentSplitRequestStrategy extends $dara.Model {
  computeType?: string;
  maxChunkSize?: number;
  needSentence?: boolean;
  static names(): { [key: string]: string } {
    return {
      computeType: 'compute_type',
      maxChunkSize: 'max_chunk_size',
      needSentence: 'need_sentence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeType: 'string',
      maxChunkSize: 'number',
      needSentence: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

