// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataResponse extends $dara.Model {
  results?: string;
  static names(): { [key: string]: string } {
    return {
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

