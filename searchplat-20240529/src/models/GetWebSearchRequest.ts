// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWebSearchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  topK?: number;
  way?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      topK: 'top_k',
      way: 'way',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      topK: 'number',
      way: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

