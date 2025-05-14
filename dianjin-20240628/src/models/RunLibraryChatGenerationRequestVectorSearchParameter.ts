// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunLibraryChatGenerationRequestVectorSearchParameter extends $dara.Model {
  /**
   * @example
   * 10
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

