// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentRankRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docs?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      docs: 'docs',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docs: { 'type': 'array', 'itemType': 'string' },
      query: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docs)) {
      $dara.Model.validateArray(this.docs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

