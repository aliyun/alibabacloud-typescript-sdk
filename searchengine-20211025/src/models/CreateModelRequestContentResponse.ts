// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelRequestContentResponse extends $dara.Model {
  /**
   * @example
   * $.result.embeddings[*].embedding
   */
  embeddings?: string;
  static names(): { [key: string]: string } {
    return {
      embeddings: 'embeddings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddings: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

