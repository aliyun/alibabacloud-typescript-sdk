// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMultiModalEmbeddingRequestInput } from "./GetMultiModalEmbeddingRequestInput";


export class GetMultiModalEmbeddingRequest extends $dara.Model {
  input?: GetMultiModalEmbeddingRequestInput[];
  static names(): { [key: string]: string } {
    return {
      input: 'input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: { 'type': 'array', 'itemType': GetMultiModalEmbeddingRequestInput },
    };
  }

  validate() {
    if(Array.isArray(this.input)) {
      $dara.Model.validateArray(this.input);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

